import { getArtists } from "../../public/dom/js/exercise-2-solved.js";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("getArtists", function () {
  beforeEach(() => {
    fetch.resetMocks();
  });

  // Make sure the function returns a promise:
  it("should call fetch and return a promise", function () {
    fetch.mockResponseOnce(JSON.stringify({}));

    let p = getArtists();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(p.constructor).toBe(Promise);

    expect(p).resolves.toStrictEqual({});
  });

  // Make sure the URL for all artists is correct:
  it("should request all artists", function () {
    fetch.mockResponseOnce(JSON.stringify({}));

    let p = getArtists();
    expect(fetch).toHaveBeenCalledWith("/artists");
  });

  // Make sure the URL for a single artist is correct:
  it("should request a single artist", function () {
    fetch.mockResponseOnce(JSON.stringify({}));

    let p = getArtists(1);
    expect(fetch).toHaveBeenCalledWith("/artists/1");
  });

  it("should handle failures", function () {
    fetch.mockReject(() => Promise.reject("API is down"));

    let p = getArtists();
    expect(p).rejects.toThrow("Something went wrong with the request");
  });
});
