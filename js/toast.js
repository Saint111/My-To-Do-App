export const Toast = {
    init() {
        this.timeout = null;
        this.el = document.createElement('div');
        this.el.className = 'my-toast';
    },

    html(options) {
        return `
            <div class="my-toast my-toast-${options.class}">
                <h5>Message: ${options.title}</h5>
                <p>${options.message}</p>
            </div>
        `;
    },

    show(options = {}) {
        options = Object.assign(
            {
                class: 'show',
                title: 'Default title',
                message: 'Default message',
            },
            options
        );

        document.body.insertAdjacentHTML('beforeend', this.html(options));

        this.timeout = setTimeout((e) => {
            document.body.lastElementChild.classList.replace(
                'my-toast-show',
                'my-toast-hide'
            );
            location.reload();
            // const toast = document.querySelectorAll('.my-toast');
            // document.body.lastElementChild.removeChild(
            //     document.body.lastElementChild
            // );
            clearTimeout(this.timeout);
        }, 1500);
    },
};
