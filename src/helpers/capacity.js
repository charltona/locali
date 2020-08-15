
export function generateRandomCapacity(){
  let capacity = 5;

  return capacity * getRandomInt(20);
}

export function generatePpeConfig(){

}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function prettyCapitals(value) {
  value = value.toLowerCase();
  let array = value.split(" ");

  let prettied = [];
  array.forEach(i => prettied.push(i.chatAt(0).toUpperCase()+i.slice(1)));

}

export const covidSafeOptions = {
  cafe: ["🍟 Takeaway", "🙌 Hand Santiser", "⛱ Outdoor Dining", "😷 Staff Wearing Masks"],
  other: ["🙌 Hand Santiser", "😷 Staff Wearing Masks"]
}

