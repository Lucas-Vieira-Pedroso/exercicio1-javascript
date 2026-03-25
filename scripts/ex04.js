function ordenacao(){
    const numero = [];
    for(let i=0; i<4; i++){
        let n = parseFloat(prompt("digite um valor aceitavel (opcional)"));
        if(!isNaN(n)){
            numero.push(n);
        }else{
            alert("não era opcional é pra colocar certo");
            i--;
        }
    }
    function insertionSort() {
    for (let i = 1; i < vetor.length; i++) {
        let chave = vetor[i];
        let j = i - 1;
        while (j >= 0 && vetor[j] < chave) { 
            vetor[j + 1] = vetor[j];
            j--;
        }
        vetor[j + 1] = chave;
    }
    return vetor;
}
    const numerosOrdenados = insertionSort(numero);
    alert("A ordem decrescente é: " + numerosOrdenados);
}