export default class List {
    constructor(container) {
        this.container = container;
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
                    class="btn-small orange waves-effect waves-light left"
                >
                    Undone <i class="material-icons right">check_box</i>
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
        const tag = element.target.tagName;
        const button = element.target;
        const id = JSON.parse(parent.dataset.id);

        //console.log('This:', LIST[JSON.parse(parent.dataset.id)]);
        console.log('This:', localStorage.getItem('TASK'));

        if (tag === 'BUTTON') {
            if (button.classList.contains('blue')) {
                button.classList.replace('blue', 'orange');
                button.innerHTML =
                    'Undone <i class="material-icons right">check_box</i>';
                button.previousElementSibling.setAttribute('class', 'check');
                LIST[id].check = parent.dataset.check = true;
            } else if (button.classList.contains('orange')) {
                button.classList.replace('orange', 'blue');
                button.innerHTML =
                    'Done <i class="material-icons right">check_box_outline_blank</i>';
                button.previousElementSibling.setAttribute('class', 'uncheck');
                LIST[id].check = parent.dataset.check = false;
            } else if (button.classList.contains('red')) {
                parent.style.display = 'none';
                LIST[id].remove = parent.dataset.remove = true;
            }

            localStorage.setItem('TASK', JSON.stringify(LIST));
            //console.log('Now:', LIST[JSON.parse(parent.dataset.id)]);
            console.log('Now:', localStorage.getItem('TASK'));
        }
    }
}
