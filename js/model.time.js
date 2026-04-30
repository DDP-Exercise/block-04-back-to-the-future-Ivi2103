//meine Uhr wird nicht sichtbar, und ich finde den Fehler leider nicht :((

"use strict";

export let timeModel = {
    time: new Date(),
    updateTime: function() {
        this.time = new Date();
    },
    getHours: function() { return this.time.getHours(); },
    getMinutes: function() { return this.time.getMinutes(); },
    getSeconds: function() { return this.time.getSeconds(); },
}