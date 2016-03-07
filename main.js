var select_one, select_two, select_three, select_four, select_five, select_six;

select_one = document.querySelector('.stuff_one');
select_two = document.querySelector('.stuff_two');
select_three = document.querySelector('.stuff_three');
select_four = document.querySelector('.stuff_four');
select_five = document.querySelector('.stuff_five');
select_six = document.querySelector('.stuff_six');


// question one: average price


var prices=items.map(function(obj){
	return obj.price;
})

var addPrices= prices.reduce(function(total, num){
	return total + num;
})

var avg= addPrices / prices.length;


select_one.innerHTML = "The average price is $" + avg;



//Show me how to get an array of items that cost between $14.00 and $18.00 USD

var filterItems=items.filter(function(obj){
	return obj.price >14 && obj.price <18;
})

var titles=filterItems.map(function(obj){
	return obj.title;
})

select_two.innerHTML = "Items that cost between $14.00 and $18.00 " + titles;



//Which item has a "GBP" currency code? Display it's name and price.

var filterCurrency=items.filter(function(obj){
	return obj.currency_code === "GBP";
})

var getName=filterCurrency[0].title;

var getPrice=filterCurrency[0].price;


select_three.innerHTML = "The name and price of the item that has a GBP currency code is " + getName, getPrice;


//Display a list of all items who are made of wood.

var filterWooden= items.filter(function(obj){
	return obj.materials.indexOf('wood')>-1;
})

var getTitles=filterWooden.map(function(obj){
	return obj.title;
})

select_four.innerHTML = "The items made of wood are " + getTitles;


// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var eightOrMore = items.filter(function(obj){
	return obj.materials.length>=8;
})

var getNames=eightOrMore.map(function(obj){
	return obj.title;
})

var numOfMaterials= eightOrMore.map(function(obj){
	return obj.materials.length;
})
var getMaterials= eightOrMore.map(function(obj){
	return obj.materials;
})

select_five.innerHTML = "The items made of eight or more materials are " + getNames, numOfMaterials, getMaterials;



// How many items were made by their sellers?

var howMany= items.filter(function(obj){
	return obj.who_made === "i_did";
}).length;

select_six.innerHTML = "The number of items made by their sellers " + howMany;


// document.querySelector 























