
function calculadora(){
    let operaciones = document.getElementById('operacion').value;
    let num1 =parseFloat( document.getElementById('num1').value);
    let num2 =parseFloat( document.getElementById('num2').value);


    if(operaciones == 'suma'){
        console.log("deberias hacer una suma");
       console.log(num1+num2) ;
       let resultado = num1+num2;
       document.getElementById('resultado').innerHTML = resultado;
       
    }
    if(operaciones == 'resta'){
        console.log("deberias hacer una resta");
       console.log(num1-num2) ;
       let resultado = num1-num2;
       document.getElementById('resultado').innerHTML = resultado;
    }
   
    if(operaciones == 'multi'){
        console.log("deberias hacer una Multiplicacion");
       console.log(num1*num2) ;
       let resultado = num1*num2;
       document.getElementById('resultado').innerHTML = resultado;
    }
    
    if(operaciones == 'divi'){
        console.log("deberias hacer una division");
       console.log(num1/num2) ;
       let resultado = num1/num2;
       document.getElementById('resultado').innerHTML = resultado;
    }
    
 num1 = document.getElementById('num1').value = "";
 num2 = document.getElementById('num2').value = "";
 let operacion =  document.getElementById('operacion').value="";


if(operaciones!=""){
document.getElementById('operacion').classList.add('is-valid');
document.getElementById('operacion').classList.remove('is-invalid');
}else {
document.getElementById('operacion').classList.remove('is-valid');
document.getElementById('operacion').classList.add('is-invalid');
}


 if(num1!=""){
    document.getElementById('num1').classList.add('is-valid');
    document.getElementById('num1').classList.remove('is-invalid');
}else {
   document.getElementById('num1').classList.add('is-invalid');
    document.getElementById('num1').classList.remove('is-valid');
}


if(num2!=""){
    document.getElementById('num2').classList.add('is-valid');
    document.getElementById('num2').classList.remove('is-invalid');
}else {
    document.getElementById('num2').classList.add('is-invalid');
    document.getElementById('num2').classList.remove('is-valid');
}

    
}

