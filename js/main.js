import { Modal } from './modal.js';
//const modal = new Modal();

document.addEventListener('DOMContentLoaded', () => {
    const add = document.querySelector('#add-list');
    add.addEventListener('click', (e) => Modal.show());

    Modal.init();
});
