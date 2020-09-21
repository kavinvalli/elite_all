import { getLoginKey } from "./auth";

class NetworkUtil {
  async post(url, body, isAuthorized) {
    var json;
    console.log(body);
    var headers = {
      "Content-Type": "application/json",
      Authorization: `${getLoginKey()}`,
    };
    if (!isAuthorized) {
      headers = { "Content-Type": "application/json" };
    }
    console.log(headers)
    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(url, requestOptions);
      json = await response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
    return json;
  }
  async get(url) {
    var json;
    var headers = { "Content-Type": "application/json" };
    const requestOptions = {
      method: "GET",
      headers: headers,
    };
    try {
      const response = await fetch(url, requestOptions);
      json = await response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
    return json;
  }
  async update(url, body) {
      console.log(`URL: ${url}; BODY: ${JSON.stringify(body)}`)
    var json;
    // console.log(body);
    var headers = { "Content-Type": "application/json" };
    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(url, requestOptions);
      json = await response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
    return json;
  }
  async delete(url) {
    var json;
    var headers = { "Content-Type": "application/json" };
    const requestOptions = {
      method: "DELETE",
      headers: headers,
    };
    try {
      const response = await fetch(url, requestOptions);
      json = await response.json();
    } catch (error) {
      console.log(error);
      throw error;
    }
    return json;
  }
}
export default NetworkUtil;
