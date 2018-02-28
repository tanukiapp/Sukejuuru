# node-syoboi
Nodejs module for cal-syoboi.jp

```js
const sukejuuru = new Sukejuuru()
sukejuuru.get(6, "2018-02-26").then(
    (res) => {
        res.data.ProgItems.ProgItem.map((e) => {
            console.log(e['@attributes'].TID)
        })
    }, (err) => {
        console.log(err)
    }
)
```
