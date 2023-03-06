QtdHomem = 0;
QtdMulher = 0;
AltHomem = 0;
Media = 0;
maiorAlt = 0;
menorAlt = 0;


for (var i=0; i < 15; i++){
    var altura = parseFloat(prompt("Informe sua altura: "))
    var sexo = prompt("Qual seu sexo? (M/F)")

    if (i==0){
        maiorAlt = altura;
        menorAlt = altura;
    } 

    else {
        if (altura>maiorAlt){
            maiorAlt = altura;
        }
         if (altura<menorAlt) {
            menorAlt = altura;
        }
        
    }


    if (sexo == "F"){
        QtdMulher++
    }
    else{
        QtdHomem++
        AltHomem = altura + AltHomem;
        
    }
}



Media = AltHomem/QtdHomem;
console.log("A maior altura do grupo é: "+ maiorAlt + "A menor altura do grupo é: "+menorAlt);
console.log("A média da altura dos homens é: "+Media);
console.log("O número de mulheres é: " + QtdMulher);
