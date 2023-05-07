import './style.css';
import { displayDrop } from './components/drop_down';

document.querySelector(".interact").addEventListener('pointerdown', displayDrop);