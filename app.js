var sectionElement = document.getElementById('container');
var table =document.createElement('table');
var tableHead = document.createElement('thead');
var tableBody =document.createElement('tbody');
sectionElement.appendChild(table);
table.appendChild(tableHead);


hours = ['','6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'];
for (var i=0;i <= hours.length; i++){

var headElement = document.createElement('th');
headElement.textContent = hours[i];
tableHead.appendChild(headElement);
}
table.appendChild(headElement);


function Location(city, min, max, avg) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg; 
  this.day = [];
  this.hours = ['','6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'];

}



Location.prototype.averageCookies = function() {
  var sum = 0;

  for (var i=0;i<this.hours.length -2; i++) {
    var avgCookiesHour = Math.floor(Math.random() * ((this.max - this.min) + 1) + this.min);
    var totalCookies = Math.floor(avgCookiesHour * this.avg);
    
    sum += totalCookies;
   
    this.day.push(totalCookies);
    // console.log(totalCookies);
  } 
  this.day.push(sum);
  console.log(this.day);
  return this.day;
  
}
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

var seattle = new Location('Seattle', 23, 65, 6.3);
seattle.averageCookies();
seattle.newRow();
var tokyo = new Location('Tokyo', 3, 24, 1.2);
tokyo.averageCookies();
tokyo.newRow();
var dubai = new Location('Dubai', 11 ,38, 3.7);
dubai.averageCookies();
dubai.newRow();
var paris = new Location('Paris', 20, 38, 2.3);
paris.averageCookies();
paris.newRow();
var lima = new Location('Lima', 2, 16, 4.6);
lima.averageCookies();
lima.newRow();

console.log(seattle.max);

