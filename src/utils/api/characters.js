import { makeRequest } from "./index";

async function getCharacters({ page, name, status }) {
  try {
    const response = await makeRequest.get(`/character`, {
      params: {
        page,
        name,
        status,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getMainCharacters() {
  try {
    const response = await makeRequest.get("/character/[1,2,3,4,5]");
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getCharacter(id){
  try {
    const response = await makeRequest.get(`/character/${id}`);
    return response;
  } catch (error) {
    return console.log(error);
  }
}

const CharacterApis = {
  getCharacters,
  getMainCharacters,
  getCharacter
};

export default CharacterApis;
