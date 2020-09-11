import getDate, { getFormattedDate } from "./../utils/getDate";
describe("App", () => {
  it("It should return the result - null as we are passing null data", () => {
    expect(getDate(null)).toBe(null);
  });

  it("It should return the result - now", () => {
    const date = Date.parse(String(new Date()));
    expect(getDate(date)).toBe("now");
  });

  // This test works but since the function takes time to load, the number of seconds changes and might produce failed test
  // it("It should return the result - seconds ago", () => {
  //   let date = Date.parse(String(new Date()));
  //   let seconds = 10;
  //   let newTime = date - seconds * 1000;
  //   expect(getDate(newTime / 1000)).toBe(`${seconds} seconds ago`);
  // });

  it("It should return the result - about a minute ago", () => {
    let date = Date.parse(String(new Date()));
    let newDate = date - 70 * 1000;
    expect(getDate(newDate / 1000)).toBe("about a minute ago");
  });
  it("It should return the result - x minutes ago", () => {
    let date = Date.parse(String(new Date()));
    let minutes = 10;
    let newDate = date - minutes * 60 * 1000;
    expect(getDate(newDate / 1000)).toBe(`${minutes} minutes ago`);
  });
  it("It should return the result - Today", () => {
    let date = Date.parse(String(new Date()));
    let newDate = date - 70 * 60 * 1000;
    let resultDate = getFormattedDate(new Date(newDate), "Today");
    expect(getDate(newDate / 1000)).toBe(resultDate);
  });
  it("It should return the result - Yesterday", () => {
    let date = Date.parse(String(new Date()));
    let newDate = date - 23 * 60 * 60 * 1000;
    let resultDate = getFormattedDate(new Date(newDate), "Yesterday");
    expect(getDate(newDate / 1000)).toBe(resultDate);
  });
  it("It should return the result - from this year", () => {
    let date = Date.parse(String(new Date()));
    let newDate = date - 100 * 23 * 60 * 60 * 1000;
    let resultDate = getFormattedDate(new Date(newDate), false, true);
    expect(getDate(newDate / 1000)).toBe(resultDate);
  });
});
