function vogal(){
    let letra = String(prompt("digite uma letra"));
    if(letra === "a"||letra === "e"||letra === "i"||letra === "o"||letra === "u"){
        console.log("a letra é vogal");
    }else{
        console.log("a letra é consoante");
    }
}