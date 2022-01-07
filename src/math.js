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
            alert('Can not divide by zero')
            return a
        }
        return a / b
    }

    function verifyInteger(a){
        if ( (typeof a) === 'number' ){
            return a
        } else {
            return parseFloat(a)
        }
    }

    function roundDecimals(val){
        return Math.round( val * 100 ) / 100
    }

    function enableMath(val){
        const myVal = verifyInteger(val);
        const myRoundedVal = roundDecimals(myVal);
        return myRoundedVal
    }

    function operate(a,b,operator){

        const verfa = verifyInteger(a);
        const verfb = verifyInteger(b);
        let myResult = undefined;

        console.log(verfa)
        console.log(verfb)

        switch(operator){
            case '+':
                myResult = add(verfa,verfb);
                break;
            case '-':
                myResult = subs(verfa,verfb);
                break;
            case '*':
                myResult = mult(verfa,verfb);
                break;
            case '/':
                myResult = divs(verfa,verfb);
                break;
            default:
                console.log('lol js so hard brain hurt :(')
        }

        return roundDecimals(myResult);
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