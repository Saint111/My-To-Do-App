'use strict';
import List from './List.js';

document.addEventListener('DOMContentLoaded', (e) => {
    const modalElems = document.querySelectorAll('.modal');
    M.Modal.init(modalElems);
    const add = document.querySelector('#add-list');
    const container = document.querySelector('#my-list');
    const input = document.querySelector('#data');
    const list = new List(container);

    input.addEventListener('keyup', (e) => {
        if (input.value) {
            if (e.which === 13) {
                list.addList(list.ID, input.value, false, false);
                list.LIST.push({
                    id: list.ID,
                    task: input.value,
                    check: false,
                    remove: false,
                });
                localStorage.setItem('TASK', JSON.stringify(list.LIST));
                input.value = '';
                list.ID++;
                M.Modal.init(modalElems, 'close');
            }
        }
    });

    container.addEventListener('click', list.toggleTask);
});

// document.body.addEventListener('DOMSubtreeModified', (event) => {
//     document.body.lastElementChild;
// });
