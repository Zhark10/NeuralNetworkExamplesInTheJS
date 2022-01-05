const trainData = {
  usd: 75.32,
  rub: 1
}

module.exports = function train(neuron) {
  return new Promise((resolve) => {
    let i = 0
    do {
      i++;
      neuron.train(trainData.rub, trainData.usd)
      if (i % 10000 === 0) {
        console.error(`Итерация ${i}. Ошибка: ${neuron.lastError}`)
      }
    } while (Math.abs(neuron.lastError) > neuron.ratioToTrain)

    return resolve(neuron)
  })
}