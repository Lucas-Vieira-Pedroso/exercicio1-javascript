function picole(){
    let letra = (prompt(`
        selecione o sabor:
        a Chocolate R$ 1,50
        b Morango R$ 2,50
        c Creme R$ 2,50
        d Manga R$ 3,20
        e Melancia R$ 3,40
        f Vanilla Ice R$ 3,00
        g Céu Azul R$ 3,60
        h Brownie R$ 4,00
        i Hawaiano R$ 5,00
    `));
    if(typeof letra === 'string'){
        switch (letra.toLowerCase()){
            case 'a':
                alert("preco: R$1,50");
                break
            case 'b':
                alert("preco: R$2,50");
                break
            case 'c':
                alert("preco: R$2,50");
                break
            case 'd':
                alert("preco: R$3,20");
                break
            case 'e':
                alert("preco: R$3,40");
                break
            case 'f':
                alert("preco: R$3,00");
                break
            case 'g':
                alert("preco: R$3,60");
                break
            case 'h':
                alert("preco: R$4,00");
                break
            case 'i':
                alert("preco: R$5,00");  
                break                          
        }
    }
}