function duasBolasDeCristal(resultadosPorAndar: boolean[]): number {


  return -1;
}

const totalDeAndares = 9;
const andarOndeQuebra = Math.round(totalDeAndares / 2);

const resultadosPorAndar = []

for (let andar = 1; andar <= totalDeAndares; andar += 1) {
  resultadosPorAndar.push(andar >= andarOndeQuebra)
}

console.log(resultadosPorAndar)


// console.log(twoCrystalBalls([]))
