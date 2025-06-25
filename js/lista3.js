//professor em alguns comentarios meus pelo codigo que quando eu for pegar pra estudar fica mais facil de entender

// questão 1

function calcularIdade() {
    let dataNasc = prompt('Digite a sua data de nascimento (formato DD/MM/YYYY): ');
    let partes = dataNasc.split("/");           // esse codigo serve para separar quando aparece "/"
    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]) - 1;          // -1 porque os meses vão de 0 a 11
    let ano = parseInt(partes[2]);

    let nascimento = new Date(ano, mes, dia);   // junta tudo
    let hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();  // pega o ano inteiro

    //Ja fez aniversario?
    let jaFezAniversario;

    if(hoje.getMonth() > nascimento.getMonth()){                // Se o mês atual já passou do mês do aniversário
        jaFezAniversario = true;
    } else if (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() >= nascimento.getDate()) { // Se estamos no mesmo mês e o dia de hoje é igual ou depois do dia de nascimento
        jaFezAniversario = true;
    } else {
        jaFezAniversario = false;
    }

    if (!jaFezAniversario) {    // se ainda nãp fez aniversario esse ano diminue um ano de idade 
            idade--;
    }

    //quantos dias faltam pro aniversario
    let proxAniver = new Date(hoje.getFullYear(), mes, dia);    // pega qumado foi/vai ser o aniversario esse ano ex: 25/08/2025

    if (hoje > proxAniver) {
        proxAniver.setFullYear(hoje.getFullYear() + 1);     // se aniver já passou passa pro proximo aniver(adicionando +1)
    }

    let diasfaltEmMiliseg = proxAniver - hoje;       // calcula a diferença entre as duas datas(em milisegundos(porque o js é assim))

    let diasFaltando = Math.ceil(diasfaltEmMiliseg / (1000 * 60 * 60 * 24));    // transforma os milissegundos em dias.

    document.getElementById("resultado1").innerHTML = 
        "<h1>Idade: " + idade + " anos</h1>" +
        "<p>Faltam: " + diasFaltando + " dias para o próximo aniversário</p>";

}

// Questão 2 

function gerarTabelaDatas() {   // serve para puxar mais facil o resultado no html
    
    let dataInicialStr = prompt("Digite a data inicial (formato DD/MM/YYYY):");
    let semanas = parseInt(prompt("Digite o número de semanas (Ex: domingo - 0):"));

    let partes = dataInicialStr.split("/");     // converte para date
    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]) - 1;  // mês começa em 0
    let ano = parseInt(partes[2]);

    let data = new Date(ano, mes, dia);     //junta tudo

    let resultado = "<table border='1'><tr><th>Datas</th></tr>";    // cria a tabela

    for (let i = 0; i < semanas; i++) {
        let diaFormatado = data.getDate().toString().padStart(2, '0');              // .toString() / transforma o número em texto
        let mesFormatado = (data.getMonth() + 1).toString().padStart(2, '0');       // .padStart(2, '0') / adiciona um zero à esquerda se tiver menos de dois dígitos.
        let anoFormatado = data.getFullYear();

        resultado += "<tr><td>" + diaFormatado + "/" + mesFormatado + "/" + anoFormatado + "</td></tr>";

        data.setDate(data.getDate() + 7); // soma 7 dias na data
    }

    resultado += "</table>";    //termina a tabela

    document.getElementById("resultado2").innerHTML = resultado;    // escreve o resultado

}

// questão 3

function gerarAposta() {

    let numeros = [];

    while (numeros.length < 6) {                        //loop continua ate o arrey numeros ter 6 digitos
        let n = Math.floor(Math.random() * 60) + 1;    // gera número de 0 a 59/ + 1 = 1 a 60
        //.round pode gerar numeros tipo 0 por isso não é aconselhado usar 

        if (!numeros.includes(n)) { // verifica se já foi sorteado
            numeros.push(n);
        }
    }

    // Ordenar os números
    numeros.sort((a, b) => a - b);

    let tabela = "<table border='1'><tr>";      // cria a tabela

    for (let i = 0; i < numeros.length; i++) {
        tabela += "<td>" + numeros[i].toString().padStart(2, '0') + "</td>";
    }

    tabela += "</tr></table>";

    document.getElementById("resultado3").innerHTML = tabela;
}