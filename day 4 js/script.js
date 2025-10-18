for(let i=1; i<=10; i++)
{
    if(i%2!=0){
        console.log(i);
    }

}

// infinite
for(let i=1; ; i++){
    console.log(i);
}

// multiplication table 

let i;
let n=5;

for(i=1; i<=10; i++)
{
    ans=i*n
    console.log(n,i,ans);
}

// movie activity

let favouraiteMovie="Avatar";

let guessMovie= prompt("Guess my Movie");

while(guessMovie==="quit")
{
    document.writeln(`you are quit succesrully.. my fav movie is ${favouraiteMovie}` );
 break;
}
while(guessMovie===favouraiteMovie){
    document.writeln("You guess successfully..");

}
while(guessMovie!==favouraiteMovie)
{
    document.writeln("try again!");

}


// let fruits=['apple','banana','watermaelon','Papaya']

for(let i=0; i<fruits.length; i++)
{
    console.log(i,fruits[i]);
}

// for of loop

let fruits=['apple','banana','watermaelon','Papaya']

for(fruit of fruits)
{
    console.log(fruit);
}
// for nested array

// let fruits=[['apple','banana'],['watermaelon','Papaya']]

for(list of fruits )
{
    for(name of list)
    {
        console.log(name);
    }
}


//to do list 

let toDoList = [];
let input = prompt("Enter a command: add, list, delete, or quit");

while (true) {
  if (input === "quit") {
    console.log("🛑 Quitting the app... Goodbye!");
    break;
  } 
  
  else if (input === "list") {
    console.log("---------- TO-DO LIST ----------");
    if (toDoList.length === 0) {
      console.log("Your list is empty!");
    } else {
      toDoList.forEach((task, index) => {
        console.log(`${index}: ${task}`);
      });
    }
    console.log("--------------------------------");
  } 
  
  else if (input === "add") {
    let newTask = prompt("Enter a new task:");
    if (newTask && newTask.trim() !== "") {
      toDoList.push(newTask.trim());
      console.log(`✅ '${newTask}' added successfully!`);
    } else {
      console.log("Invalid input. Task not added.");
    }
  } 
  
  else if (input === "delete") {
    if (toDoList.length === 0) {
      console.log("Nothing to delete, your list is empty.");
    } else {
      let index = parseInt(prompt("Enter the index of the task to delete:"));
      if (!isNaN(index) && index >= 0 && index < toDoList.length) {
        let removed = toDoList.splice(index, 1);
        console.log(`🗑️ '${removed[0]}' removed successfully.`);
      } else {
        console.log("Invalid index. Try again.");
      }
    }
  } 
  
  else {
    console.log("-Invalid command. Try again (add, list, delete, quit).");
  }

  input = prompt("Enter a command: add, list, delete, or quit");
}



