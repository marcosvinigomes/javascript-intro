/*
9_exercicio
Verifique se o número é primo!
Um número primo, é um número natural, 
maior que 1 e apenas divisível por si próprio e por 1;
*/
divisao = 0;
numero = prompt("insira um número");
for (x = numero; x > 0; x--) {
    if(numero % x == 0){
        divisao++;
    }
}
if(divisao == 2){
    console.log(divisao + '- O número ' + numero + ' é um número primo')
}else{
    console.log(divisao + '- O número ' + numero + ' não é um número primo')
}