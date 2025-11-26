let numFat = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;
for (let i = numFat; i > 1; i--) {
fatorial *= i;
}
console.log(`Fatorial de ${numFat} = ${fatorial}`);