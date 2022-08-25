
function cadastro (nome, idade){
    if (nome == undefined || idade == undefined){
        console.log ('preencha o nome e a idade');
    }
    else{
        console.log("olá " + nome + " bem vindo !!");
    }
}
cadastro("marcos",5);
cadastro("marcos");
