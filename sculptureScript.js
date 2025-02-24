const sculptureList = require('./data.js'); // import data.js

//const element = sculptureList[0] // <---- comment out this line in your solution!


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
// for (const key in element){
//     console.log(`${key}: ${element[key].length}`)
// }
const sculptureListLengths = [];
for (let i = 0; i < sculptureList.length; i++) {
    const element = sculptureList[i];
    const sculptureLengths = {};
    for (const key in element) {
        sculptureLengths[key] = element[key].length;
    }
    sculptureListLengths[i] = sculptureLengths;
    
}
console.log(sculptureListLengths)
