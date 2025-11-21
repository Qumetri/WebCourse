const musician = {
  name: 'Sting',
  realName: 'Gordon Matthew Thomas Sumner',
  instrument: {
    type: 'bass'
    }
}

// 2a
let { name, instrument } = musician;
console.log(name, instrument);

// 2b
let { name: nameOfArtist, instrument: instrumentOfArtist } = musician;
console.log(nameOfArtist, instrumentOfArtist);

// 2c
let { instrument: { type: instrumentTypeOfArtist } } = musician;
console.log(instrumentTypeOfArtist);

// 2d
let { instrument: { make: instrumentMakeOfArtist = "unknown" } } = musician;
console.log(instrumentMakeOfArtist);

// 3c
for (let i in musician){
    console.log(`${i} = ${JSON.stringify(musician[i])}`)
    //a bit off the topic, but I found it working better.
}

//task 4c
const musicianJSON = JSON.stringify(musician);
console.log(musicianJSON);

//task 4d
let brandNewMusician = JSON.parse(musicianJSON)
console.log(brandNewMusician)

//task 5a

function getRandomIntegerFromRange(startRange, endRange){
    return Math.round((endRange - startRange) * Math.random() + startRange) 
}
//ceil floor
console.log(getRandomIntegerFromRange(20, 80))


function getTimeDifferenceInFullDays(startDate, endDate){
    return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
} 
console.log(getTimeDifferenceInFullDays(new Date('11.11.2022'), new Date()))