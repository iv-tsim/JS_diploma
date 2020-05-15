const prices = new Map([
    ['mozaika', [1999, 9900, 13900, 19900]],
    ['schelkovo', [2999, 14900, 21900, 24900]]
]);
const price = document.getElementById('price-total');
let period = 1,
    clubName = "mozaika",
    promocode = "";
const countPrice = ({checkedInputTime = period, checkedInputClub = clubName, promocodeValue = promocode}) => {
    period = checkedInputTime;
    clubName = checkedInputClub;
    promocode = promocodeValue;
    let total = prices.get(checkedInputClub)[parseInt(checkedInputTime)];
    if (promocode === "ТЕЛО2020") {
        total *= 0.7;
    }
    price.textContent = Math.round(total);
}

export default countPrice;