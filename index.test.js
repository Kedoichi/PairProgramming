const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });

  it("Handles 30 - 8:30", () => {
    const timeInWords = convertTimeToWords("8:30");
    expect(timeInWords).toBe("half past eight");
  });

  it("Handles times after 30 mins - 2:45", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });

  it("Handles midday", () => {
    expect(convertTimeToWords("12:00")).toBe("midday");
  });

  it("Handles o'clock", () => {
    expect(convertTimeToWords("2:00")).toBe("two o'clock");
  });

  it("Handles minutes past the hour", () => {
    expect(convertTimeToWords("2:03")).toBe("three past two");
    expect(convertTimeToWords("2:11")).toBe("eleven past two");
  });

  it("Handles quarter past", () => {
    expect(convertTimeToWords("2:15")).toBe("quarter past two");
  });

  it("Handles half past", () => {
    expect(convertTimeToWords("2:30")).toBe("half past two");
    expect(convertTimeToWords("8:30")).toBe("half past eight");
  });

  it("Handles minutes to the hour", () => {
    expect(convertTimeToWords("2:33")).toBe("twenty-seven to three");
    expect(convertTimeToWords("2:40")).toBe("twenty to three");
    expect(convertTimeToWords("2:55")).toBe("five to three");
  });

  it("Handles quarter to", () => {
    expect(convertTimeToWords("2:45")).toBe("quarter to three");
  });
});
