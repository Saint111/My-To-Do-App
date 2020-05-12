export const List = {
    init(list) {
        this.el = document.createElement('li');
        this.el.classList = 'col s12';
        this.container = list;
    },

    html(options) {
        return `
            <p>
                ${options.task}
            </p>
            <button class="btn-small blue waves-effect waves-light done">
                Done <i class="material-icons right">check</i>
            </button>
            <button class="btn-small red waves-effect waves-light remove">
                Remove
                <i class="material-icons right">delete_forever</i>
            </button>
        `;
    },

    addList(options = {}) {
        options = Object.assign(
            {
                task: null,
            },
            options
        );

        this.el.innerHTML = this.html(options);
        this.container.insertBefore(this.el, this.container.children[0]);
    },
};
