//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (input) => {
  const resistorColors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
  let userInput = input.toLowerCase()
  let result

  for (let i = 0; i < resistorColors.length; i++) {
    
    if (resistorColors[i] === userInput) {
      result = i
      break
    }

    else{
      result = resistorColors
    }

  }

  return result
};

export const COLORS = undefined;
