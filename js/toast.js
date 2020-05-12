export const Toast = {
    init() {
        this.timeout = null;
        this.el = document.createElement('div');
        this.el.className = 'my-toast';
        document.body.appendChild(this.el);
    },

    html(options) {
        return `
            <h5>Message: ${options.title}</h5>
            <p>${options.message}</p>
        `;
    },

    show(options = {}) {
        options = Object.assign(
            {
                title: 'Default title',
                message: 'Default message',
            },
            options
        );
        this.el.classList += ' my-toast-show';
        this.el.innerHTML = this.html(options);
        this.timeout = setTimeout((e) => {
            document.body.lastElementChild.classList.replace(
                'my-toast-show',
                'my-toast-hide'
            );
            const toast = document.body.querySelector('.my-toast-hide');
            document.body.removeChild(toast);
            //location.reload();
            clearTimeout(this.timeout);
        }, 1500);
    },
};
