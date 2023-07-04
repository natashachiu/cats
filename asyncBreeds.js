// asyncBreeds.js
const fs = require('fs');


const breedDetailsFromFile = function(breed, runWhenDone) {
  // console.log('breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // console.log("In readFile's Callback: it has the data.");
    // Pass data into callback
    if (error) {
      runWhenDone(error, undefined);
      return;
    }

    runWhenDone(undefined, data);
  });

};

const printBreedInfo = (error, breed) => console.log(`Return Value: ${breed}`);

// pass in breed string and callback function
breedDetailsFromFile('Bombay', printBreedInfo);
breedDetailsFromFile('Saphire', printBreedInfo); // => undefined

module.exports = breedDetailsFromFile;


// Aysnc functions must use callback functions to pass data back.