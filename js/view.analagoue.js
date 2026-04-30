"use strict";

export let analogueView = {
    init: function() {
        const CLOCKSIZE = 150;
        const HHANDSIZE = 6;
        const MHANDSIZE = 4;
        const SHANDSIZE = 2;

        aClock.style.width = CLOCKSIZE + 'px';
        aClock.style.height = CLOCKSIZE + 'px';
        aClock.style.backgroundColor = 'white';

        aClock.innerHTML =
            '<div id="hHand"></div> ' +
            '<div id="mHand"></div> ' +
            '<div id="sHand"></div>';

        hHand.style.width = CLOCKSIZE * 0.25 + 'px';
        hHand.style.height = HHANDSIZE + 'px';
        hHand.style.backgroundColor = 'black';
        hHand.style.transformOrigin = "0% 50%";
        hHand.style.position = 'absolute';
        hHand.style.top = CLOCKSIZE / 2 - (HHANDSIZE * 0.5) + 'px';
        hHand.style.left = CLOCKSIZE / 2 + 'px';

        mHand.style.width = CLOCKSIZE * 0.40 + 'px';
        mHand.style.height = MHANDSIZE + 'px';
        mHand.style.backgroundColor = 'black';
        mHand.style.transformOrigin = "0% 50%";
        mHand.style.position = 'absolute';
        mHand.style.top = CLOCKSIZE / 2 - (MHANDSIZE * 0.5) + 'px';
        mHand.style.left = CLOCKSIZE / 2 + 'px';

        sHand.style.width = CLOCKSIZE * 0.48 + 'px';
        sHand.style.height = SHANDSIZE + 'px';
        sHand.style.backgroundColor = 'red';
        sHand.style.transformOrigin = "0% 50%";
        sHand.style.position = 'absolute';
        sHand.style.top = CLOCKSIZE / 2 - (SHANDSIZE * 0.5) + 'px';
        sHand.style.left = CLOCKSIZE / 2 + 'px';
    },

    update: function(hh, mm, ss) {
        let degrees = this.calculateRotation(hh, mm, ss);
        this.rotateHands(degrees);
    },

    calculateRotation: function(hh, mm, ss) {
        return {
            hour:   ((hh % 12)) * (360 / 12) - 90,
            minute: (mm * 6 - 90),
            second: (ss * (360 / 60) - 90),
        };
    },

    rotateHands: function(degrees) {
        hHand.style.transform = "rotate(" + degrees.hour   + "deg)";
        mHand.style.transform = "rotate(" + degrees.minute + "deg)";
        sHand.style.transform = "rotate(" + degrees.second + "deg)";
    }
}