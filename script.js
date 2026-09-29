function calcular() {

    let nome = document.getElementById("nomeAluno").value;
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;

    // Validação do nome
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
        alert("Digite apenas letras no nome!");
        return;
    }

    // Verifica se as notas foram preenchidas
    if (nota1 === "" || nota2 === "") {
        alert("Preencha as duas notas!");
        return;
    }

    // Verifica se as notas são números
    if (isNaN(nota1) || isNaN(nota2)) {
        alert("Digite apenas números nas notas!");
        return;
    }

    nota1 = Number(nota1);
    nota2 = Number(nota2);

    // Verifica se estão entre 0 e 10
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("As notas devem estar entre 0 e 10!");
        return;
    }

    // Calcula a média
    let media = (nota1 + nota2) / 2;

    document.getElementById("media").value = media;

    // Verifica a situação
    if (media >= 7) {
        document.getElementById("situacao").value = "Aprovado";
    } else {
        document.getElementById("situacao").value = "Reprovado";
    }
}


// Calcula automaticamente quando sair da Nota 2
document.getElementById("nota2").addEventListener("blur", calcular);


// Botão Limpar
document.getElementById("limpar").addEventListener("click", function() {

    document.getElementById("nomeAluno").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("media").value = "";
    document.getElementById("situacao").value = "";

});