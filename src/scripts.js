import './style.css';
import { htmlElements } from './html-elements';
import { myTools } from './tools';

const myModule = (()=>{//Mostly DOM and joining other modules

const panel = document.querySelector('section.panel');
const screen = document.querySelector('section.screen');

const numbers = htmlElements.mkNums();
const operators = htmlElements.mkOper();

myTools.appendFromArr(panel,numbers)
myTools.appendFromArr(panel,operators)

function listenNumbers(){
    const numbers = Array.from( document.querySelectorAll('.number') )
    numbers.forEach(element => {
        element.addEventListener('click',function(e){
            const data = e.target.textContent;
            const intro = getIntro();
            if (intro.textContent != '0'){
                intro.textContent += data;
            } else {
                intro.textContent = data;
            }
        })
    })
}

function getIntro(){
    return document.querySelector('.intro');
}

listenNumbers();


})()