/*5_exercicio
Faça uma estrutura if/else para verificar se um usuário pode dirigir;
Armazene em variáveis algumas informações sobre o usuário: idade, 
se tem CNH
Se a idade for maior que 18 e não possuir CNH, exiba uma mensagem;
Se a idade for maior que 18 e tem CNH, exiba uma mensagem;
Se não tiver 18 nem CNH, exiba outra mensagem;*/
cnh = true;
idade = 17;

if(idade >= 18 && cnh == true){
    console.log("você pode dirigir meu patrão");
}else if(idade < 18 || cnh == false){
    console.log("Você não pode dirigir");
}

