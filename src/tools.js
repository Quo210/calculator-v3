export const myTools = (()=>{

    function appendFromArr(target,array){
        const mtar = target;
        const marr = array;
        marr.forEach(element => {
            mtar.appendChild(element)
        })
    }

    return {
        appendFromArr,

    }

})()