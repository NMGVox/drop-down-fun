function displayDrop() {
    document.querySelector('.drop-down-container').classList.add("visible");
}

function dropFromList(list) {
    let container = document.createElement('div');
    container.id = list.id;
    container.classList.add('drop-down-container');

    for(let i = 0; i < list.items.length; i++) {
        let newItem = document.createElement('div');
        newItem.classList.add('drop-item');
        newItem.style.flexBasis = `${(1 / list.items.length) * 100}%`;
        newItem.textContent = list.items[i];
        container.appendChild(newItem);
    }

    return container;
}

export { displayDrop, dropFromList };