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

        const key = element.getAttribute('data-key')

        if (key != '.'){
            element.addEventListener('click',function(e){
                const data = e.target.textContent;
                const intro = getIntro();
                if (intro.textContent != ''){
                    intro.textContent += data;
                } else {
                    intro.textContent = data;
                }
            })    
        } else {
            element.addEventListener('click',function(e){
                const data = e.target.textContent;
                const intro = getIntro();
                if (dotAllow()){
                    if (intro.textContent != ''){
                        intro.textContent += data;
                    } else if (intro.textContent == '') {
                        intro.textContent = `0${data}`;
                    }
            }
            })
        }

        
    })
}

function listenOperators(){
    const operators = Array.from( document.querySelectorAll('.opbtn') );
    operators.forEach(element => {
        element.addEventListener('click',function(e){
            const operator = e.target.textContent; // Get Operator string
            // verify if entry is valid, add function that checks FORMAT

            // after it passes the check, get the number
            const value = getIntro().textContent;


            //Also check if the last action was using an operator, if so... modify the display to reflect the new input and do not allow the function to continue it's normal path
            const operatorStatus = checkOperatorStatus();
            const dry = () => {
                //store the value and the operator
                //for the operator simply save it
                math.setOp(operator);

                //for the value, a function decides where to store it: A or B value of the wVals object
                let boolCheck = math.choose();
                setAorBTo(boolCheck,value);
                //finally, post on the logbox. First Create two boxes:
                const numBox = htmlElements.mkLBox();
                const opBox = htmlElements.mkLBox();
                // Fill them with info
                numBox.textContent = value;
                opBox.textContent = operator;
                //Post them
                postOnLog(numBox)
                postOnLog(opBox)
                //Reset Intro for new number
                resetIntro();
            }

            if (operatorStatus === false){
                dry();
            } else {
                const boxArr = Array.from( document.querySelectorAll('div.logbox') );
                const lastBox = boxArr[boxArr.length-1];
                lastBox.textContent = operator;
                math.setOp(operator);
            }
            
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

function listenEqualBtn(){
    const tar = getFnBtns()[2];
    tar.addEventListener('click',function(e){
        //Declare varables to be used
        const intro = getIntro();
        const log = getLog();

        //Determine and capture last number introduced by the user
        const lastVal = intro.textContent;
        const boolCheck = math.choose();
        setAorBTo(boolCheck,lastVal);

        //Report the operator and the number in the logbox, reset the intro slot
        const lastValBox = htmlElements.mkLBox();
        lastValBox.textContent = lastVal;
        log.appendChild(lastValBox);
        resetIntro();

        //Check if the conditions are given to call the math function
        const v = checkNGetConditionsForMath();
        const result = math.operate(v[0],v[1],v[2]);

        //Make a box that posts an equal sign on the log
        const eqBox = htmlElements.mkLBox();
        eqBox.textContent = '=';
        log.appendChild(eqBox);

        //Post the result on the log
        // const rBox = htmlElements.mkLBox();
        // rBox.textContent = result;
        // log.appendChild(rBox);

        //Display result on the intro box
        intro.textContent = result;

        //Reset memory in preparation for new inputs
        resetMemory();
        math.setOp(undefined);
    })
};

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

function checkNGetConditionsForMath(){
    const a = math.getA();
    const b = math.getB();
    const o = math.getOp();
    const myArr = [];
    myArr.push(a,b,o);
    const check = (value) => value != undefined;
    const answer = myArr.every(check);
    if (answer === true){
        return myArr
    } else {
        alert('CONDITIONS NOT MET.')
    }
 }

 function checkOperatorStatus(){
     const myStatus = math.getOp();
     if (myStatus === undefined){
         return false
     } else {
         return true
     }
 }

 function getDotBtn(){
     return document.querySelector('button[data-key="."]')
 }

 function dotAllow(){//Check if we can allow another dot to be written in the introbox
    const introText = getIntro().textContent;
    if (introText.includes(".")){
        return false
    } else {
        return true
    }
 }


// Enable Listeners for Buttons

listenNumbers();
listenOperators();
listenClearAllBtn();
listenDelBtn();
listenEqualBtn();

// Reset Area

function resetIntro(){
    const intro = getIntro();
    intro.textContent = '';
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
    resetMemory();
    resetLog();
}

function deleteLastNumber(){
    const intro = getIntro().textContent;
    let newStr = undefined;
    const lastChar = intro.charAt(intro.length-1);

    if (intro.length > 1){
        const foo = intro.length-1;
        newStr = intro.slice(0,foo);
    } else {
        newStr = '';
    }

    return newStr;
}


return {

}


})()