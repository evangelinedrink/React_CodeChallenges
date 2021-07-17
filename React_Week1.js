/*Code Challenge 1: Template Literals */
//CodePen Source: https://codepen.io/Hiddenflower/pen/Vwbpjxb
const cardSuit = "Spades";
const cardValue = 5;
console.log("You turn the card over. It is a " + cardValue + " of " + cardSuit + "!"); // edit this line to use template literal syntax.
//Using Template Literal
console.log(`You turn the card over. It is a ${cardValue} of ${cardSuit}!`);



/*Code Challenge 2: Objects */
//CodePen Source: https://codepen.io/Hiddenflower/pen/vYmmmoO?editors=0011
// 1 - white rabbit
const rabbit = { 
    color: "white",
    checkWatch() {
      console.log(`A ${this.color} rabbit checks his watch and exclaims, 'I\'m late!'`);
    }
  };
  rabbit.checkWatch();
  
  // 2 - spaceship
  const spaceship = { 
    name: "Tsunami",  //This property is named name (specifies the name of the spaceship)
    launch() {
      console.log(`You have launched the spaceship ${this.name}!`)
    }
  };
  spaceship.launch(); 
  
  // 3 - shopping cart
  const cart = {
    contents: [],
    addItem(item) {
      this.contents.push(item); //Pushing the item into the contents array. Need to use the "this" keyword so that the computer will know that contents array is in the cart object.
    },
    
    //Creating a removieItem() method
    removeItem(item){
      //Finding the index of where the item is in the contents array
      let itemIndex= this.contents.indexOf(item);
      
      if(itemIndex> -1) { //Checks to see if the item is already in the contents. If the item is not in the contents array, it will have an array index number of -1. This idea was found at: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array#:~:text=Find%20the%20index%20of%20the,%2C%205%2C%209%5D%3B%20console.
        
        
        this.contents.splice(itemIndex, 1) //Using the splice() method to remove the item in an array. The first says where (index number) the element you want to remove and the next number (1) says how many items you want removed. Info found at this site: https://www.w3schools.com/jsref/jsref_splice.asp
        
        console.log(`The ${item} has been removed.  The items you have in your shopping cart are: ${this.contents}`); //Console will display this sentence telling the user what item has been removed and which items they have in their shopping cart.
      }
    }
  };
  cart.addItem("laptop");
  cart.removeItem("laptop"); //Removing an item from the cart.
  console.log("The cart contains:", cart.contents);
  
  // 4 - lever
  const lever= {
    stamp: "ACME", //Property name is stamp
    pull() { //Method name is pull()
      console.log(`An anvil stamped ${this.stamp} drops on your head.`);
    }
  };
  
  lever.pull(); //Calling the pull() method from the level object
  
  // 5 - Ordering Food
  const order= {
    cafeName: "BobaTea Land",
    orderList: [], //Default is an empty array that will store the items ordered
    //Method that will push items ordered into the orderList array
    addItem(itemsOrdered) {
      this.orderList.push(itemsOrdered);
    }, //Make sure to include a comma when separating out properties and methods in Objects
    
    //Method to show items that were ordered in the Console.
    orderMethod() {
      console.log(`Welcome to ${this.cafeName}! You have ordered the following items: ${this.orderList}`);
    }
  };
  
  //User types in what they want to order in the addItem method below
  order.addItem("Taro Boba Tea and Milk Tea");
  
  //Calling the orderMethod() that will display what the person ordered in the Console
  order.orderMethod();


  /*Code Challenge 3: Class Inheritance */
  //CodePen Source: https://codepen.io/Hiddenflower/pen/MWmmvRe?editors=0011
  class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

//Creating a new child class of the parent class (the parent class is Monster)
class Vampire extends Monster {
  constructor(type, color, gender) {
    super(type, color); //Obtains the properties from the Parent Class (properties are type and color) using the super() method
    this.gender= gender;
  }
  
  //Method for the Vampire Class and vampire objects
  bite() {
    console.log(`The ${this.gender} ${this.type} that has a ${this.color} color bites you on the neck!`);
  }
}

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
  evilSmile() {
    console.log(`The ${this.color} ${this.type} having the element of ${this.element} smiles at you evilly.`);
  }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly.`);
    }
}

//woodDragon Object
const woodDragon = new Dragon("dragon", "brown", "wood");

//Calling the roar() and fly() methods on the woodDragon object. Also called the evilSmile() method.
woodDragon.roar();
woodDragon.fly();
woodDragon.evilSmile();

//grassWerewolf Object
const grassWerewolf= new Werewolf("grass werewolf", "green");

//Calling the howl() method on the grassWerewolf object
grassWerewolf.howl();

//Creating a new object (called scaryVampire) using the Vampire class as a template
const scaryVampire= new Vampire("vampire", "pale", "female"); //Passing in the type, color and gender of the vampire in the parameter list

//Calling the bite() method that was created for the vampire object
scaryVampire.bite();


/*Code Challenge 4: Using the Map Array Method */
//CodePen Source: https://codepen.io/Hiddenflower/pen/vYmmemM?editors=0011 
// 1
const numbers = [1, 1, 2, 3, 5];
const numbersAddFive = numbers.map(n => n+5); //Adding 5 to each number in the numbers array.  The results will be placed in the numbersAdd5 array.
      
// The below line should console.log: [6, 6, 7, 8, 10]
console.log(numbersAddFive); 


// 2 - uncomment the lines that start with "const" and "console.log"
const numbersReformatted = numbers.map(n => n.toString() + ": "); //Turn the numbers into an array of strings (by using the toString() method), add a colon and a space after each number
// The below line should console.log: ["1: ", "1: ", "2: ", "3: ", "5: "] 
console.log(numbersReformatted);


// 3
const words = ["planes", "trains", "automobiles"];
//Using the Slice() method: https://www.w3schools.com/jsref/jsref_slice_string.asp 
const singularWords = words.map(s => s.slice(0,-1)); //The Slice() method extracts part of a string and returns the extracted parts in a new string (in this case it will return in the singularWords array). To display all the letters in the words, except s, to show up in the singularWords array, you have to start at the beginning of the word (0) and then stop before the last letter of the word (-1).
// The below line should console.log: ["plane", "train", "automobile"]
 console.log(singularWords);


// 4:  Capitalize the First Letter of a String in JavaScript: https://www.freecodecamp.org/news/how-to-capitalize-the-first-letter-of-a-string-in-javascript/ 
const firstLetters = words.map(f => f.slice(0,1)); //Only the first letter will be extracted from the word and displayed in the firstLetters array. 
// The below line should console.log: ["p", "t", "a"]
console.log(firstLetters);

// Bonus:
const capitalizedWords = words.map(c => 
       c.slice(0,1).toUpperCase() + //Using slice to get the first letter of the word (0,1). Then using the toUpperCase() method to make the first letter capitalized.  Plus sign will include the rest of the word that is not capitalized (the code for this part of the word is posted below).
       c.slice(1) //Getting the rest of the word starting from index 1 to the end of the stringl     
       );
// The below line should console.log: ["Planes", "Trains", "Automobiles"]
console.log(capitalizedWords);