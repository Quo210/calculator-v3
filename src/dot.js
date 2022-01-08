export const dotmodule = (()=>{

    let pressed = false;

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
    }

    return {
        getStatus,
        setStatus,
        toggleStatus
    }

})()