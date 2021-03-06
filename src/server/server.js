// Setup empty JS object to act as endpoint for all routes
const dotenv = require('dotenv')
dotenv.config()
var path = require('path');
const fetch = require('node-fetch')
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
// Dependencies 
const bodyParser = require('body-parser')
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'));
const host = 'localhost';
const port = 8000;


module.exports = app;
// Personal API Key for GeoNames API
const geoName_Root= "http://api.geonames.org/searchJSON?q="
const geoName_ApiKey= `&username=${process.env.geoname_username}`
const geoName_Params= "&maxRows=1&fuzzy=0.6"

// Personal API Key for Weatherbit API
const weatherbit_Root= "https://api.weatherbit.io/v2.0/forecast/daily?"
const weatherbit_ApiKey= `&key=${process.env.weatherbit_key}`
const weatherbit_Params= "&lang=en&units=M"

// Personal API Key for Weatherbit API
const pixabay_Root= "https://pixabay.com/api/?q="
const pixabay_ApiKey= `&key=${process.env.pixabay_key}`
const pixabay_Params= "&image_type=photo"

let lng
let lat
let userData={};
// To get todays date
let d = new Date();
userData['todayDate'] = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();
// Spin up the server
const server = app.listen(port,host, listening);
 function listening(){    
    console.log(`running on localhost: ${port}`);
  };

app.get('/', (req, res) => {
  res.status(200).send('./dist/index.html');
});

app.post("/add", (req, res) => {
  userData['city']= req.body.city;
  userData['startdate']= req.body.startdate;
  userData['returnDate']= req.body.returnDate;
  userData['noOfDays']= req.body.noOfDays;
  userData['daysLeft']= req.body.daysLeft;
  console.log("add data"+userData)
  res.send('recived');
})



app.get("/geonames", (req, res) => {
  const geonamesURL=geoName_Root+userData['city']+geoName_ApiKey+geoName_Params;
  console.log(`geonamesURL: ${geonamesURL}`);
  fetch(geonamesURL)
  .then((res) => res.json())
  .then(response => {    
      console.log(response);
  try {
      userData['state']=response.geonames[0].adminName1;
      userData['country']=response.geonames[0].countryName;
      userData['lng']= response.geonames[0].lng;
      userData['lat']=response.geonames[0].lat;
      console.log(`lat = ${userData['lat']}  lng= ${userData['lng']}`);
      res.send(true);
  } catch (err) {
      console.log("error", err);
  }
})
});

app.get("/weatherbit", (req, res) => {
  const weatherbitURL=`${weatherbit_Root}lat=${userData['lat']}&lon=${userData['lng']}${weatherbit_ApiKey}${weatherbit_Params}`;
  console.log(`weatherbitURL: ${weatherbitURL}`);
  fetch(weatherbitURL)
  .then((res) => res.json())
  .then(response => {    
      //console.log(response);
  try {
      userData['temp']= response.data[0].temp;
      userData['desc']=response.data[0].weather.description;
      userData['icon']=response.data[0].weather.icon;
      
      console.log(`temp = ${userData['temp']}  desc= ${userData['desc']}`);
      res.send(true);
  } catch (err) {
      console.log("error", err);
  }
})
  
});

app.get("/pixabay", (req, res) => {
  const pixabayURL=`${pixabay_Root}${userData['city']},${userData['country']}${pixabay_ApiKey}${pixabay_Params}`;
  console.log(`pixabayURL: ${pixabayURL}`);
  fetch(pixabayURL)
  .then((res) => res.json())
  .then(response => {    
     // console.log(response);
      if(response.total !=0){
        try {
          userData['image1']= response.hits[0].webformatURL;
          
          console.log(`image1 = ${userData['image1']} `);
          res.send(true);
      } catch (err) {
          console.log("error", err);
      }     
      }else{
        const pixabayURL1=`${pixabay_Root}${userData['country']}${pixabay_ApiKey}${pixabay_Params}`;
        console.log(`pixabayURL: ${pixabayURL1}`);
        fetch(pixabayURL1)
        .then((res) => res.json())
        .then(response => {    
          try {
            userData['image1']= response.hits[0].webformatURL;
            
            console.log(`image1 = ${userData['image1']} `);
            res.send(true);
        } catch (err) {
            console.log("error", err);
        } 
        })
      }

})
  
});

app.get('/load', (req, res) => {
  console.log(userData);
  res.send(userData);
})