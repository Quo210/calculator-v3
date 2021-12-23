export const htmlElements = (()=>{

    function numbButtons(){
        const buttons = [];
        for (let i = 1;i < 10; i++){
            const newButton = document.createElement('button');
            newButton.classList.add('number');
            newButton.setAttribute('data-key',`${i}`);
            newButton.textContent = i;
            buttons.push(newButton);
        }

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
        const buttons = makeButtons(7,'operator');
        const arr = ['+','-','*','/','DEL','C','='];
        const dataKeys = ['add','subs','mult','div','del','clear','equals']
        for (let i = 0; i < buttons.length; i++){
            buttons[i].textContent = arr[i];
            buttons[i].setAttribute('data-key',`${dataKeys[i]}`)
        }
        
        return buttons
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

    return {
        mkNums: numbButtons,
        mkOper: operatorButtons,
    }

})()