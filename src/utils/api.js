import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "47fc6574c5msh4cd22bef46fcac6p155ab1jsn4b1422a668fc",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
