/*Code Challenge 1: Spread Syntax*/
/* Challenge 1 - spread the two arrays below to create a new array 'philosophers' */
const ancientGreekPhilosophers = ["Hypatia", "Socrates", "Zeno"];
const modernPhilosophers = ["Allan Gibbard", "Susan Haack", "Judith Butler"];

const philosophers = [ ...ancientGreekPhilosophers, ...modernPhilosophers ];
console.log(philosophers);

/* Challenge 2 - spread the array below to create a new array 'newStudents' that includes the given studentToAdd object */
const STUDENTS = [
    { name: "Rocky" },
    { name: "Celine" },
    { name: "Masood" },
];
const studentToAdd = { name: "Krystal" };

const newStudents = [...STUDENTS, studentToAdd ];
console.log(newStudents);

/* Challenge 3 - spread the object below to create a new object that updates the students property with the newStudents array that you created in Challenge 2 */
const reactCourse = {
    durationInWeeks: 5,
    name: "React",
    students: STUDENTS    
}

const reactCourseUpdated = {...reactCourse, students: newStudents }; //Updating the students property in the reactCourse object with elements from the newStudents array
console.log(reactCourseUpdated);

/*Code Challenge 2: Ternary Operators*/
// Refactor Challenge #1 
if (1+1===2) {
    console.log('It is true that 1+1 equals 2.');
  } else {
    console.log('It is false that 1+1 equals 2.');
  }
  // Uncomment the below line (line 8) and hit the Run button. You should then see the console log "It is true that 1+1 equals 2." line twice.
  console.log(1+1===2 ? 'It is true that 1+1 equals 2.' : 'It is false that 1+1 equals 2.');
  
  
  // Refactor Challenge #2 - you're on your own for this one buddy!
  if (0) {
    console.log('0 evaluates as true.');
  } else {
    console.log('0 evaluates as false.');
  }
  // Write your revision of the above code using the ternary operator here. Keep the above code - the expected result is that you will see "0 evaluates as false" in the console twice. 
  console.log(0? "0 evaluates as true." : "0 evaluates as false.");
  
  
  // Refactor Challenge #3
  let hungry = true;
  if (hungry) {
    console.log('Go eat something.');
  } else {
    console.log('Keep coding!');
  }
  // Write your revision of the above code using the ternary operator here. Keep the above code - the expected result is that you will see "Go eat something!" in the console twice. 
  console.log(hungry? "Go eat something.": "Keep coding!")
  
  // Refactor Challenge #4! The code you need to refactor is inside the function. For this one, go ahead and replace the contents of this function, rewritten using the ternary operator. You should be able to accomplish this in a single line. 
  //This function is written as an Arrow Function. Dice inside of the parenthesis is the parameter.
  const isEven = (dice) => {
    if ( dice % 2 ) {  
      return false;
    } 
    return true; 
  }
  //This is the above function, but inside of it is a Ternary Operator and not an If/Else statement.
  const isEvenTernary = (dice) => {
    (dice % 2)? false : true;
  }
  
  // This is just code to supplement Refactor Challenge #4; you do not need to do anything with it.
  const MAX = 6;
  let dice = Math.floor(Math.random() * MAX + 1);
  console.log(`You need to roll an odd number to win:\n
    You roll the dice... It tumbles and comes to a stop, showing ${dice} ${(dice > 1) ? 'pips' : 'pip'}! -- ${isEvenTernary(dice) ? 'Better luck next time!' : 'You win!'}`);