let maiores = 0;
for (let i = 1; i <= 10; i++) {
let idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`));
if (idade >= 18) maiores++;
}
console.log("Quantidade de maiores de idade =", maiores);