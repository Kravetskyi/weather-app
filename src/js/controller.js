import * as model from './model.js'
import landingPageView from './views/LandingPageView.js';
import sevenDayView from './views/sevenDayView.js';
import hourlyView from './views/hourlyView.js';
import detailsView from './views/detailsView.js';
import cityView from './views/cityView.js';

const controlShowWeather = async function(){
    try{
        // load weather data from the model
        await model.getCurrentWeather('Kyiv');

        // Render loading animation
        sevenDayView.renderLoading();
        hourlyView.renderLoading();
        detailsView.renderLoading();
        cityView.renderSpinner();

    } catch(err){
        console.error(err)
    }
}

const init = function(){
    landingPageView.addHandlerRender(controlShowWeather);
}

init();