function verificar() {

  let notaPrimeiroSemestre = parseInt(document.getElementById("nota1").value);
  let notaSegundoSemestre = parseInt(document.getElementById("nota2").value);
  let notaTerceiroSemestre = parseInt(document.getElementById("nota3").value);
  let notaQuartoSemestre =  parseInt(document.getElementById("nota4").value);
  let resultado = document.getElementById("resultado");
  let mediaAprovacao = 7;
  let nomeAluno = document.getElementById("nomeAluno").value;
  
  let notaFinal = parseFloat((notaPrimeiroSemestre + notaSegundoSemestre + notaTerceiroSemestre + notaQuartoSemestre) / 4)

  if (notaFinal >= mediaAprovacao) {
    resultado.innerHTML = `Parabéns, ${nomeAluno} Voce foi aprovado sua media final foi ${notaFinal}`;
  } else {
    resultado.innerHTML = `Nao foi dessa vez ${nomeAluno}, sua media final foi de: ${notaFinal} tente no proximo ano!`;
  }
}
