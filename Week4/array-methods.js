const emailList = [
    {
        id: 234,
        author: {
            firstName: "Natalie",
            lastName: "Childs"
        },
        to: "Calvin",
        message: "Heyyyy",
        read: false,
        tags: [
            "not important",
            "personal"
        ]
    },
    {
        id: 1654,
        author: {
            firstName: "Natalie",
            lastName: "Childs"
        },
        to: "Calvin",
        message: "What's up?",
        read: true,
        tags: [
            "work"
        ]
    },
    {
        id: 474,
        author: {
            firstName: "Dylan",
            lastName: "Green"
        },
        to: "Calvin",
        message: "Good day",
        read: false,
        tags: []
    }
]

// Map to how we want to display
const emailDisplayStrings = emailList.map( email => email.author.firstName + ": " + email.message );
alert(emailDisplayStrings);

// Mark all as read

// We could do it with a normal for loop
// for(let i = 0; i < emailList.length; i) {
//    emailList[i].read = true;
// }

// Or with a for of loop
// for( const email of emailList ) {
//    email.read = true;
// }

// But most experienced developers would do this with .forEach()
emailList.forEach( email => email.read = true );

// Filter for all unread
const allUnreadEmails = emailList.filter( email => !email.read )

// Find All Emails From One Person
const allEmailsFromNatalie = emailList.filter( email => email.author.firstName === "Natalie" )

console.log(emailList);
console.log(allEmailsFromNatalie);

if(!allEmailsFromNatalie.length) {
    // only runs if there are no emails from Natalie
}