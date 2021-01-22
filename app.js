var sectionElement = document.getElementById('container');
var table =document.createElement('table');
var tableHead = document.createElement('thead');
var tableBody =document.createElement('tbody');
var tableFooter =document.createElement('tfoot');
sectionElement.appendChild(table);
table.appendChild(tableHead);

var stores = [];
var hours = ['','6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:','8pm:', 'Daily Location Total:'];
var factor = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];

// create header for hours
for (var i=0;i <= hours.length; i++){

  var headElement = document.createElement('th');
  headElement.textContent = hours[i];
  tableHead.appendChild(headElement);
}
table.appendChild(headElement);

// city object
function Location(city, min, max, avg) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg; 
  this.day = [];
  this.hours = hours;
  this.dailyTotalSales = 0;
  
  this.averageCookies();
  this.newRow();
  stores.push(this);
  // hourlyTotals();

}
// function generateAvgCust(min, max){
//   return Math.floor(Math.random() * (newFactor - this.min) + 1) + this.min;
// }

// sets random cookies per hour for each store and pushes it into "this.day" arguemnent
Location.prototype.averageCookies = function() {
  var sum = 0;
  // van newMax = [];
  for (var i=0;i<this.hours.length -2; i++) {
    // var newFactor = factor[i] * this.max;
    // console.log(newFactor);
    var avgCookiesHour = Math.floor(Math.random() * ((this.max - this.min) * factor[i]) + this.min);
    var totalCookies = Math.floor(avgCookiesHour * this.avg);
    
    sum += totalCookies;
   
    this.day.push(totalCookies);
    // console.log(totalCookies);
  } 
  this.day.push(sum);
  console.log(this.day);
  return this.day;
}

// creates a new table row and pushes random day number into cell
Location.prototype.newRow = function() {
  var rowElement = document.createElement('tr');
  var cityName = document.createElement('td');
  table.appendChild(tableBody);
  tableBody.appendChild(rowElement);
  rowElement.appendChild(cityName);
  cityName.textContent = this.city; 
  
  for (var i=0;i <= this.day.length - 1; i++){
  // var total = 'Total';
    var cell = document.createElement('td');
    rowElement.appendChild(cell);
    cell.textContent = this.day[i];
    
  }
}

// calculate hourly totals AND add them to table
function hourlyTotals(){
  var rowElement = document.createElement('tr');
  var totalCell = document.createElement('td');
  
  table.appendChild(tableFooter);
  tableFooter.appendChild(rowElement)
  rowElement.appendChild(totalCell);
  totalCell.textContent = 'Hourly Total';
  
  
  
  var hourlyTotal = 0;
  for (var i = 0; i < hours.length -1; i++) {

   
    hourlyTotal = 0;
    

    for (var j = 0; j < stores.length; j++) {

      hourlyTotal += stores[j].day[i];
      
      
    }
    
    var hourCell = document.createElement('td');
    hourCell.textContent = hourlyTotal;
    rowElement.appendChild(hourCell);
  }
}

  // add number for each city at specific hour
  // for (var i=0; i <hours.length -1; i++){
  //   var sumTotal = seattle.day[i] + tokyo.day[i] + dubai.day[i] + paris.day[i] +lima.day[i]
    
  //   var cityName = document.createElement('td');
    
  //   console.log(sumTotal);
  // }
  






var seattle = new Location('Seattle', 23, 65, 6.3);
// seattle.averageCookies();
// seattle.newRow();
// stores.push(seattle);
var tokyo = new Location('Tokyo', 3, 24, 1.2);
// tokyo.averageCookies();
// tokyo.newRow();
// stores.push(tokyo);
var dubai = new Location('Dubai', 11 ,38, 3.7);
// dubai.averageCookies();
// dubai.newRow();
// stores.push(dubai);
var paris = new Location('Paris', 20, 38, 2.3);
// paris.averageCookies();
// paris.newRow();
// stores.push(paris);
var lima = new Location('Lima', 2, 16, 4.6);
// lima.averageCookies();
// lima.newRow();
// stores.push(lima);





console.log(stores);

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
 if (localStorage.getItem('theme') === 'theme-dark'){
     setTheme('theme-light');
 } else {
     setTheme('theme-dark');
 }
}

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
  } else {
      setTheme('theme-light');
  }
})();


// function for adding new store
var formEL = document.getElementById('userInput');

formEL.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event.target.value)

  var city =event.target.city.value;
  var min =event.target.min.value;
  var max =event.target.max.value;
  var avg =event.target.avg.value;

  var newCityConstructor = new Location(city, min, max, avg);

  // location.push(newCityConstructor);
  console.log("new city ", newCityConstructor);
});

// function StoreData(city,min, max, avg) {
//   this.city =city;
//   this.min = min;
//   this.max = max;
//   this.avg = avg;

// }
hourlyTotals();
