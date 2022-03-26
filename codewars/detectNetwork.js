/*Write the function detectNetwork. It should accept a string or a number for its cardNumber argument and, based on the provided cardData, return the appropriate network string (or undefined if there's no match).*/

var cardData = [
  {
    "issuer/network": "Visa", // card issuer (network)
    prefixes: ["4"], // beginning digits
    lengths: [13, 16, 19], // lengths of card numbers
  },
  {
    "issuer/network": "Mastercard",
    prefixes: ["51", "52", "53", "54", "55"],
    lengths: [16],
  },
  {
    "issuer/network": "American Express",
    prefixes: ["34", "37"],
    lengths: [15],
  },
  {
    "issuer/network": "Diner's Club",
    prefixes: ["38", "39"],
    lengths: [14],
  },
  {
    "issuer/network": "Discover",
    prefixes: ["6011", "644", "645", "646", "647", "648", "649", "65"],
    lengths: [16, 19],
  },
  {
    "issuer/network": "Maestro",
    prefixes: ["5018", "5020", "5038", "6304"],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19],
  },
];

function detectNetwork(cardNumber, cardData) {
  const prefix1 = cardNumber.slice(0, 1);
  const prefix2 = cardNumber.slice(0, 2);
  const prefix3 = cardNumber.slice(0, 3);
  const prefix4 = cardNumber.slice(0, 4);
  const cardLength = cardNumber.length;

  let issuer;
  cardData.forEach((data) => {
    if (
      (data.prefixes.includes(prefix1) ||
        data.prefixes.includes(prefix2) ||
        data.prefixes.includes(prefix3) ||
        data.prefixes.includes(prefix4)) &&
      data.lengths.includes(cardLength)
    ) {
      issuer = data["issuer/network"];
    }
  });
  return issuer;
}

var network0 = detectNetwork("4234561876564", cardData);
console.log(network0); // --> 'Visa'
var network1 = detectNetwork("5437869000987656", cardData);
console.log(network1); // --> 'Mastercard'
var network2 = detectNetwork("343456789012345", cardData);
console.log(network2); // --> 'American Express'
var network3 = detectNetwork("38123400875645", cardData);
console.log(network3); // --> 'Diner's Club'
var network4 = detectNetwork("6011091234567898764", cardData);
console.log(network4); // --> 'Discover'
var network5 = detectNetwork("6304986665456789056", cardData);
console.log(network5); // --> 'Maestro'
