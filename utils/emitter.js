class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(event, listener) {
        if (!Array.isArray(this.events[event])) {
            this.events[event] = [];
        }
        const target = this.events[event]
        target.push(listener);
        return () => {
            idx = target.indexOf(listener)
            if (idx > -1) {
                target.splice(idx, 1);
            }
        }
    }
    removeListener(event) {
        this.events[event] = null
    }
    emit(event) {
        const args = [].slice.call(arguments, 1);
        const target = this.events[event]
        if (Array.isArray(target)) {
            target.forEach(e => {
                e.apply(this, args)
            })
        }
    }
    once(event, listener) {
        this.on(event, function g() {
            this.removeListener(event, g);
            listener.apply(this, arguments);
        });
    }
}

export default new EventEmitter()

