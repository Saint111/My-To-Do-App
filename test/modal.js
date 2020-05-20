export const Modal = {
    init() {
        this.timeout = null;

        document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('close')) {
                const parent = e.target.closest('.my-modal-overlay');
                e.target
                    .closest('.my-modal-content')
                    .classList.toggle('scale-in');
                return (this.timeout = setTimeout((e) => {
                    parent.classList.add('my-modal-hide');
                    document.body.removeChild(parent);
                    clearTimeout(this.timeout);
                }, 300));
            }
        });
    },

    html() {
        return `
            <div class="my-modal-overlay">
                <div class="my-modal-content scale-transition scale-out">
                    <div class="my-modal-header brown">
                        <h5 class="truncate">Add New List</h5>
                        <button
                            class="btn-small btn-flat waves-effect waves-light close"
                        >
                            <i class="material-icons">close</i>
                        </button>
                    </div>
                    <div class="my-modal-body">
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">add</i>
                                <input type="text" name="new-list" id="new-list" />
                                <label for="new-list"
                                    >Please enter new to do list.</label
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    show() {
        document.body.insertAdjacentHTML('beforeend', this.html());
        let content = document.body.querySelector('.my-modal-content');
        return (this.timeout = setTimeout((e) => {
            content.classList.value += ' scale-in';
            clearTimeout(this.timeout);
        }, 300));
    },
};
