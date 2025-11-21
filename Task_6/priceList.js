let priceList;

export const setPriceList = (thePriceList) => {
    priceList = thePriceList;
}

export const getTotalPrice = (itemId, quantity) => {
    const item = priceList.filter(item => item.itemid == itemId)[0];
    const index = item.prices.reverse().findIndex(level => quantity >= level.qty);
    console.log(index);
    const price = item.prices[index].price;
    console.log(price);
    return price * quantity;
}

export const pricer = {
    getTotalPrice,
    setPriceList
}