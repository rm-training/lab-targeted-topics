function getArtists(id) {
  let path = "/artists";
  if (id) {
    path += "/" + id;
  }

  // the "initial request" promise -- resolves to a Response object
  const requestPromise = fetch(path);

  const jsonPromise = requestPromise.then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Bad response");
      }
    },
    (error) => {
      throw new Error("Something went wrong with the request");
    },
  );

  return jsonPromise;
}

export { getArtists };
