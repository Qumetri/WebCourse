//task 1
import {pricer as p} from "./priceList.js";

const myPriceList = [
    {
    itemid: 1, 
    itemname: 'bottle', 
    prices: [{ qty: 1, price: 1.25},{ qty: 100, price: 1.10},{ qty: 1000, price: 1.00}]
  },
  {
    itemid: 2, 
    itemname: 'glass', 
    prices: [{ qty: 1, price: 2.50},{ qty: 50, price: 2.00},{ qty: 200, price: 1.60}]
  }

]

const pricer = "Name conflict"
p.setPriceList(myPriceList)
const totalPrice = p.getTotalPrice(2, 150);

console.log(totalPrice)