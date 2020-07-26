//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (i) => {
  const resistorColors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
  let userInput = i.toLowerCase()
  let result

  for (let i = 0; i < resistorColors.length; i++) {
    const colorCodeOutput = resistorColors[i];
    
    if (colorCodeOutput === userInput) {
      result = i
    }

    else{
      result = resistorColors
    }

  }

  return result
};

export const COLORS = undefined;
