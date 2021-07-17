class Student {
    constructor(name, email, community) {
        //Assigning the parameter values to class properties of the same name using "this" keyword
        this.name = name; 
        this.email = email;
        this.community = community;
    }
};

class Bootcamp {
    constructor(name, level, students= []) { //students is an array initialized as empty (I'm suing default function parameters syntax)
        this.name= name;
        this.level= level;
        this.students= students;
    }
    registerStudent(studentToRegister) { //Have a single parameter, which is an object created from the Student class
       //The sameEmail array will display the email of a new student and the email of that student in the original Students array. If the code finds the same email, it will show it in the sameEmail array 
        const sameEmail= this.students.filter(studentInfo => studentInfo.email ===studentToRegister.email);
        
        //If we don't have anything in the sameEmail array, the length of the array will be equal to zero, 0.
        if(sameEmail.length ===0) { //You can also say if sameEmail.length is equal to true by using if(sameEmail.length). You always have to test the length of the array, because if you just have sameEmail, there will always be a sameEmail array whether or not there is something in it. So, if you wrote if(sameEmail), it will always be true even if there is nothing in the sameEmail array.
            this.students.push(studentToRegister); //The studentToRegister object will be pushed into the students array
            console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`);
        } else {
            console.log(`This student with the email ${studentToRegister.email} has already registered for the bootcamp Web Dev Fundamentals.`);
        }

        //Returning the students array that contains the student's name, email and community
        return this.students;
   
    }
};