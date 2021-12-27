export const htmlElements = (()=>{

    function numbButtons(){
        const buttons = [];//Create Buttons from 1 to 9
        for (let i = 1;i < 10; i++){
            const newButton = document.createElement('button');
            newButton.classList.add('number');
            newButton.setAttribute('data-key',`${i}`);
            newButton.textContent = i;
            buttons.push(newButton);
        }
        
        //add 0 and dot to the button array
        const zero = document.createElement('button');
        zero.classList.add('number');
        zero.setAttribute('data-key','0');
        zero.textContent = '0';
        const dot = document.createElement('button');
        dot.classList.add('number');
        dot.setAttribute('data-key','.');
        dot.textContent = '.' 

        buttons.push(zero,dot);

        return Array.from(buttons);
    }

    function operatorButtons(){
        const opbuttons = makeButtons(4,'opbtn');
        const fnButtons = makeButtons(3,'fnbtn')
        const opTxt = ['+','-','*','/'];
        const fnTxt = ['DEL','C','=']
        const opKeys = ['add','subs','mult','div']
        const fnKeys = ['del','clear','equals'];

        identifyButtons(opbuttons,opTxt,opKeys);
        identifyButtons(fnButtons,fnTxt,fnKeys);

        const finalArr = opbuttons.concat(fnButtons);
        
        return finalArr
    }

    function makeButtons(quant,clazz){
        const buttons = [];
        for (let i = 0; i<quant; i++){
            const newButton = document.createElement('button');
            newButton.classList.add(clazz);
            buttons.push(newButton)
        }

        return Array.from(buttons);
    }

    function makeLogBox(){
        const newBox = document.createElement('div');
        newBox.classList.toggle('logbox');
        return newBox;
    }

    function identifyButtons(targetArr,txtArr,keyArr){
        for (let i = 0; i < targetArr.length; i++){
            targetArr[i].textContent = txtArr[i];
            targetArr[i].setAttribute('data-key',`${keyArr[i]}`)
        }
    }

    return {
        mkNums: numbButtons,
        mkOper: operatorButtons,
        mkLBox: makeLogBox,
    }

})()