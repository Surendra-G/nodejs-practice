const path = require('path');

console.log(path.dirname('/home/surendragiri/Desktop/Surendra/node js practice/Day2/pathmod.js'));

console.log(path.extname('/home/surendragiri/Desktop/Surendra/node js practice/Day2/pathmod.js'));

console.log(path.basename('/home/surendragiri/Desktop/Surendra/node js practice/Day2/pathmod.js'));


//using parse method to show all the data
const mydata = path.parse('/home/surendragiri/Desktop/Surendra/node js practice/Day2/pathmod.js');
console.log(mydata.name);