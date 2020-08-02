//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (input) => {
  let userInput = input.toLowerCase()
  let result

  for (let i = 0; i < COLORS.length; i++) {
    
    if (COLORS[i] === userInput) {
      result = i
      break
    }

    else{
      result = COLORS
    }

  }

  return result
};

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];