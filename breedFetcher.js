const request = require('request');

const breed = process.argv[2];
const webAdress = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(webAdress, (error, response, body) => {
  if (error) {
    console.log('Failed to download: ', error);
    return;
  } else {
    //console.log(body);
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log('Breed not found'); // unable to make the empty array go away.
    }
    console.log(data);
    //console.log(typeof data);
    //console.log(data[0].description);
  }
});

 


