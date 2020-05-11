import { Modal } from './modal.js';
import { Toast } from './toast.js';

document.addEventListener('DOMContentLoaded', () => {
    const add = document.querySelector('#add-list');
    const list = document.querySelector('#my-list');

    Modal.init();

    add.addEventListener('click', (e) => Modal.show());
    list.addEventListener('click', (e) => {
        Toast.show({
            class: 'show',
            title: 'Success title.',
            message: 'Success message!',
        });
    });
});

// document.body.addEventListener('DOMSubtreeModified', (event) => {
//     document.body.lastElementChild;
// });
