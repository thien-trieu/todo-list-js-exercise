function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE CHANGES BELOW

const task1 = newTask("Clean Cat Litter 🐈", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry 🧺", "😨");
const task3 = newTask("Sweep the floors 🧹", "Make sure you get all three floors");
const tasks = [task1, task2, task3];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

task2.logState();
task2.markCompleted();
task2.logState();

task3.logState();
task3.markCompleted();
task3.logState();

console.log(tasks);
