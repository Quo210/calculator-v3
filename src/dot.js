export const dotmodule = (()=>{

    let pressed = false;

    function getDotBtn(){
        return document.querySelector('button[data-key="."]')
    }

    function getStatus(){
        return pressed
    }

    function setStatus(bool){
        pressed = bool;
        return bool;
    }

    function toggleStatus(){
        const st = getStatus();
        if (st === true){
            setStatus(false)
        } else {
            setStatus(true)
        }

        console.log('Pressed status was: ',st,`therefore it now is: ${
            (st === true)? false: true
        }`);
    }

    function reset(){
        const st = getStatus();
        if (st === true){
            disable(false);
        }
    }

    function disable(bool){
        toggleStatus();
        const button = getDotBtn();
        button.disabled = bool;
    }

    return {
        getStatus,
        setStatus,
        toggleStatus,
        disable,
        reset
    }

})()