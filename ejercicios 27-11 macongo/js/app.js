var salario = 2500000   
function compra(){
    compra = prompt("1-) almojabana con gaseosa son 15.000 2-) subway con gaseosa 23.000")
    if( compra == 1){
        salario = salario - 15000;
        console.log("le caerá mal porque lleva mucho en el stand");
    }else if(compra == 2){
        salario = salario - 23000;
        console.log("estará llenito y bien");
    }else{
        console.log("lo cotará comprar algo en medellin");
    }
    console.log("tu salario actual es: "+ salario);
    
}