// step - 1
const EventEmitter = require('events');
const eventObj1 = new EventEmitter();


// step - 2
function wishGoodMorning () { console.log("good morning") }
function reminderForBrkFast () { console.log("time for brk fast") }
function wishGoodAfternoon () { console.log("good afternoon") }
function reminderForLunch () { console.log("time for lunch") }

//step - 3 
eventObj1.on("morning", wishGoodMorning);
eventObj1.on("morning", reminderForBrkFast);
eventObj1.on("afternoon", wishGoodAfternoon);
eventObj1.on("afternoon", reminderForLunch);



//step - 4
eventObj1.emit('morning');
eventObj1.emit('morning');
eventObj1.emit('afternoon');


