function folha(){
    let desconto = 0
    let nome = String(prompt("digite uma seu nome"));
    let salario = parseInt(prompt("digite seu salário bruto"));
    desconto = (salario * (8/100));
    alert('nome');
    alert("salário bruto: " + salario);
    alert("desconto: " + desconto);
    alert("salário líquido: " + (salario - desconto));
}