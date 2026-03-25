function pagamento(){
    let porcento = 0
    let desconto = 0;
    let salario = parseInt(prompt("digite seu salário"));
    if(salario <= 1000){
        desconto = (salario * (8/100));
        porcento = 8;
    }else if(salario > 1000 && salario < 1500){
        desconto = (salario * (8.5/100));
        porcento = 8.5;
    }else{
        desconto = (salario * (9/100));
        porcento = 9;
    }
    alert("salario " + salario);
    alert("porcentagem do desconto " + porcento);
    alert("valor descontaod " + desconto);
    alert("salario liquido " + (salario - desconto));
}