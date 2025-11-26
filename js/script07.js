let total = 0;
for (let i = 1; i <= 5; i++) {
let n = parseInt(prompt(`Digite o ${i}º número:`));
total += n;
}
console.log("Média =", total / 5);