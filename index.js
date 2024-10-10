// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
    // TODO: real code goes here!

    switch (time) {
        case "0:00":
            return "midnight";
        case "12:00":
            return "midday";
    }

    let hour = Number(time.split(":")[0]);
    let minute = time.split(":")[1];
    let past = true;
    let connectWord;
    let minInEng;

    if (minute > 30) {
        minute = 60 - minute;
        hour=+1
        past = false;
    }

    let hrInEng = number[hour];

    if (special[minInEng] != null) {
        minInEng = number[minute];
    } else {
        minInEng = special[minute];
    }

    if (past == false) {
        connectWord = "to";
    } else {
        connectWord = "past";
    }

    const result = `${minInEng} ${connectWord} ${hrInEng}`;
    console.log(result);
    return result;
}
const special = {
    30: "half",
    15: "quarter",
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
};

module.exports = { convertTimeToWords };
