'use strict';
var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var Seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  numOfCustomers: function () {
    var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomCustomersPerHour
  },
  cookiesPerHourList: [],
  totalCookiesPerDay: '',
}

var Tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  numOfCustomers: function () {
    var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomCustomersPerHour
  },
  cookiesPerHourList: [],
  totalCookiesPerDay: '',
}

var Dubai = {
  name: 'Doo Bye',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  numOfCustomers: function () {
    var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomCustomersPerHour
  },
  cookiesPerHourList: [],
  totalCookiesPerDay: '',
}

var Paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  numOfCustomers: function () {
    var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomCustomersPerHour
  },
  cookiesPerHourList: [],
  totalCookiesPerDay: '',
}

var Lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  numOfCustomers: function () {
    var randomCustomersPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomCustomersPerHour
  },
  cookiesPerHourList: [],
  totalCookiesPerDay: '',
}

var storeLocations = [Seattle, Tokyo, Dubai, Paris, Lima];
for (var j = 0; j < storeLocations.length; j++) {
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var customers = storeLocations[j].numOfCustomers();
    var cookiesThisHour = Math.floor(customers * storeLocations[j].avgCookies);
    var cookieString = `${hoursOfOperation[i]}: ${cookiesThisHour} cookies`;
    storeLocations[j].cookiesPerHourList.push(cookieString);
    storeLocations[j].totalCookiesPerDay += cookiesThisHour;



  }
}
// let numbers = [10, 20, 30, 40, 50]

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i]
// }

// console.log(Seattle.cookiesPerHourList);
// console.log(Paris.cookiesPerHourList);
// console.log(Dubai.cookiesPerHourList);
// console.log(Tokyo.cookiesPerHourList);
// console.log(Lima.cookiesPerHourList);
console.log(Seattle.totalCookiesPerDay);















// The worflow we want to do

// Maybe we can create a function that does this???
var divElement = document.createElement('div'); // => <div></div>
var h2Element = document.createElement('h2'); // <h2></h2>

h2Element.textContent = frankie.name // <h2>Frankie</h2>

divElement.appendChild(h2Element); // <div> </h2>Frankie</h2> </div>

var sectionElement = document.getElementById('profiles'); // <section id="profiles></section>"
sectionElement.appendChild(divElement); // appends everything



frankie.generateAge(20);

console.log(frankie);

// create element from nothing
var breedElement = document.createElement('h3');
breedElement.textContent = frankie.breed; // <h3>tabby</h3>
divElement.appendChild(breedElement);

var imgElement = document.createElement('img'); // <img>
imgElement.setAttribute('src', 'images/frankie.jpeg'); // <img src="images/frankie.jpeg"
divElement.appendChild(imgElement);
