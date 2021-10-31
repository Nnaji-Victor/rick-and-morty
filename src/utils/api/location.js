import axios from "axios";

async function getLocation(url) {
  try {
    const response = await axios.get(`${url}`);
    return response;
  } catch (error) {
    return console.log(error);
  }
}

const LocationApi = {
  getLocation,
};

export default LocationApi;