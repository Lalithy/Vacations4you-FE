const BASE_URL = "http://localhost:5000";

class CruiseService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async getAllCruise() {
    try {
      const response = await this.httpClient.get(BASE_URL + "/api/cruise/all");
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default CruiseService;
