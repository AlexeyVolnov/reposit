class Workout {
    date = this._date
    id = Date.now();

    constructor(distance, duration, coords) {
        this.distance = distance;
        this.duration = duration;
        this.coords = coords;
    }

    get _date() {
        const dateFormat = new Intl.DateTimeFormat(navigator.language, {
            day: 'numeric', month: 'numeric', year: 'numeric'
        });
        return dateFormat.format(new Date());
    }

}


export {Workout}