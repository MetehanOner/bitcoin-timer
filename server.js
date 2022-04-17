let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let stockPriceElement = document.getElementById('stock-price');
let hitElement = document.getElementById('hit');
let lastPrice = null;

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    //console.log(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElement.innerText = price;
    stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';

    hitNumber = 40500;
    if (price == hitNumber | (price > hitNumber & lastPrice < hitNumber & lastPrice) | (price < hitNumber & lastPrice > hitNumber & lastPrice)){
        var date = new Date(stockObject.T); 
        hitElement.innerText = "Congrats, hit " + hitNumber + " on " + date.toString();
    }

    lastPrice = price;
}