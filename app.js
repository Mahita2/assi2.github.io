(function(){

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService){
	var toBuy = this;

	toBuy.items  =  ShoppingListCheckOffService.getBuyItems();

	toBuy.bought = function(index){
		ShoppingListCheckOffService.bought(index);
	}
};

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
	var bought = this;

	bought.items = ShoppingListCheckOffService.getBoughtItems();	
};


function ShoppingListCheckOffService(){
	var service = this;

	var buyItems = [{ name: "packs of candy", quantity: 3 },
					  { name: "packs of cookie", quantity: 5 },
					  { name: "packs of oreo", quantity: 8 },
					  { name: "packs of kitkat", quantity: 12 },
					  { name: "bottles of milk", quantity: 6 },
					  { name: "bottles of cola", quantity: 4 },
					  { name: "bottle of pepsi", quantity: 1 },
					  { name: "cups of tea", quantity: 2 }];

	var boughtItems = [];

	service.getBuyItems = function(){
		return buyItems;
	}
	service.getBoughtItems = function(){
		return boughtItems;
	}

	service.bought = function (index){
		var temp = buyItems.splice(index,1);
		boughtItems.splice(0,0,temp[0]);
	}


}

})();
