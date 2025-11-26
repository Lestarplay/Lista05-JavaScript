let limite = parseInt(prompt("Digite um número:"));
let somaMultiplos = 0;
for (let i = 1; i <= limite; i++) {
if (i % 3 === 0) somaMultiplos += i;
}
console.log("Soma dos múltiplos de 3 =", somaMultiplos);