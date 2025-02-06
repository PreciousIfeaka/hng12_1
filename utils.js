const primeCheck = (number) => {
  if (number <= 1) return false; 
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  };
  return true;
};

const armstrongCheck = (number) => {
  let numString;
  if (number < 0) numString = number.toString().slice(1);
  else numString = number.toString();

  const numsArray = [...numString];
  const armStrong = numsArray.reduce((a, b) => a + Math.pow(parseInt(b), numsArray.length), 0);
  if (armStrong === number) return true;
  return false;
};

const digitsSum = (number) => {
  let numString;
  if (number < 0) numString = number.toString().slice(1);
  else numString = number.toString();
  return [...numString].reduce((a, b) => parseInt(a) + parseInt(b), 0);
};

const isPerfect = (number) => {
  return Number.isInteger(Math.sqrt(number));
};

export const getNumberDetails = async (number) => {
  if (isNaN(number)) return { "number": "Not a number", "error": true };
  else if (!Number.isInteger(number)) return { "number": "Not an integer", "error": true };

  const isEven = number % 2 === 0 ? "even" : "odd";
  const properties = armstrongCheck(number) ? ["armstrong"] : [];
  properties.push(isEven);
  
  const response = await fetch(`${process.env.NUMBERS_API_URL}${number}/math`);
  const fun_fact = await response.text();

  return {
    number,
    is_prime: primeCheck(number),
    is_perfect: isPerfect(number),
    digits_sum: digitsSum(number),
    properties,
    fun_fact
  };
};