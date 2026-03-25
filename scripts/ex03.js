function financeiro(){
    let saldo = 0;
    let total = 0;
    let totald = 0;
    if(confirm("deseja realziar o balanço financeiro")){
        for(i = 1; i<12; i++){            
            let bruto = parseFloat(prompt("digite o ganho bruto do mes " + i));
            let gasto = parseFloat(prompt("digite os gastos do mes " + i));
            if (!isNaN(bruto)){
                if(!isNaN(gasto)){
                    total += bruto;
                    totald += gasto;
                }else{
                    alertf("numero invalido");
                }
            }else{
                alert("numero inválido");
            }
        
    }
    alert("o ganho total anual é " + total);
    alert("o gasto total anual é " + totald);
    saldo = total - totald;
    alert("o sando anual é " + saldo);
    if(saldo > 0){
        alert("houve lucro");
    }else{
        alert("houve prejuizo");
    }
}else{
    alert("pobre");
}
}