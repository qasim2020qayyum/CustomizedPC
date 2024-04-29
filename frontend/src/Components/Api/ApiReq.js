import axios from "axios";

export const ApiFetchReq = (methods, url, body, header) => {
  let configration = {
    method: methods,
    url,
    headers: header ? header : { "content-type": "application/json" },
    data: body,
  };
  return axios(configration)
    .then((data) => {
      console.log("from Api Req" + data);
      return data;
    })
    .catch((err) => console.log(err));
};
