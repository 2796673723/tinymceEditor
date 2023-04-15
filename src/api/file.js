import axios from "axios";

export function upload(url, data) {
  return axios({
    url,
    method: "post",
    data,
  });
}
