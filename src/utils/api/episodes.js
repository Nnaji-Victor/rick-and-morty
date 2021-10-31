import axios from "axios";
// import { processError } from "../processError";

async function getEpisode(url) {
  try {
    const response = await axios.get(`${url}`);
    return response;
  } catch (error) {
    return console.log(error);
  }
}

const EpisodeApi = {
  getEpisode,
};

export default EpisodeApi;
