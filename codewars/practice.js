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
];

function detectNetwork(cardNumber, cardData) {
  const prefix1 = cardNumber.slice(0, 1);
  const prefix2 = cardNumber.slice(0, 2);

  if (
    cardData[0].prefixes.includes(prefix1) &&
    cardData[0].lengths.includes(cardNumber.length)
  ) {
    return "Visa";
  }
  if (
    cardData[1].prefixes.includes(prefix2) &&
    cardData[1].lengths.includes(cardNumber.length)
  ) {
    return "Mastercard";
  }
  if (
    cardData[2].prefixes.includes(prefix2) &&
    cardData[2].lengths.includes(cardNumber.length)
  ) {
    return "American Express";
  }
  if (
    cardData[3].prefixes.includes(prefix2) &&
    cardData[3].lengths.includes(cardNumber.length)
  ) {
    return "Diner's Club";
  }
}
var network0 = detectNetwork("4234561876564", cardData);
console.log(network0); // --> 'Visa'
var network1 = detectNetwork("5437869000987656", cardData);
console.log(network1); // --> 'Mastercard'
var network2 = detectNetwork("343456789012345", cardData);
console.log(network2); // --> 'American Express'
var network3 = detectNetwork("38123400875645", cardData);
console.log(network3); // --> 'Diner's Club'
