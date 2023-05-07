import './style.css';
import { displayDrop } from './components/drop_down';
import { menu1 } from './components/items';
import { dropFromList } from './components/drop_down';

async function showDropDown() {
    document.querySelector('.sidebar').appendChild(dropFromList(menu1));
    setTimeout(function() { document.querySelector(`#${menu1.id}`).classList.add('visible') },2);
}

document.querySelector(".interact").addEventListener('pointerdown', () =>  showDropDown(), false);