export const htmlElements = (()=>{

    function numbButtons(){
        const buttons = [];
        for (let i = 1;i < 10; i++){
            const newButton = document.createElement('button');
            newButton.classList.add('number');
            newButton.setAttribute('data-key',i.toString());
            newButton.textContent = i;
            buttons.push(newButton);
        }

        const zero = document.createElement('button');
        zero.classList.add('number');
        zero.setAttribute('data-key','0');
        const dot = document.createElement('button');
        dot.classList.add('number');
        dot.setAttribute('data-key','.');

        buttons.push(zero,dot);

        return buttons;
    }

    return {
        a: numbButtons,
    }

})()