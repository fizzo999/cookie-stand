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
  totalCookiesPerDay: 0,
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
  totalCookiesPerDay: 0,
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
  totalCookiesPerDay: 0,
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
  totalCookiesPerDay: 0,
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
  totalCookiesPerDay: 0,
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
// console.log(Seattle.cookiesPerHourList);
// console.log(Paris.cookiesPerHourList);
// console.log(Dubai.cookiesPerHourList);
// console.log(Tokyo.cookiesPerHourList);
// console.log(Lima.cookiesPerHourList);
// console.log(Seattle.totalCookiesPerDay);

// The worflow we want to do

// Maybe we can create a function that does this???
var divElement = document.createElement('div'); // => <div></div>
var h2Element = document.createElement('h2'); // => <h2></h2>
// var divElement = document.createElement('div'); // => <div></div>

for (var l = 0; l < storeLocations.length; l++) {

  var ulElement = document.createElement('ul'); // <ul></ul>
  for (var k = 0; k < storeLocations[l].cookiesPerHourList.length; k++) {
    var liElement = document.createElement('li'); // <li></li>
    ulElement.appendChild(liElement); // <ul> </li>Frankie</li> </ul>
    liElement.textContent = storeLocations[l].cookiesPerHourList[k]; // <h2>Frankie</h2>
  }
  h2Element.textContent = storeLocations[l];
  // divElement.appendChild(h2Element); // appends everything
  divElement.appendChild(ulElement); // appends everything
}



var sectionElement = document.getElementById('profiles'); // <section id="profiles></section>"
sectionElement.appendChild(divElement); // appends everything


// // create element from nothing
// var breedElement = document.createElement('h3');
// breedElement.textContent = frankie.breed; // <h3>tabby</h3>
// divElement.appendChild(breedElement);

// var imgElement = document.createElement('img'); // <img>
// imgElement.setAttribute('src', 'images/frankie.jpeg'); // <img src="images/frankie.jpeg"
// divElement.appendChild(imgElement);
