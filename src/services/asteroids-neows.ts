import moment from "moment";
import {IAsteroidFeed, IAsteroidFull} from "../interfaces/asteroids";
import {createAPI} from "./api";

const BACKEND_URL = "https://api.nasa.gov";
const API_KEY = "WwlAI1824WtXCs2se2NimtbqpOkH7CfzEhbTLyyn";
const FEED_URL = "/neo/rest/v1/feed";
const ASTEROID_URL = "neo/rest/v1/neo/";

const apiClient = createAPI();

export const getFeed = () => {
  const startDate = moment().format("YYYY-MM-DD");
  const endDate = startDate;

  return apiClient.get<IAsteroidFeed>(FEED_URL, {
    baseURL: BACKEND_URL,
    params: {
      start_date: startDate,
      end_date: endDate,
      api_key: API_KEY,
    },
  });
};

export const getFeedByURL = (url: string) => apiClient.get<IAsteroidFeed>(url);

export const getAsteroid = (id: string) =>
  apiClient.get<IAsteroidFull>(ASTEROID_URL + id, {
    baseURL: BACKEND_URL,
    params: {
      api_key: API_KEY,
    },
  });
