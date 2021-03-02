const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
var baralho = [];

for(let i = 0; i < 7 ; i++) {
  for(let j = i; j < 7 ; j++) {
    baralho.push([i,j]);
  }
}

function perguntarPeca () {
  reader.question('Qual peça foi jogada?\n', pecaJogada => {
    pecaJogada = JSON.parse(`[${pecaJogada.charAt(0)},${pecaJogada.charAt(2)}]`);
    baralho = baralho.filter(peca => { return JSON.stringify(peca) != JSON.stringify(pecaJogada) });
    perguntarPeca()
  })
}

perguntarPeca()
