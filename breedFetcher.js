const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  if (breedName) {
    request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function(error, response, body) {
      if (error) {
        console.log("Error: Undefined Cat Breed or URL Typo", error);
      } else {
        const data = JSON.parse(body);
        const breed = data[0];
        if (breed) {
          callback(null, breed.description);
        } else {
          callback('This breed is not found!', null);
        }
      }
    });
  }
};

module.exports = { fetchBreedDescription };













// Using template literal to incorperate breed to URL
// request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function (error, response, body) {
//   const data = JSON.parse(body);
//   console.log(data);

//   console.log(data[0]["description"]);

// });




