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

var locations=[];

locations.push(new Store('Seattle', 23, 65, 6.3));
locations.push(new Store('Tokyo', 3, 24, 1.2));
locations.push(new Store('Dubai', 11,38,3.7));
locations.push(new Store('Paris', 20, 38, 2.3));
locations.push(new Store('Lima', 2,16,4.6));


// console.log('seattleLocation :', seattleLocation);
// console.log('tokyoLocation :', tokyoLocation);
// console.log('parisLocation :', parisLocation);
// console.log('dubaiLocation :', dubaiLocation);
// console.log('limaLocation :', limaLocation);

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

for(var i=0; i<locations.length;i++){
  getDataForEachRow(locations[i]);
}

//create footer for table
var megatotal = 0;
var dataRowElement = addElement('tr',tableElement);
console.log('store1', locations[0].cookiePerHourPerStore)
console.log('store2', locations[1].cookiePerHourPerStore)
console.log('store3', locations[2].cookiePerHourPerStore)
var dataRowElement = addElement('tr',tableElement);
  addElement('td',dataRowElement,'Totals');
for(var i =0;i< hours.length;i++){
  var timeSlotTotal = 0;
  
  for (var j=0; j<locations.length;j++);{
  var currentStore = locations[j];
  timeSlotTotal += currentStore.cookiePerHourPerStore[i];
  addElement('td',dataRowElement,timeSlotTotal);
  }  

}

// //creat variable for form
// var form = document.getElementById('cookie-form');
// Store.prototype.render = function(){
// var tbody = document.getElementById('cookie-entries');
// var tableRow = addElement('tr',tbody);
// var storeNameTableBody = addElement('td',tableRow);
// var 


var form = document.getElementById('cookie-form');

function submitHandler(event){
  event.preventDefault();

  var name = event.target.storeName.value;
  var storeMincust = event.target.mincustomer.value;
  var storeMaxcust = event.target.maxcustomer.value;
  var avgCookie = event. target.average.value;

  console.log('name :',name);
  console.log('storeMincust:',storeMincust);
  console.log('storeMaxcust:',storeMaxcust);
  console.log('avgCookie:',avgCookie);


  var cookieStore = new Store(name, storeMincust, storeMaxcust, avgCookie);
  getDataForEachRow(cookieStore);

  event.target.reset();

  console.log('cookieStore:', cookieStore);

}
form.addEventListener('submit', submitHandler);
