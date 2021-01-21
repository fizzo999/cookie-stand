'use strict';

var elTarget = document.getElementById('profiles');
var table = document.createElement('table');
elTarget.appendChild(table);
var tableHead = document.createElement('thead');
table.appendChild(tableHead);
var tableBody = document.createElement('tbody');
table.appendChild(tableBody);

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals'];

// var howLongAreYouOpenStart = 6;
// var howLongAreYouOpenEnd = 8;
// for (i = 0; i < (howLongAreYouOpenStart - howLongAreYouOpenEnd); i++) {
// }

var tableTop = document.createElement('th');
tableTop.textContent = ' ';

tableHead.appendChild(tableTop);

for (var i = 0; i < hoursOfOperation.length; i++) {
  var tableTop = document.createElement('th');
  tableTop.textContent = hoursOfOperation[i];
  tableHead.appendChild(tableTop);
}

function Stores(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.openHours = hoursOfOperation;
  this.totalCookiesPerDay = 0;
  this.arrayOfHourlyCookies = [];
}

Stores.prototype.numOfCustomers = function () {
  // var totalCookiesPerDay = 0;
  for (var i = 0; i < hoursOfOperation.length - 1; i++) {
    var cookiesThisHour = Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) * this.avgCookies);
    this.totalCookiesPerDay += cookiesThisHour;
    this.arrayOfHourlyCookies.push(cookiesThisHour);
  }
  this.arrayOfHourlyCookies.push(this.totalCookiesPerDay);
}

Stores.prototype.printTable = function () {
  var row = document.createElement('tr');
  var nameCell = document.createElement('td');
  tableBody.appendChild(row);
  nameCell.textContent = this.name;
  row.append(nameCell);

  for (var i = 0; i < hoursOfOperation.length; i++) {
    var dataCell = document.createElement('td');
    dataCell.textContent = this.arrayOfHourlyCookies[i];
    row.appendChild(dataCell);
  }
}

// populate the footer row, with the totals per store, per hour (think of a loop within a loop)
function createFooter() {
  var row = document.createElement('tr');
  var nameCell = document.createElement('td');
  tableBody.appendChild(row);
  nameCell.textContent = 'Totals';
  row.append(nameCell);
  // first start looping throuogh our total number of hours
  var totalOfTotals = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < hoursOfOperation.length; i++) {
    // we just need to remember to reset at each hour
    hourlyTotal = 0;
    for (var j = 0; j < storeLocations.length; j++) {
      hourlyTotal += storeLocations[j].arrayOfHourlyCookies[i];
      totalOfTotals += storeLocations[j].arrayOfHourlyCookies[i];
      console.log(hourlyTotal);
    }
    var dataCell = document.createElement('td');
    dataCell.textContent = hourlyTotal;
    row.appendChild(dataCell);
  }
  // return totalOfTotals, hourlyTotal;
}



var seattle = new Stores('Seattle', 23, 65, 6.3);
seattle.numOfCustomers();
seattle.printTable();
var tokyo = new Stores('Tokyo', 3, 24, 1.2);
tokyo.numOfCustomers();
tokyo.printTable();
var dubai = new Stores('Dubai', 11, 38, 3.7);
dubai.numOfCustomers();
dubai.printTable();
var paris = new Stores('Paris', 20, 38, 2.3);
paris.numOfCustomers();
paris.printTable();
var lima = new Stores('Lima', 2, 16, 4.6);
lima.numOfCustomers();
lima.printTable();

var storeLocations = [seattle, tokyo, dubai, paris, lima];


createFooter();




// console.log(seattle.arrayOfHourlyCookies);
// console.log(paris.totalCookiesPerDay);
// console.log(seattle.totalCookiesPerDay);

// var arrayStoreNames = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
// var arrayMinCust = [23, 3, 11, 20, 2];
// var arrayMaxCust = [65, 24, 38, 38, 16];
// var arrayAvgCookies = [6.3, 1.2, 3.7, 2.3, 4.6];

// for (var n = 0; n < storeLocations; n++) {
  //   var storeLocations[n] = new Stores(arrayStoreNames[n], arrayMinCust[n], arrayMaxCust[n], arrayAvgCookies[n]);
//   storeLocations[n].numOfCustomers();
// }





