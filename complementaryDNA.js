// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {
  const result = dna.split("").map((char) => {
    if (char === "A") {
      return "T";
    } else if (char === "T") {
      return "A";
    } else if (char === "C") {
      return "G";
    } else {
      return "C";
    }
  });
  return result.join("");
}
// console.log(DNAStrand("ATTGC")); //"TAACG"
// console.log(DNAStrand("GTAT")); //"CATA"

function DNAStrand2(dna) {
  const pairs = { A: "T", T: "A", C: "G", G: "C" };
  return dna
    .split("")
    .map((char) => pairs[char])
    .join("");
}
console.log(DNAStrand2("ATTGC")); //"TAACG"
console.log(DNAStrand2("GTAT")); //"CATA"
