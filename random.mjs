export default function randomDigits(digits = 1) {
    if (digits < 1) throw new Error("Digits must be at least 1.");
    
    const min = 10 ** (digits - 1);
    const max = 10 ** digits - 1;   
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }