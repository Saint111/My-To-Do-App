import { Modal } from './modal.js';
import { Toast } from './toast.js';
import { List } from './list.js';

document.addEventListener('DOMContentLoaded', () => {
    const add = document.querySelector('#add-list');
    const list = document.querySelector('#my-list');

    Modal.init();
    Toast.init();
    List.init(list);

    add.addEventListener('click', (e) => Modal.show());
    list.addEventListener('click', (e) => {
        Toast.show({
            class: 'show',
            title: 'Success title.',
            message: 'Success message!',
        });
        List.addList({ task: 'This is some sample text.' });
    });
});

// document.body.addEventListener('DOMSubtreeModified', (event) => {
//     document.body.lastElementChild;
// });
