/* Downloaded from https://www.codeseek.co/ */
$(document).ready( function(){
  var unitTemp = "F";
  
 //Gets the latitude and longitude of the user's position using Geolocation API  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( function(position){
       coordinates = position.coords.latitude + "," + position.coords.longitude;
      localWeather(coordinates, unitTemp);
    } );
  }
  // When the circled arrows icon (Change unit) is clicked
  $("#toggleUnits").on("click", function(){
    if (unitTemp == "F"){
      unitTemp = "C";
      localWeather(coordinates, 'F');
    } else {
      unitTemp = "F";
      localWeather(coordinates, 'C');
    }
  } );
 } );
 
//Calls the Really Simple Weather Plugin to fetch data from Yahoo! Weather API
function localWeather(coordinates, unitTemp) {
reallySimpleWeather.weather({
   
    wunderkey: '', // leave blank for Yahoo
    location: coordinates, //your location 
    woeid: '', // "Where on Earth ID"
    unit: unitTemp, // 'c' also works
    success: function(weather) {
      $('#country').html(weather.region +', '+ weather.country);
      $('#city').html(weather.city);
      $('#currently').html(weather.text);
      $('#direction').html(weather.wind.direction);
      $('#speed').html(weather.wind.speed);
      $('#unitsSpeed').html(weather.units.speed);
      
      //shows current date, hour
      var currentdate = new Date();
      var datetime = weather.forecast[0].date + ", "
      + currentdate.getHours() + ":" 
      + currentdate.getMinutes();
      $('#date').html(datetime);
    
       html = '<div>'+weather.temp+'°'+weather.units.temp+'</div>';
	     document.getElementById('weather').innerHTML = html;
      var weathCode=parseInt(weather.code, 10);
     
      var weathIcon='';
       changeAppearance(weathIcon, weathCode);
    },
    error: function(error) {
	      document.getElementById('weather').innerHTML = '<p class="small">'+error+'</p>';
        //document.getElementById('toggleUnits').style.visibility = "hidden";
    }
});
}

function changeAppearance(weathIcon, weathCode) {
  console.log(weathCode);
  switch(weathCode) {
    case 1: weathIcon='mi-storm';
       //thunder/rain
       document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJVGctc0czNTRiVTA')"
      break;
    case 3:
    case 4: 
    case 37:
    case 38:
    case 39: 
    case 45:
    case 47: weathIcon='mi-thunderstorm-alt';
       //thunder/rain
       document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJVGctc0czNTRiVTA')"
      break;
    case 13:
    case 5: 
    case 7: weathIcon='mi-snow-alt';
      //snow
   document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJajZObmZ3ZGxsbVk')";
      break;
     case 6:
     case 10:
     case 17: weathIcon='mi-hail';
      //default
         document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJeHRWNUppX0N2RFk')"
      break;
    case 8: 
    case 9:  weathIcon='mi-rain';
       //thunder/rain
       document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJVGctc0czNTRiVTA')"
      break;
    case 11: 
    case 12:  
    case 40: weathIcon= "mi-rain-heavy";
       //thunder/rain
       document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJVGctc0czNTRiVTA')"
      break;
    case 14: 
    case 15:
    case 16: weathIcon='mi mi-snow';
      //snow
   document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJajZObmZ3ZGxsbVk')";
      break;
    case 20: weathIcon='mi-fog';
      //default
         document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJeHRWNUppX0N2RFk')"
      break;
    case 21: weathIcon='mi-mist';
      //default
         document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJeHRWNUppX0N2RFk')"
       break;
    case 23: weathIcon='mi-wind';
      //default
         document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJeHRWNUppX0N2RFk')"
      break;
    case 24: weathIcon='mi-wind';
      //default
         document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJeHRWNUppX0N2RFk')"
      break;
    case 26: weathIcon='mi-snow-heavy';
      //snow
   document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJajZObmZ3ZGxsbVk')";
      break;
    case 27:
    case 29: weathIcon='mi-cloud-moon';
      //default
         document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJeHRWNUppX0N2RFk')"
      break;
    case 30:  
    case 28: weathIcon='mi-cloud-sun';      
      //sun
            document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJbmN6Rl82TnRKbXM')"
      break;
    case 33: 
    case 31: weathIcon='mi-moon';
      //default
         document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJeHRWNUppX0N2RFk')"
      break;
    case 34: 
    case 32: weathIcon='mi-sun';
            //sun
            document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJbmN6Rl82TnRKbXM')"
      break;
    case 36: weathIcon='mi-temperature';
      //default
         document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJeHRWNUppX0N2RFk')"
      break;
    case 41: 
    case 42: 
    case 43: 
    case 46: weathIcon='mi-snow-heavy';
      //snow
   document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJajZObmZ3ZGxsbVk')";
      break;
    case 44: weathIcon='mi-clouds';
      //default
         document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJeHRWNUppX0N2RFk')"
    case 3200: weathIcon='mi-temperature';
      //default
         document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJeHRWNUppX0N2RFk')"
      break;

    default:
      weathIcon = 'mi-temperature';
      //default
         document.body.style.background = "url('//drive.google.com/uc?id=0B1YOg6GHpDWJeHRWNUppX0N2RFk')"
                  }
  
$('.iconWeath').addClass('mi').addClass(weathIcon);
  
  
}