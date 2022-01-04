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