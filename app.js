
var city1 = {
    city: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    cookiesHour:[],
};
var city2 = {
    city: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesHour:[],
};
var city3 = {
    city: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    cookiesHour:[],
};
var city4 = {
    city: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    cookiesHour: [],
};
var city5 = {
    city:'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    cookiesHour:[],
};



var hoursOpen = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

function avgCookies(city){
  var sum = 0;
  var day = [];

  for (var i=0;i<hoursOpen.length; i++) {
    var avgCookiesHour = Math.floor(Math.random() * ((city.max - city.min + 1) + (city.min)) * (city.avg));
    // console.log('AVERAGE COOKIE', avgCookiesHour);
    city.cookiesHour.push(avgCookiesHour);
    // console.log(city.cookiesHour, 'sdlkbskfdbklsb'); 

    sum += avgCookiesHour;
    // console.log(sum);
    // var li = document.createElement('li');
    day.push( `${hoursOpen[i]} ${avgCookiesHour} Cookies`);
  } 
  console.log(day);
  // for (currentHour  
    // return(hoursOpen[i], city.cookiesHour[i], ' cookies');
    var container = document.getElementById('container');
    // var divElement = document.createElement('div');
    var h2Element = document.createElement('h2');
    
    var ulElement = document.createElement('ul');
    // container.appendChild(divElement);
    container.appendChild(h2Element);
    
    // li.innerHTML = `${day}`;
    // var array = [];
    day.map((each) =>{
      var li = document.createElement('li');
      li.innerHTML = `${each}`;
      ulElement.appendChild(li);
    });
    // ulElement.appendChild(li);
    h2Element.innerHTML = city.city; 
    
    container.appendChild(ulElement);

    
    // var listElement = document.createElement('ul');

    // ${city.cookiesHour}
    // return(hoursOpen[i], city.cookiesHour[i]);
  
}
 
// function print()
  // var container = document.getElementById('container');
  // var divElement = document.createElement('div');
  // var h2Element = document.createElement('h2');
  // h2Element.innerHTML = city5.city; 
  // var listElement = document.createElement('ul');
  // // sectionElement.innerHTML = avgCookies;

  // container.appendChild(h2Element);
  // var sectionElement = document.createElement('section');
  // h2Element.appendChild(sectionElement);
 
  // sectionElement.
  // console.log('Append should happen');
  // document.getElementById('test').textContent = city5.city;
  // return result;

  // for(const city in city5){
  //   console.log(city, city5[avg]);
  

avgCookies(city1);
avgCookies(city2);
avgCookies(city3);
avgCookies(city4);
avgCookies(city5);



