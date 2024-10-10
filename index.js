function convertTimeToWords(time) {
  const [hour, minute] = time.split(":").map(Number);

  if (hour === 0 && minute === 0) return "midnight";
  if (hour === 12 && minute === 0) return "midday";

  const hourWord = number[hour % 12];
  const nextHourWord = number[(hour + 1) % 12];

  if (minute === 0) return `${hourWord} ${special[0]}`;

  if (minute > 30) {
    return `${special[60 - minute] || number[60 - minute]} to ${nextHourWord}`;
  }

  return `${special[minute] || number[minute]} past ${hourWord}`;
}
const special = {
  30: "half",
  15: "quarter",
  0: "o'clock",
};
const number = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty-one",
  22: "twenty-two",
  23: "twenty-three",
  24: "twenty-four",
  25: "twenty-five",
  26: "twenty-six",
  27: "twenty-seven",
  28: "twenty-eight",
  29: "twenty-nine",
};

module.exports = { convertTimeToWords };
