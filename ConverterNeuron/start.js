const convertСases = [23, 6, 2, 1, 1, 587]
const unconvertСases = [1203, 7532, 7400]

module.exports = function start(neuron) {
  convertСases.forEach(value => {
    console.log(`${value} дол. - это ${neuron.convert(value)} руб.`)
  })

  unconvertСases.forEach(value => {
    console.log(`${value} руб. - это ${neuron.unconvert(value)} дол.`)
  })  
}