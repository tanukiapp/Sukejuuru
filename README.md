# Sukejuuru
Nodejs module for cal.syoboi.jp

### Install

    npm install node-syoboi --save


### Usage

```js
const sukejuuru = new Sukejuuru()

sukejuuru.get(6, "2018-02-26").then(
    (res) => {
        console.log(res)
    }, (err) => {
        console.log(err)
    }
)
```
