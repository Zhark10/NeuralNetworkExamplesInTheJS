class Neuron {
  constructor() {
    this.weigth = 50
    this.lastError = 0
    this.ratioToTrain = 0.00001
  }

  convert(inputValue) {
    return inputValue * this.weigth
  }

  unconvert(outputValue) {
    return outputValue / this.weigth
  }

  train(inputValue, expectedResult) {
    const actualResult = inputValue * this.weigth
    this.lastError = expectedResult - actualResult
    const correction = (this.lastError / actualResult) * this.ratioToTrain
    this.weigth += correction
  }
}

function main() {
  const trainData = {
    usd: 75.32,
    rub: 1
  }

  const neuron = new Neuron()

  let i = 0
  do {
    i++;
    neuron.train(trainData.rub, trainData.usd)
    if (i % 10000 === 0) {
      console.error(`Итерация ${i}. Ошибка: ${neuron.lastError}`)
    }
  } while (Math.abs(neuron.lastError) > neuron.ratioToTrain)

  const cases = [23, 6, 2, 1, 1, 587]

  cases.forEach(value => {
    console.log(`${value} руб. - это ${neuron.convert(value)} дол.`)
  })
}

main()