const Neuron = require("./neuron.js")
const train = require("./train.js")
const start = require("./start.js")

async function main() {
  const neuron = new Neuron()
  const trainedNeuron = await train(neuron)
  start(trainedNeuron)
}

main()