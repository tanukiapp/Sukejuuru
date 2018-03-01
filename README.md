# Sukejuuru
Nodejs module for cal.syoboi.jp

No production dependencies, pure Node.js!

### Install

    npm install sukejuuru --save


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
### Example output

    [ { tid: '1765',
        stTime: '2018-02-26T06:00:00.000Z',
        count: '25',
        title: 'ご姉弟物語' },
    { tid: '3666',
        stTime: '2018-02-26T07:00:00.000Z',
        count: '25',
        title: '手裏剣戦隊ニンニンジャー' },
    { tid: '1903',
        stTime: '2018-02-26T07:15:00.000Z',
        count: '',
        title: 'はなかっぱ' },
    { tid: '1696',
        stTime: '2018-02-26T07:30:00.000Z',
        count: '100',
        title: '幽☆遊☆白書' },
        ...
    ]

### Testing

    npm test

### Building

    npm run build