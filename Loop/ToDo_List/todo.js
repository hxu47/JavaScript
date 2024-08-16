const todos = [];
let command = prompt("What would you like to do?");

while (command !== "quit") {

    if (command === "new") {
        const newTask = prompt("Enter a new task: ");
        todos.push(newTask);
        console.log(`${newTask} added to the list!`)
    }
    else if (command === "list") {
        console.log("**********************")
        for (let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********************")
    }
    else if (command === "delete") {
        let i = parseInt(prompt("Enter the index of the task you want to delete: "));
        while (!(i >= 0 && i < todos.length)) {
            i = prompt("Invalid index! Please re-enter:");
        }
        const deleted = todos.splice(i, 1);
        console.log(`Ok, deleted ${deleted[0]}`);
    }
    else {
        console.log("Invalid command! Please re-enter!");
    }
    command = prompt("What would you like to do?");


}
console.log("OK QUIT THE APP")
