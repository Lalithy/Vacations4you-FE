const CruiseClient = {
  async get(url) {
    return await fetch(url);
  },
};

export default CruiseClient;
