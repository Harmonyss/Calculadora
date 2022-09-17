function display(value){   
    Calculadora.visor.value = Calculadora.visor.value + value
}

function evaluateExpression(){
    Calculadora.visor.value =eval(Calculadora.visor.value)
}