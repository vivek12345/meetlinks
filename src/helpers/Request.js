import { api } from "./ApiLibrary";

export async function get(apiEndpoint, urlParams) {
  return api.request({
    method: "GET",
    url: apiEndpoint,
    params: urlParams
  });
}

export async function post(apiEndpoint, payload) {
  return api.request({
    method: "POST",
    url: apiEndpoint,
    data: payload
  });
}

export async function put(apiEndpoint, payload) {
  return api.request({
    method: "PUT",
    url: apiEndpoint,
    data: payload
  });
}

export async function deleteFn(apiEndpoint, urlParams) {
  return api.request({
    method: "DELETE",
    url: apiEndpoint,
    params: urlParams
  });
}
