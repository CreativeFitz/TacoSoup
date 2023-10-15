var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for (i = 0; i < harryPotterTitles.length; i++){
    console.log(`Harry Potter ${harryPotterTitles[i]}`)
}


var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

var As = 0;
var Bs = 0;
var Cs = 0;
var Ds = 0;
var Fs = 0;

letter = 0;
for (i = 0; i < grades.length; i++){
if (grades[i] > 93){
    console.log("You got an A.")
    As = As + 1;
} else if (grades[i] < 93 && grades[i] > 84){
    console.log("You got an B.")
    Bs = Bs + 1;
} else if (grades[i] < 84 && grades[i] > 77){
    console.log("You got an C.")
    Cs = Cs + 1;
} else if (grades[i] < 77 && grades[i] > 70){
    console.log("You got an D.")
    Ds = Ds + 1;
}else {
    console.log("You got an F.")
    Fs = Fs + 1;
}
}


console.log(`Number of students who got A's: ${As}`)
console.log(`Number of students who got B's: ${Bs}`)

sumOfGrades = 0;

for ( i = 0; i < grades.length; i++){
    sumOfGrades = sumOfGrades + grades[i];
}

var averageGrade = sumOfGrades / grades.length

console.log(averageGrade)


// Need to loop through the array
// Need two counters
// On each loop, needs to get the current number
// Check the entire array
// If the number matches then add one to a counter
// Needs to check if looping counter is greater than the current counter
    //If it is greater, than replace current counter with value of looping counter
    //Console.log the value

// CurrentMode is the largest occuring number
// var currentMode = 0;

// // loopMode is the number to compare to CurrentMode to check if larger
// var loopMode = 0;

// for (i = 0; i < grades.length; i++){
//     var currentScore = grades[i];
//     var numberOfOccurences = 0;
//     for(n = 0; n < grades.length; n++){
//        if(currentScore === grades[n]){
//         numberOfOcurrences = numberOfOccurences + 1;
//         if(numberOfOccurences > currentMode){
//             currentMode = numberOfOccurences;
//             loopMode = grades[i];
//            }
//        } 
       
//     }
    
     
// }
//  console.log(`${loopMode} occurs the most!`) 

var sentenceArray = []; 

for (i = 0; i < 9; i++){
    if ((i%2) === 0 && i != 0)
        sentenceArray.push(i);
    if(i === 8){
        console.log(`${sentenceArray[0]} ${sentenceArray[1]} ${sentenceArray[2]} ${sentenceArray[3]} who do we appreciate!`);
    }
}


var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

var completeSentence
for (i = 0; i < sentenceArray.length; i++){
    if (i === 0){
    completeSentence = sentenceArray[i];
    }
    if (i > 0){
    completeSentence = completeSentence + " " + sentenceArray[i];
    }
    if ((i + 1) % 3 === 0 && i != 0 && i != 11){
        completeSentence = completeSentence + ` MOOOOOOO`;
    }
};

console.log(completeSentence)



const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}


for (i = 0; i < beatles.members.length; i++){
    var artistSentence = `${beatles.members[i].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[i].birth}. He contributed heavily to the ${beatles.albums[i]} Album.`

    console.log(artistSentence)
}

