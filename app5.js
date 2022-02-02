'use strict';

var elTarget = document.getElementById('cookieTable');
var table = document.createElement('table');
elTarget.appendChild(table);
var tableHead = document.createElement('thead');
table.appendChild(tableHead);
var tableBody = document.createElement('tbody');
table.appendChild(tableBody);

var hoursOfOperation = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  'Totals',
];

// var howLongAreYouOpenStart = 6;
// var howLongAreYouOpenEnd = 8;
// for (i = 0; i < (howLongAreYouOpenStart - howLongAreYouOpenEnd); i++) {
// }

var tableTop = document.createElement('th');
tableTop.textContent = 'location';

tableHead.appendChild(tableTop);

for (var i = 0; i < hoursOfOperation.length; i++) {
  var tableTop = document.createElement('th');
  tableTop.textContent = hoursOfOperation[i];
  tableHead.appendChild(tableTop);
}

Stores.storeLocations = [];

function Stores(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.openHours = hoursOfOperation;
  this.totalCookiesPerDay = 0;
  this.arrayOfHourlyCookies = [];
  Stores.storeLocations.push(this);
  this.numOfCustomers();
  this.printTable();
}

Stores.prototype.numOfCustomers = function () {
  for (var i = 0; i < hoursOfOperation.length - 1; i++) {
    var cookiesThisHour = Math.floor(
      Math.random() *
        (this.maxCust - this.minCust + this.minCust) *
        this.avgCookies
    );
    this.totalCookiesPerDay += cookiesThisHour;
    this.arrayOfHourlyCookies.push(cookiesThisHour);
  }
  this.arrayOfHourlyCookies.push(this.totalCookiesPerDay);
};

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
};

// populate the footer row, with the totals per store, per hour (think of a loop within a loop)
function createFooter() {
  // var foot = document.createElement('tfoot');
  // tableBody.appendChild(foot);
  var row = document.createElement('tr');
  tableBody.appendChild(row);
  var nameCell = document.createElement('td');
  nameCell.textContent = 'Totals';
  row.append(nameCell);
  // first start looping throuogh our total number of hours
  var totalOfTotals = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < hoursOfOperation.length; i++) {
    // we just need to remember to reset at each hour
    hourlyTotal = 0;
    for (var j = 0; j < Stores.storeLocations.length; j++) {
      hourlyTotal += Stores.storeLocations[j].arrayOfHourlyCookies[i];
      totalOfTotals += Stores.storeLocations[j].arrayOfHourlyCookies[i];
      console.log('these are the hourly totals', hourlyTotal);
    }
    var dataCell = document.createElement('td');
    dataCell.textContent = hourlyTotal;
    row.appendChild(dataCell);
  }
  // return totalOfTotals, hourlyTotal;
}

var seattle = new Stores('Seattle', 23, 65, 6.3);
var tokyo = new Stores('Tokyo', 3, 24, 1.2);
var dubai = new Stores('Dubai', 11, 38, 3.7);
var paris = new Stores('Paris', 20, 38, 2.3);
var lima = new Stores('Lima', 2, 16, 4.6);

createFooter();

// event Listener for input form
var formElement = document.getElementById('newStoreInputForm');

formElement.addEventListener('submit', function (inputFormEvent) {
  inputFormEvent.preventDefault();
  var name2 = inputFormEvent.target.storeLocation.value;
  for (var i = 0; i < Stores.storeLocations.length; i++) {
    if (Stores.storeLocations[i].name.toLowerCase() == name2.toLowerCase()) {
      alert('This store does already exist');
      return;
    }
  }
  var minCust2 = inputFormEvent.target.minCust.value;
  var maxCust2 = inputFormEvent.target.maxCust.value;
  var avgCookies2 = inputFormEvent.target.avgCookies.value;
  var newStoreFromConstructor = new Stores(
    name2,
    minCust2,
    maxCust2,
    avgCookies2
  );
  // Stores.storeLocations.push(newStoreFromConstructor);
  // newStoreFromConstructor.numOfCustomers();

  // delete current totals row
  var removeEl =
    document.getElementsByTagName('tr')[Stores.storeLocations.length - 1];
  var containerEl = removeEl.parentNode;
  containerEl.removeChild(removeEl);
  // newStoreFromConstructor.printTable();
  createFooter();
});
