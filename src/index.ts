import { data } from "./data/reminders";

console.log(
  data.map((reminder) => {
    return {
      name: reminder.name,
      steps: [],
      itemsNeeded: [],
      frequency: 30,
      duration: 15,
      associatedItems: []
    };
  })
);
