import { get } from "../helpers/Request";

export const fetchCalenderEvents = async (params = {}) => {
  try {
    const resp = await get("primary/events", {
      timeMin: "2020-05-15T00:00:00Z",
      timeMax: "2020-05-15T23:59:59Z",
      maxResults: 500,
      orderBy: "startTime",
      singleEvents: true
    });
    return resp;
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};
