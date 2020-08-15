
export function generateRandomCapacity(){
  let capacity = 5;

  return capacity * getRandomInt(10);
}

export function generatePpeConfig(){
  let options = [
    // Hand Santiser
    // Staff wearing masks
    // Social Distancing
    // Outdoor Seating
    // Extra Cleaning
    // Takeaway
    ["Hand Santiser"]
  ]
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}