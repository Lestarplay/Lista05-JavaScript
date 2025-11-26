let maior = Number.MIN_SAFE_INTEGER;
let menor = Number.MAX_SAFE_INTEGER;
for (let i = 1; i <= 10; i++) {
let valor = parseInt(prompt(`Digite o ${i}º número:`));
if (valor > maior) maior = valor;
if (valor < menor) menor = valor;
}
console.log("Maior =", maior);
console.log("Menor =", menor);