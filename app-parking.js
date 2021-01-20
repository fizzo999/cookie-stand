Stores.prototype.display = function () {


  for (var k = 0; k < this.arrayOfHourlyCookies.length; k++) {
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesPerHourList[k];
    tableRow.appendChild(tableData);

  }
  tableBody.appendChild(tableRow);
  tableMain.appendChild(tableBody);
  divElement.appendChild(tableMain);
  sectionElement.appendChild(divElement);
  return tableData;
}

var tableHeader = document.createElement('thead');
var tableRow2 = document.createElement('tr');

// hoursOfOperation[-1] = '';




for (var m = -1; m < storeLocations.length; m++) {
  var tableRow3 = document.createElement('tr');
  if (m = -1) {
    var tableHead2 = document.createElement('th');
    tableHead2.textContent = '';
    tableRow2.appendChild(tableHead2);
    tableBody.appendChild(tableRow2);
    tableMain.appendChild(tableBody);
    divElement.appendChild(tableMain);
    sectionElement.appendChild(divElement);
  } else {
    var tableHead2 = document.createElement('th');
    tableHead2.textContent = storeLocations[m].name;
    tableRow2.appendChild(tableHead2);
    tableBody.appendChild(tableRow2);
    tableMain.appendChild(tableBody);
    divElement.appendChild(tableMain);
    sectionElement.appendChild(divElement);
  }
}
for (var l = -1; l < hoursOfOperation.length; l++) {
  var tableHead = document.createElement('th');
  if (l < 0) {
    tableHead.textContent = "";
    tableRow2.appendChild(tableHead);
  } else {
    tableHead.textContent = hoursOfOperation[l];
    tableRow2.appendChild(tableHead);
    tableBody.appendChild(tableRow2);
    tableMain.appendChild(tableBody);
    divElement.appendChild(tableMain);
    sectionElement.appendChild(divElement);
  }
}

// var tableHead2 = document.createElement('th');
// tableHead2.textContent = storeLocations[m + 1].name;
// tableRow2.appendChild(tableHead2);
// tableBody.appendChild(tableRow2);
// tableMain.appendChild(tableBody);
// divElement.appendChild(tableMain);
// sectionElement.appendChild(divElement);

// tableRow2.appendChild(tableHead);

// seattle.display();













// var h2Element = document.createElement('h2'); // => <h2></h2>
// for (var l = 0; l < storeLocations.length; l++) {
//   var ulElement = document.createElement('ul'); // <ul></ul>
//   for (var k = 0; k < storeLocations[l].cookiesPerHourList.length; k++) {
//     var liElement = document.createElement('li'); // <li></li>
//     ulElement.appendChild(liElement); // <ul> </li>Frankie</li> </ul>
//     liElement.textContent = storeLocations[l].cookiesPerHourList[k]; // <h2>Frankie</h2>
//   }
//   h2Element.textContent = storeLocations[l].name;
//   divElement.appendChild(h2Element); // appends everything
//   divElement.appendChild(ulElement); // appends everything
// }
// sectionElement.appendChild(divElement); // appends everything







// var sectionElement = document.getElementById('profiles'); // <section id="profiles></section>"









