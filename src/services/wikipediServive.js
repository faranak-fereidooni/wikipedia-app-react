import config from "../config.json";
import http from "./httpService";

export function getSearchText(text) {
  return http.get(config.wikipediaUrl, {
    params: {
      "action": "query",
      "format": "json",
      "list": "search",
      "srlimit":20,
      "origin" : "*",
      "srsearch": text,
    },
  });
}
