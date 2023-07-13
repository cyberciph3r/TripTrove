import Axios from "axios";

async function getData(bl, tr, type) {
  const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/" + type + "/list-in-boundary",
    params: {
      tr_longitude: tr.lng,
      tr_latitude: tr.lat,
      bl_longitude: bl.lng,
      bl_latitude: bl.lat,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_TRAVELAD_API_KEY,
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  try {
    const response = await Axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export default getData;
