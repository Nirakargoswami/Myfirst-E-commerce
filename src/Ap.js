const fetch = require("node-fetch");
const swapi = require("./script2");

const googelSearche = require("./script");
const googelDatabase = [
  "cats.com",
  "supe recipe.com",
  "flowres.com.com",
  "cat picture.com",
  "my favourite.com",
];
describe("googleseahe", () => {
  it("friest test ", () => {
    console.log(googelSearche("com", googelDatabase));
  });

  it("second test ", () => {});
});

it("let see data fetching is working or nor ", () => {
  expect.assertions(1);
  return swapi.getdata(fetch).then((data) => {
    console.log(data);
    expect(data.count).toEqual(82);
  });
});

it("lets check mok test ", () => {
  const mockc = jest.fn()
  .mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 82,
          results: [1, 3, 2, 3, 4]
        })
    })
  );

  expect.assertions(3)
  return swapi.getdata(mockc).then((data) => {
    expect(mockc.mock.calls.length).toBe(1)
    expect(mockc).toBeCalledWith("https://swapi.dev/api/people");
    expect(data.count).toEqual(82);

  })
});
