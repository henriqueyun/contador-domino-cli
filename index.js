    console.clear()
    const reader = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    let baralho = []
    let mesa = []

    function iniciarBaralho (){
      baralho = []
      for(let i = 0; i < 7 ; i++) {
        for(let j = i; j < 7 ; j++) {
          baralho.push([i,j]);
        }
      }
    }

    function imprimirBaralho (){
      let menorNumero = baralho[0][0]
      let baralhoString = ''
      baralho.forEach((peca, i) => {
        if (peca[0] > menorNumero) {
          menorNumero = peca[0]
          baralhoString += '\n'
        }
        baralhoString += peca + '  '
      });
      console.log("Contador Dominó CLI")
      console.log(`\n${baralhoString}\n`)
    }

    function contarPecas () {
      let naipes = [
        {nome: 'liso', qtd: 0 },
        {nome: 'piu', qtd: 0 },
        {nome: 'duque', qtd: 0 },
        {nome: 'terno', qtd: 0 },
        {nome: 'quadra', qtd: 0 },
        {nome: 'quina', qtd: 0 },
        {nome: 'sena', qtd: 0 }
      ]
      // verifica todas as peças pra cada naipe
      naipes.forEach((naipe, indiceNaipe) => {
            baralho.forEach((peca) => {
            if(peca.includes(indiceNaipe)) {
                naipes[indiceNaipe].qtd++
            }
        })
        console.log(naipe.nome + ': ' + naipe.qtd)
      })
    }

    function perguntarPeca (msg){
      console.clear()
      if (msg) {
        console.error(`\x1b[1;31m${msg}\x1b[22;37m`)
      }
      imprimirBaralho()
      contarPecas()

      reader.question('\nQual peça foi jogada?\nR: ', pecaJogada => {
        if (pecaJogada === "sair") {
            process.exit(1)
        }

        if (mesa.includes(pecaJogada)) {
            perguntarPeca("Essa peça já foi jogada!")
            return
        }

        mesa.push(pecaJogada)
        pecaJogada = JSON.parse(`[${pecaJogada.charAt(0)},${pecaJogada.charAt(2)}]`)
        baralho = baralho.filter(peca => { return JSON.stringify(peca) != JSON.stringify(pecaJogada) })
        perguntarPeca()
      })
    }

iniciarBaralho()
perguntarPeca()
