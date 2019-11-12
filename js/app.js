'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

// Seattle 
var Seattle = {
  name: 'Seattle',
  mincust:23,
  maxcust:65,
  avgCookieSold:6.3,
  sales:[],
  getSales: function(){
    var rando= Math.random();{
      console.log('rando',rando)
    }
    var range = this.maxcust-this.mincust
    console.log('range',range)
    
    var randoCust=this.mincust+Math.floor(rando*range)+1
    var estiCookiesSold=Math.ceil(randoCust);
    console.log('estiCookiesSold',estiCookiesSold);
    return estiCookiesSold
    }
  }
  
function cookiesSold(location) {
for(var i=0; i<hours.length;i++){
var cookiesNum= Math.ceil(location.getSales() * location.avgCookieSold)
location.sales[i] = hours[i] +' : ' + cookiesNum + " cookies";
}
}

function displayStores(location){
  var storeData=location.sales;
  var parentElement = document.getElementById('Location');
  var ul = document.createElement('ul');
  parentElement.appendChild(ul);
  ul.textContent=location.name;
  for (var i=0; i<storeData.length;i++){
    var li =document.createElement('li');
    var listItem=ul.appendChild(li);
    li.textContent=location.sales[i];
  }

}

cookiesSold(Seattle);
displayStores(Seattle);


// Tokyo
var Tokyo = {
  name: 'Tokyo',
  mincust:3,
  maxcust:24,
  avgCookieSold:1.2,
  sales:[],
  getSales: function(){
    var rando= Math.random();{
      console.log('rando',rando)
    }
    var range = this.maxcust-this.mincust
    console.log('range',range)
    
    var randoCust=this.mincust+Math.floor(rando*range)+1
    var estiCookiesSold=Math.ceil(randoCust);
    console.log('estiCookiesSold',estiCookiesSold);
    return estiCookiesSold
    }
  }
  
function cookiesSold(location) {
for(var i=0; i<hours.length;i++){
var cookiesNum= Math.ceil(location.getSales() * location.avgCookieSold)
location.sales[i] = hours[i] +' : ' + cookiesNum + " cookies";
}
}

function displayStores(location){
  var storeData=location.sales;
  var parentElement = document.getElementById('Location');
  var ul = document.createElement('ul');
  parentElement.appendChild(ul);
  ul.textContent=location.name;
  for (var i=0; i<storeData.length;i++){
    var li =document.createElement('li');
    var listItem=ul.appendChild(li);
    li.textContent=location.sales[i];
  }

}

cookiesSold(Tokyo);
displayStores(Tokyo);

//Dubai

var Dubai = {
  name: 'Dubai',
  mincust:11,
  maxcust:38,
  avgCookieSold:3.7,
  sales:[],
  getSales: function(){
    var rando= Math.random();{
      console.log('rando',rando)
    }
    var range = this.maxcust-this.mincust
    console.log('range',range)
    
    var randoCust=this.mincust+Math.floor(rando*range)+1
    var estiCookiesSold=Math.ceil(randoCust);
    console.log('estiCookiesSold',estiCookiesSold);
    return estiCookiesSold
    }
  }
  
function cookiesSold(location) {
for(var i=0; i<hours.length;i++){
var cookiesNum= Math.ceil(location.getSales() * location.avgCookieSold)
location.sales[i] = hours[i] +' : ' + cookiesNum + " cookies";
}
}

function displayStores(location){
  var storeData=location.sales;
  var parentElement = document.getElementById('Location');
  var ul = document.createElement('ul');
  parentElement.appendChild(ul);
  ul.textContent=location.name;
  for (var i=0; i<storeData.length;i++){
    var li =document.createElement('li');
    var listItem=ul.appendChild(li);
    li.textContent=location.sales[i];
  }

}

cookiesSold(Dubai);
displayStores(Dubai);

// Paris
var Paris = {
  name: 'Paris',
  mincust:20,
  maxcust:38,
  avgCookieSold:2.3,
  sales:[],
  getSales: function(){
    var rando= Math.random();{
      console.log('rando',rando)
    }
    var range = this.maxcust-this.mincust
    console.log('range',range)
    
    var randoCust=this.mincust+Math.floor(rando*range)+1
    var estiCookiesSold=Math.ceil(randoCust);
    console.log('estiCookiesSold',estiCookiesSold);
    return estiCookiesSold
    }
  }
  
function cookiesSold(location) {
for(var i=0; i<hours.length;i++){
var cookiesNum= Math.ceil(location.getSales() * location.avgCookieSold)
location.sales[i] = hours[i] +' : ' + cookiesNum + " cookies";
}
}

function displayStores(location){
  var storeData=location.sales;
  var parentElement = document.getElementById('Location');
  var ul = document.createElement('ul');
  parentElement.appendChild(ul);
  ul.textContent=location.name;
  for (var i=0; i<storeData.length;i++){
    var li =document.createElement('li');
    var listItem=ul.appendChild(li);
    li.textContent=location.sales[i];
  }

}

cookiesSold(Paris);
displayStores(Paris);

//Lima
var Lima = {
  name: 'Lima',
  mincust:2,
  maxcust:16,
  avgCookieSold:4.6,
  sales:[],
  getSales: function(){
    var rando= Math.random();{
      console.log('rando',rando)
    }
    var range = this.maxcust-this.mincust
    console.log('range',range)
    
    var randoCust=this.mincust+Math.floor(rando*range)+1
    var estiCookiesSold=Math.ceil(randoCust);
    console.log('estiCookiesSold',estiCookiesSold);
    return estiCookiesSold
    }
  }
  
function cookiesSold(location) {
for(var i=0; i<hours.length;i++){
var cookiesNum= Math.ceil(location.getSales() * location.avgCookieSold)
location.sales[i] = hours[i] +' : ' + cookiesNum + " cookies";
}
}

function displayStores(location){
  var storeData=location.sales;
  var parentElement = document.getElementById('Location');
  var ul = document.createElement('ul');
  parentElement.appendChild(ul);
  ul.textContent=location.name;
  for (var i=0; i<storeData.length;i++){
    var li =document.createElement('li');
    var listItem=ul.appendChild(li);
    li.textContent=location.sales[i];
  }

}

cookiesSold(Lima);
displayStores(Lima);






