/**
 * CarbonJS
 * @author Aurelian Hermand (Bitfertig)
 */

class Carbon extends Date {
    constructor() {
        let arg0 = arguments[0];
        let date = new Date(); // default

        if (typeof arg0 == 'number') {
            date = new Date(arg0);
        }
        if (typeof arg0 == 'string') {
            let str = arg0;
            let now = +date / 1000;
            // https://locutus.io/php/datetime/strtotime/
            let time = window.strtotime(str, now);
            date = new Date(time * 1000);
        }
        if (typeof arg0 == 'object' && arg0.constructor.name == 'Carbon') {
            return arg0;
        }

        super(date);

        return this;
    }
  
    modify(str) {
        let current = +(this) / 1000;
        // https://locutus.io/php/datetime/strtotime/
        let time = window.strtotime(str, current);
        this.setTime(time * 1000);
        return this;
    }

    format(format) {
        // https://locutus.io/php/datetime/date/
        let str = window.date(format, +this / 1000);
        return str;
    }
}

function carbon() { return new Carbon(...arguments); }


