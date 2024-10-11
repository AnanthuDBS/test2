alert("Loaded Basket.JS");

/* Create function that takes two objects, basket and prices as parameters 
where basket is a mapping from products (String) to quantities (number) and 
prices is a mapping from products(String) to prices(number) and 
returns the total cost of the basket*/ 

let Basket = (basket, prices)=>{
    let total=0;
    for(let item in basket){
        if (prices[item] != undefined){
            total += basket[item]*prices[item];
        }
    }
    return total;
}
basket = {sandwich:4, kiwi:3, bread:5};
price = {apple:2.5, kiwi:3.05, grapes:2.5, sandwich:2.99, bread:1.85};
alert("The total price of the items in your basket is " + Basket(basket,price));