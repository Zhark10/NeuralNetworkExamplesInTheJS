const brain = require('brain.js')
const Utils = require("./utils.js")

function main() {
  const utils = new Utils()
  const network = new brain.NeuralNetwork()

  network.train(utils.trainingData, {
    /* 
      Количество итераций для успешного обучения данной нейросети должно 
      быть значительно больше из-за выбранной размерности смайла, 
      но тогда обучение может занять очень много времени
    */
    iterations: 10000,
    logPeriod: 10,
    log: console.log
  })

  utils.testCases.forEach((value, index) => {
    const result = network.run(value)
    console.log(`Result: ${index + 1}`, result.smile > result.sad ? "it`s smile" : "it`s sad")
  })
}

main()