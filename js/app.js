'use strict';
//global hours
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
//create global addElement function 

function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
}


//store constructor function
function Store(name, mincust,maxcust,avgCookiesPerCustomer){
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiePerHourPerStore = [];
  this.totalDailySold = 0;
  this.calculateCookiePerHourPerStore();
}


//Creating function for Cookie sold per hour per store and total cookie sold per store 
Store.prototype.calculateCookiePerHourPerStore = function(){
  for (var i=0;i<hours.length;i++){
    var randomNumberCustomer = Math.round((Math.random() * (this.maxcust-this.mincust)+this.mincust));
    var cookieSoldPerHour = Math.round(randomNumberCustomer*this.avgCookiesPerCustomer);

    this.cookiePerHourPerStore.push(cookieSoldPerHour);
    this.totalDailySold += cookieSoldPerHour;
  }
};

var seattleLocation = new Store('Seattle', 23, 65, 6.3);
var tokyoLocation = new Store('Tokyo', 3, 24, 1.2);
var dubaiLocation = new Store('Dubai', 11,38,3.7);
var parisLocation = new Store('Paris', 20, 38, 2.3);
var limaLocation = new Store('Lima', 2,16,4.6);

console.log('seattleLocation :', seattleLocation);
console.log('tokyoLocation :', tokyoLocation);
console.log('parisLocation :', parisLocation);
console.log('dubaiLocation :', dubaiLocation);
console.log('limaLocation :', limaLocation);

//create Table 

//create table header row
var tableContainer = document.getElementById('tableContainer');
var tableElement = addElement ('table',tableContainer);
var headerRowElement = addElement ('tr', tableElement);

// HOUR ROW
addElement('th', headerRowElement, ' ');
for (var i=0 ;i<hours.length;i++){
  addElement('th', headerRowElement, hours[i]);
}
addElement('th', headerRowElement, 'DailyLocationTotal')


//create data Row
function getDataForEachRow(city){
  var dataRowElement = addElement('tr', tableElement);
  addElement('td',dataRowElement,city.name);
  for(var i=0; i<hours.length; i++){
    addElement('td',dataRowElement,city.cookiePerHourPerStore[i]);
  } 
  addElement('td',dataRowElement,city.totalDailySold);
  }

// var dataRowElement = addElement('tr', tableElement);
// addElement('td',dataRowElement, seattleLocation.name);
// for (var j = 0; j < hours.length; j++) {
//   addElement('td',dataRowElement,seattleLocation.cookiePerHourPerStore[j]);
// } 
// addElement('td',dataRowElement,seattleLocation.totalDailySold);
getDataForEachRow(seattleLocation);
getDataForEachRow(tokyoLocation);
getDataForEachRow(parisLocation);
getDataForEachRow(dubaiLocation);
getDataForEachRow(limaLocation);

//create footer for table
function getDataForTotal(seattle, tokyo, paris, dubai,lima){
  var footerElement = addElement('tr',tableElement);
  addElement('td',footerElement,'Totals');
  for(var k=0; k<hours.length; k++){
    addElement('td',footerElement, seattle.cookiePerHourPerStore[k] + tokyo.cookiePerHourPerStore[k]+ paris.cookiePerHourPerStore[k]+dubai.cookiePerHourPerStore[k]+lima.cookiePerHourPerStore[k])
  } 
  addElement('td',footerElement,seattle.totalDailySold+tokyo.totalDailySold+paris.totalDailySold+dubai.totalDailySold+lima.totalDailySold);
}

getDataForTotal(seattleLocation, tokyoLocation,parisLocation,dubaiLocation,limaLocation);

