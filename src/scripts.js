import './style.css';
import { htmlElements } from './html-elements';
import { myTools } from './tools';
import { math } from './math';

const myModule = (()=>{//Mostly DOM and joining other modules

const panel = document.querySelector('section.panel');

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

function listenOperators(){
    const operators = Array.from( document.querySelectorAll('.opbtn') );
    operators.forEach(element => {
        element.addEventListener('click',function(e){
            const data = e.target.textContent; // Get Operator string
            // verify if entry is valid, add function that checks FORMAT

            // after it passes the check, get the number
            const value = getIntro().textContent;
            //store the value and the operator
            //for the operator simply save it
            math.setOp(data);
            //for the value, a function decides where to store it: A or B value of the wVals object
            let boolCheck = math.choose();
            setAorBTo(boolCheck,value);
            //finally, post on the logbox. First Create two boxes:
            const numBox = htmlElements.mkLBox();
            const opBox = htmlElements.mkLBox();
            // Fill them with info
            numBox.textContent = value;
            opBox.textContent = data;
            //Post them
            postOnLog(numBox)
            postOnLog(opBox)
            //Reset Intro for new number
            resetIntro();
        })
    })
}

function listenClearAllBtn(){
    const tar = getFnBtns()[1];
    tar.addEventListener('click',function(e){
        clearAll()
    })
}

function listenDelBtn(){
    const tar = getFnBtns()[0];
    tar.addEventListener('click',function(e){
        const newNumb = deleteLastNumber();
        const intro = getIntro();
        intro.textContent = newNumb;
    })
    
}

// Tools

function getFnBtns(){
    return Array.from( document.querySelectorAll('.fnbtn') )  
}

function getIntro(){
    return document.querySelector('.intro');
}

function postOnLog(item){
    const log = document.querySelector('.log');
    log.appendChild(item)
}

function setAorBTo(bool,value){
    if (bool === true){
        math.setA(value);
    } else {
        math.setB(value);
    }
}

function getLog(){
    return document.querySelector('.log');
}

// Enable Listeners for Buttons

listenNumbers();
listenOperators();
listenClearAllBtn();
listenDelBtn();

// Reset Area

function resetIntro(){
    const intro = getIntro();
    intro.textContent = '0';
}

function resetLog(){
    const log = getLog();
    log.innerHTML = '';
}

function resetMemory(){
    math.setA(undefined);
    math.setB(undefined);
    math.setOp(undefined);
}

function clearAll(){
    resetIntro();
    resetMemory;
    resetLog();
}

function deleteLastNumber(){
    const intro = getIntro().textContent;
    let newStr = undefined;

    if (intro.length > 1){
        const foo = intro.length-1;
        newStr = intro.slice(0,foo);
    } else {
        newStr = '0';
    }

    return newStr;
}


return {

}


})()