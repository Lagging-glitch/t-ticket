const allSeat = document.getElementsByClassName("seat");

for (const seat of allSeat) {
  const singleSeat = seat;

  singleSeat.addEventListener("click", function (event) {
    const seat = event.target.innerText;
    const price = document.getElementById("ticket-price").innerText;

    const emptyContainer = document.getElementById("select-bus-price");

    const div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("justify-between");

    const p1 = document.createElement("p");
    const p3 = document.createElement("p");

    p1.innerText = seat;
    p3.innerText = price;

    div.appendChild(p1);
    div.appendChild(p3);

    emptyContainer.appendChild(div);

    updateTotalCost("price");
  });
}

function updateTotalCost(price) {
  const totalCost = getConvertedValue("total-price");

  const convertedPrice = parseInt(price);

  const sum = totalCost + convertedPrice;

  document.getElementById("total-price").innerText = sum;
}

function getConvertedValue(id) {
  const price = document.getElementById(id).innerText;
  const convertPrice = parseInt(price);
  return convertPrice;
}

let count = 0;

singleSeat.addEventListener("click", function (e) {
  count = count + 1;
  const seatName = e.target.innerText;

  const seatPrice = document.getElementById("ticket-price").innerText;

  const emptyContainer = document.getElementById("select-bus-price");

  const div = document.createElement("div");

  const p1 = document.createElement("p");
  p1.innerText = seatName;

  const p2 = document.createElement("p");
  p2.innerText = seatPrice;

  div.appendChild(p1);
  div.appendChild(p2);

  emptyContainer.appendChild(div);

  const totalCost = document.getElementById("total-price").innerText;
  const convertedTotalPrice = parseInt(totalCost);
  const sum = convertedTotalPrice + parseInt(seatPrice);

  const grandTotal = document.getElementById("grand-total").innerText;
  const convertedGrandTotal = parseInt(grandTotal);
  const sum2 = convertedGrandTotal + parseInt(seatPrice);

  setInnerText("total-price", sum);

  setInnerText("grand-total", sum2);

  setInnerText("seat-up", count);
});

function totalCost(id, value) {
  const totalCost = document.getElementById(id).InnerText;
  const convertedTotalPrice = parseInt(totalCost);
  const sum = convertedTotalPrice + parseInt(value);
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
