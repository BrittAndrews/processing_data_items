// question one: average price


var prices=items.map(function(obj){
	return obj.price;
})

var addPrices= prices.reduce(function(total, num){
	return total + num;
})

var avg= addPrices / prices.length;



//Show me how to get an array of items that cost between $14.00 and $18.00 USD

var filterItems=items.filter(function(obj){
	return obj.price >14 && obj.price <18;
})

var titles=filterItems.map(function(obj){
	return obj.title;
})

//Which item has a "GBP" currency code? Display it's name and price.

var filterCurrency=items.filter(function(obj){
	return obj.currency_code === "GBP";
})

var getName=filterCurrency[0].title;

var getPrice=filterCurrency[0].price;

//Display a list of all items who are made of wood.

var filterWooden= items.filter(function(obj){
	return obj.materials.indexOf('wood')>-1;
})

var getTitles=filterWooden.map(function(obj){
	return obj.title;
})


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


// How many items were made by their sellers?

var howMany= items.filter(function(obj){
	return obj.who_made === "i_did";
}).length;

























