var data = require('../products.json');

// Write your solutions below

// console.log(data.items);



// 1.) Go through the items and find all results that have kind of
// shopping#product. Print the count of these results. Where else is this count
// information stored in the search results?

// all results of shopping#product
for (i = 0; i < data.items.length; i++) {
	console.log(data.items[i].kind)
}
// shows the count of kind: shopping#product
console.log(data.currentItemCount);



// 2.) Print the title all items with a backorder availability in inventories.

for (var i = 0; i < data.items.length; i++) {
	if (data.items[i].product.inventories[0].availability == "backorder") {
		console.log(data.items[i].product.title);
	}
}
	

// 3.) Print the title all items with more than one image link.

for (var i = 0; i < data.items.length; i++) {
	if (data.items[i].product.images.length > 1) {
		console.log(data.items[i].product.title);
	}
}
	

// 4.) Print all "Canon" products in the items (careful with case sensitivity).

for (var i = 0; i < data.items.length; i++) {
	if (data.items[i].product.brand == "Canon") {
		console.log(data.items[i].product.title);
	}
}


// 5.) Print all items that have an author name of "eBay" and are brand "Canon".

for (var i = 0; i < data.items.length; i++) {
	if ((data.items[i].product.author.name.indexOf("eBay") != -1) && (data.items[i].product.brand == "Canon")) {
		console.log(data.items[i].product.title);
	}
}


// 6.) Print all the products with their brand, price, and an image link

for (var i = 0; i < data.items.length; i++) {
		console.log(data.items[i].product.title);
		console.log(data.items[i].product.brand);
		console.log(data.items[i].product.images[0].link);
	}
