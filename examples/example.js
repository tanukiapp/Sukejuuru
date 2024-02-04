const Sukejuuru = require('../src/sukejuuru')

const sukejuuru = new Sukejuuru()

sukejuuru.get(6, '2024-01-22').then(
  (res) => {
    console.log(res)
  }, (err) => {
    console.log(err)
  }
)
