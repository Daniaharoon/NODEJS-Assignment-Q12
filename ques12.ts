// /  12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let myFrnds:string[] = ["Maham", "Aliza", "Saba"];
myFrnds.map((item) =>{
    console.log(`Dear ${item}, How are you.`);
})