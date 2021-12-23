import './style.css';
import { htmlElements } from './html-elements';
import { myTools } from './tools';

const myModule = (()=>{//Mostly DOM and joining other modules

const panel = document.querySelector('section.panel');
const screen = document.querySelector('section.screen');

const numbers = htmlElements.mkNums();
const operators = htmlElements.mkOper();

myTools.appendFromArr(panel,numbers)
myTools.appendFromArr(screen,operators)


})()