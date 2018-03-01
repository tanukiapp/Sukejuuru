const Sukejuuru = require('../index.js')

const sukejuuru = new Sukejuuru()

sukejuuru.get(6, '2018-02-26').then(
  (res) => {
    console.log(res)
  }, (err) => {
    console.log(err)
  }
)
