export default class List {
    constructor(container) {
        this.container = container;
        this.LIST = null;
        this.ID = null;

        const data = localStorage.getItem('TASK');

        if (data) {
            this.LIST = JSON.parse(data);
            this.ID = this.LIST.length;
            this.loadList(this.LIST);
        } else {
            this.LIST = [];
            this.ID = 0;
        }
    }

    addList(id, task, check, remove) {
        if (remove) {
            return;
        }
        const LINE = check ? 'check' : 'uncheck';
        const CHECK = check
            ? `
                <button
                    class="btn-small orange waves-effect waves-light right"
                >
                    Undone <i class="material-icons left">check_box</i>
                </button>`
            : `
                <button
                    class="btn-small blue waves-effect waves-light left"
                >
                    Done <i class="material-icons right">check_box_outline_blank</i>
                </button>`;

        const LI = document.createElement('li');
        LI.className = 'col s12';
        LI.setAttribute('data-id', `${id}`);
        LI.setAttribute('data-task', `${task}`);
        LI.setAttribute('data-check', `${check}`);
        LI.setAttribute('data-remove', `${remove}`);

        LI.innerHTML = `
            <p class="${LINE}">${task}</p>
            ${CHECK}
            <button
                class="btn-small red waves-effect waves-light right"
            >
                Remove
                <i class="material-icons right">delete_forever</i>
            </button>`;

        this.container.insertBefore(LI, this.container.children.lastChild);
    }

    loadList(array) {
        array.forEach((key) => {
            this.addList(key.id, key.task, key.check, key.remove);
        });
    }

    toggleTask(element) {
        const data = localStorage.getItem('TASK');
        const LIST = JSON.parse(data);
        const parent = element.target.parentNode;
        if (
            element.target.tagName === 'BUTTON' &&
            parent.hasAttribute('data-check')
        ) {
            const check = JSON.parse(parent.attributes['data-check'].value)
                ? true
                : false;

            if (check) {
                element.target.classList.replace('orange', 'blue');
                element.target.innerHTML =
                    'DONE <i class="material-icons right">check_box_outline_blank<i>';
                parent.setAttribute('data-check', 'false');
                element.target.previousElementSibling.setAttribute(
                    'class',
                    'uncheck'
                );
                LIST[parent.dataset.id].check = JSON.parse(
                    parent.dataset.check
                );
            } else {
                element.target.classList.replace('blue', 'orange');
                element.target.innerHTML =
                    'UNDONE <i class="material-icons right">check_box<i>';
                parent.setAttribute('data-check', 'true');
                element.target.previousElementSibling.setAttribute(
                    'class',
                    'check'
                );
                LIST[parent.dataset.id].check = JSON.parse(
                    parent.dataset.check
                );
            }
            console.log('CHECK UPDATE:', LIST[JSON.parse(parent.dataset.id)]);
            localStorage.setItem('TASK', JSON.stringify(LIST));
            console.log(localStorage.getItem('TASK'));
        }
    }
}
