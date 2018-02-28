class Dateparser {
    constructor() {}
    /**
     * Extract the date from Syoboi's datetime format (yyyymmddhhMMss)
     * @param {string} datetime 
     */
    getDate(datetime) {
        let _date = datetime.slice(0,8)

        let year = _date.slice(0,4)
        let month = _date.slice(4,6)
        let day = _date.slice(6,8)

        return `${year}-${month}-${day}`
    }

    /**
     * Extract the time from Syoboi's datetime format (yyyymmddhhMMss)
     * @param {string} datetime 
     */
    getDatetime(datetime) {
        let _date = datetime.slice(0,8)
        let _time = datetime.slice(8,14)

        let year = _date.slice(0,4)
        let month = _date.slice(4,6)
        let day = _date.slice(6,8)

        let hours = _time.slice(0,2)
        let minutes = _time.slice(2,4)
        let seconds = _time.slice(4,8)

        return new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`).toISOString()
    }
}

module.exports = Dateparser
