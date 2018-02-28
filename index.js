'use strict'

const Dateparser = require('./lib/dateparser.js')
const http = require('http')

class Sukejuuru {
    constructor() {
        this._dateparser = new Dateparser()
        this.api = "http://cal.syoboi.jp"
    }

    /** Gets the schedule between the selected days
     * @param {integer} days - Number of days since the start date
     * @param {date} startDate - Starting date
     */
    get(days, startDate) {
        if (!startDate)
            startDate = new Date().toISOString().split("T")[0]

        return new Promise((resolve, reject) => {
            http.get(`${this.api}/cal_chk.php?alt=json&days=${days}&start=${startDate}`, res => {
                let body = ""

                res.setEncoding("utf8")

                res.on("data", chunk => {
                    body += chunk
                })

                res.on("end", () => {
                    let json
                    let response = []
                    try {
                        json = JSON.parse(body)
                        json.ProgItems.ProgItem.map((e) => {
                            let item = {
                                tid: e['@attributes'].TID,
                                stTime: this._dateparser.getDatetime(e['@attributes'].StTime),
                                count: e['@attributes'].Count,
                                title: e['@attributes'].Title
                            }                            
                            response.push(item)
                        })
                    } catch (err) {
                        reject(err)
                    }

                    resolve(
                        // Remove duplicates
                        response.filter(
                            (item, index, self) => 
                                index === self.findIndex((i) => (i.tid === item.tid))
                        )
                    )
                })
            }).on("error", err => {
                reject(err)
            })
        })
    }
}

const sukejuuru = new Sukejuuru()

sukejuuru.get(6, "2018-02-26").then(
    (res) => {
        console.log(res.length)
    }, (err) => {
        console.log(err)
    }
)