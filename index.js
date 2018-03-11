'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dateparser = require('./lib/dateparser.js');
var http = require('http');

var sukejuuru = function () {
  function Sukejuuru() {
    _classCallCheck(this, Sukejuuru);

    this._dateparser = new Dateparser();
    this.api = 'http://cal.syoboi.jp';
  }

  _createClass(Sukejuuru, [{
    key: 'get',
    value: function get(days, startDate) {
      var _this = this;

      if (!startDate) {
        startDate = new Date().toISOString().split('T')[0];
      }

      return new Promise(function (resolve, reject) {
        http.get(_this.api + '/cal_chk.php?alt=json&days=' + days + '&start=' + startDate, function (res) {
          var body = '';

          res.setEncoding('utf8');

          res.on('data', function (chunk) {
            body += chunk;
          });

          res.on('end', function () {
            var json = void 0;
            var response = [];
            try {
              json = JSON.parse(body);
              json.ProgItems.ProgItem.map(function (e) {
                var item = {
                  tid: e['@attributes'].TID,
                  stTime: _this._dateparser.getDatetime(e['@attributes'].StTime),
                  count: e['@attributes'].Count,
                  title: e['@attributes'].Title
                };
                response.push(item);
              });
            } catch (err) {
              reject(err);
            }

            resolve(response.filter(function (item, index, self) {
              return index === self.findIndex(function (i) {
                return i.tid === item.tid;
              });
            }));
          });
        }).on('error', function (err) {
          reject(err);
        });
      });
    }
  }]);

  return Sukejuuru;
}();

module.exports = sukejuuru;
