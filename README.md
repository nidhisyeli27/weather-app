# weather-app

This project requires you to build out a travel app that, at a minimum, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs.

The 3 apis we are going to use are:

1)[Geonames](http://www.geonames.org/) to fetch the latitude, longitude, country of the city.

2)[Weatherbit API](https://www.weatherbit.io/) to fetch the weather forecasts.

3)[Pixabay API](https://pixabay.com/) to fetch the photo of the place.

# Requirements 

This project runs on a local server. It uses Node. Install node by,

```
npm install or npm i
```
If you don't have Node already installed on your machine. Api keys for the above 3 api should be stored in .env folder.

```
GEONAMES_KEY = {your key here}
WEATHERBIT_KEY = {your key here}
PIXABAY_KEY = {your key here}
```

# Running the Application

When those packages have installed, use the following commands to run the development server, build the production, and start the express server, respectively. Note that dev runs webpack-dev-server and has hot-loading enabled.

```
npm run build-dev
npm run build-prod
npm run start
```
Open a web browser and type in the following address:

```
http://localhost:8000/
```

Enter the city, departure date, and return date and then press the submit button.
Information about your destination will appear like state, country, start date, end date, weather and photo of the destination.