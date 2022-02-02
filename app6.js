'use strict';
// grab anchor to DOM to inject the table of cookie sales
let elTarget = document.getElementById('cookieTable');

function createElementAndAppend(element, elementParentNode, attributes = {}) {
  // todo prequalifier for list of elements capable to create - then check the list - if not part of the list - alert - break
  const el = document.createElement(element);
  for (const [key, value] of Object.entries(attributes)) {
    el[key] = value;
  }

  elementParentNode.append(el);
  return el;
}
let table = createElementAndAppend('table', elTarget);
let tableHead = createElementAndAppend('thead', table);
let tableBody = createElementAndAppend('tbody', table);
let hoursOfOperation = [
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
let tableTop = createElementAndAppend('th', tableHead, {
  textContent: 'location',
});
for (var i = 0; i < hoursOfOperation.length; i++) {
  tableTop = createElementAndAppend('th', tableHead, {
    textContent: hoursOfOperation[i],
  });
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
  let cookiesThisHour;
  for (var i = 0; i < hoursOfOperation.length - 1; i++) {
    cookiesThisHour = Math.floor(
      (this.minCust + Math.random() * (this.maxCust - this.minCust)) *
        this.avgCookies
    );
    this.totalCookiesPerDay += cookiesThisHour;
    this.arrayOfHourlyCookies.push(cookiesThisHour);
  }
  this.arrayOfHourlyCookies.push(this.totalCookiesPerDay);
};
Stores.prototype.printTable = function () {
  let row = createElementAndAppend('tr', tableBody);
  // this creates the nameCell for the location name
  createElementAndAppend('td', row, { textContent: this.name });
  let dataCell;
  for (var i = 0; i < hoursOfOperation.length; i++) {
    dataCell = createElementAndAppend('td', row, {
      textContent: this.arrayOfHourlyCookies[i],
    });
  }
};
// populate the footer row, with the totals per store, per hour (think of a loop within a loop)
function createFooter() {
  let row = createElementAndAppend('tr', tableBody);
  //create the first cell with 'totale' in it
  createElementAndAppend('td', row, { textContent: 'Totals' });
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
var newStore = new Stores('newStore', 5, 10, 10);

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
  // delete current totals row
  var removeEl =
    document.getElementsByTagName('tr')[Stores.storeLocations.length];
  var containerEl = removeEl.parentNode;
  containerEl.removeChild(removeEl);
  var minCust2 = +inputFormEvent.target.minCust.value;
  var maxCust2 = +inputFormEvent.target.maxCust.value;
  var avgCookies2 = +inputFormEvent.target.avgCookies.value;
  console.log(
    'HERE IS MIN, MAX AND AVG COOKIES',
    name2,
    minCust2,
    maxCust2,
    avgCookies2
  );
  var newStoreFromConstructor = new Stores(
    name2,
    minCust2,
    maxCust2,
    avgCookies2
  );
  // Stores.storeLocations.push(newStoreFromConstructor);
  // newStoreFromConstructor.numOfCustomers();

  // newStoreFromConstructor.printTable();
  createFooter();
});
