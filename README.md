# Contador Peças Dominó

Um assistente CLI para auxiliar jogadores de dominó a realizarem uma contagem das peças. Foi uma das primeiras aplicações que seu desenvolvedor [henriqueyun](github.com/henriqueyun) desenvolveu utilizando javascript.

## Utilizando
Você pode rodar o assistente utilizando:
```
node index.js
```

Para utilizar o assistente basta informar qual foi a última jogada feita escrevendo os digitos que representam os valores da peça separados por um espaço:
```
Qual peça foi jogada?
R: 1 1
```

A inserção deve ser feita **sempre do maior para o menor**, por exemplo para a peça quina-sena o formato da digitação deve ser `5 6` e não `6 5`. Segue o exemplo para piu-duque `1 2`:
```
Qual peça foi jogada?
R: 1 2 // ✅

Qual peça foi jogada?
R: 2 1 // ❌
```
