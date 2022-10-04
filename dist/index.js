"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reminders_1 = require("./data/reminders");
console.log(reminders_1.data.map(function (reminder) {
    return {
        name: reminder.name,
        steps: [],
        itemsNeeded: [],
        frequency: 30,
        duration: 15,
        associatedItems: []
    };
}));
