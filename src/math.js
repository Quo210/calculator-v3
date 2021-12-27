export const math = (()=>{

    // Storage

    const wVals = {
        a: undefined,
        b: undefined,
        op: undefined,
    }

    // Getters, Setters


    function getA(){
        return wVals.a
    }

    function getB(){
        return wVals.b
    }

    function getOp(){
        return wVals.op
    }

    function setA(val){
        wVals.a = val
    }

    function setB(val){
        wVals.b = val
    }

    function setOp(val){
        wVals.op = val
    }

    //Math Logic 

    function add(a,b){
        return a + b
    }

    function subs(a,b){
        return a - b
    }

    function mult(a,b){
        return a * b
    }

    function divs(a,b){
        if (b === 0){
            alert('Can not divs by zero')
            return a
        }
        return a / b
    }

    function verifyInteger(a){
        if ( (typeof a) === 'number' ){
            return a
        } else {
            return parseInt(a)
        }
    }

    function operate(operator,a,b){
        switch(operator){
            case '+':
                return add(a,b)
            case '-':
                return subs(a,b)
            case '*':
                return mult(a,b);
            case '/':
                return divs(a,b);
        }
    }
  
    function storeOnA(){
        const aStatus = getA();
        if (aStatus === undefined){
            return true
        } else {
            return false
        }
    }

    return {
        getA,
        getB,
        getOp,
        setA,
        setB,
        setOp,
        operate,
        verifyInteger,
        choose: storeOnA,
    }

})()