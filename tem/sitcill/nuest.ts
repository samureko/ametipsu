// Define a type for Power with three possible values
type Power = "spider-net" | "stronger" | "much-power";

// Create an interface for a superhero character
interface Superhero {
  name: string;
  power: Power;
  strengthLevel: number;
}

// Function to create a new superhero
function createSuperhero(name: string, power: Power): Superhero {
  let strengthLevel = 0;
  switch (power) {
    case "spider-net":
      strengthLevel = 10;
      break;
    case "stronger":
      strengthLevel = 20;
      break;
    case "much-power":
      strengthLevel = 30;
      break;
  }

  return { name, power, strengthLevel };
}

// Example usage
const hero = createSuperhero("Spiderman", "spider-net");
console.log(`${hero.name} has the power of ${hero.power} with a strength level of ${hero.strengthLevel}`);
