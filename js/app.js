'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
var allStores =['Seattle', 'Tokyo', 'Paris','Dubai','Lima']
var stores = [];

//store constructor function
function store(name, mincust,maxcust,avgCookiesPerCustomer){
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.avgcutPerHour = [];
  this.cookiePerHour = [];
  this.totalDailySold = 0;

  stores.push(this);
  this.render();
}

store.prototype.cookiePerHour = function(){
  for (var i=0;i<hours.length;i++){

    var numberOfCustomers = Math.floor(Math.random()*t(his.maxcust-this.mincust+1))
    var numberOfCookies = Math.floor(numberOfCustomers*this.avgCookiesPerCustomer);
    this.cookiePerHour.push(numberOfCookies);
    this.totalDailySold += numberOfCookies
  }

};

store.prototype.render =function(){

var tableBody = document.getElementById('tbl-body');
var storeRow = document.createElement('tr');
var storeNameCol = document.createElement('td');
storeNameCol.textContent = this.name;
storeRow.appendChild(storeRowCol);

this.cookiePerHour(); {
  for (var j=0; j<this.cookiePerHour.length; j++){
  var tdCookie = document.createElement('td');
  tdCookie.textContent = this.cookiePerHour[i];
  storeRow.appendChild(tdCookie);
  }
  table.appendChild(storeRow);
};
}

function createTable(){
  var table = document.createElement('table');
  var tableHead = document.createElement('thead');
  var tableBody = document.createElement('tbody');
  var tableFooter = document.createElement('tfooter');
  
  table.appendChild(tableHead)
  table.appendChild(tableBody);
  table.appendChild(tableFooter);

  table.id = 'tableBody';
  tableHead.id ='tbl-head';
  tableBody.id = 'tbl-body';
  tableFooter.id = 'tbl-foot';
  table.className = 'tbl';

  var tableHeader = document.getElementById('tbl-head');
  var tableHeaderRow = document.createElement('tr');
  var emptyTableHead = document.createElement('th');
  tableHeaderRow.appendChild(emptyTableHead);

  for (var i = 0; i < hours.length; i++) {

    var tableHead = document.createElement('th');
    tableHead.textContent = hours[i];
    tableHeaderRow.appendChild(tableHead);
  }

  tableHeader.appendChild(tableHeaderRow);
}
function createFooter(){
  var tableBody = document.getElementById('tbl-body');
  var totalRow = document.createElement('tr');
  var tdTotalsLabel = document.createElement('td');
  tdTotalsLabel.textContent = 'Totals';
  totalRow.appendChild(tdTotalsLabel);

  for (var i = 0; i < hours.length; i++) {
    var totalDailySold = 0;

    for (var k = 0; k < stores.length; k++) {
      totalCookiesPerHour += stores[k].cookiesPerHourArr[k];
    }
    var tdTotalcookies = document.createElement('td');
    tdTotalcookies.textContent = totalCookiesPerHour;
    totalRow.appendChild(tdTotalcookies);
  }

  tableBody.appendChild(totalRow);
}

createTable();


new store ('Seattle', 23, 65, 6.3);
new store ('Tokyo', 3, 24, 1.2);
new store ('Dubai', 11,38,3.7);
new store('Paris', 20, 38, 2.3);
new store('Lima', 2,16,4.6);

createFooter();


