import React, { useEffect, useState } from "react";
import DweetApi from "../apis/dweets";
import DweetCard from "../components/dweetCard";
import { isLogin } from "../utils/auth";

const dweetApi = new DweetApi();
const CreateDweet = () => {
  const [dweet, setDweet] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (!isLogin()) {
      // return <Redirect to="/login" />;
      window.location.replace("/login");
    }
  });
  const createDweet = async () => {
    var dweetValue = document.getElementById("dweet").value;
    if (dweetValue.length != 140) {
      alert("The dweet needs to be 140 characters long");
      return false;
    }
    var data = { dweet: dweetValue };
    var dweetResponse = await dweetApi.createDweet(data);
    if (dweetResponse) {
      setDweet(dweetResponse.dweet);
      document
        .querySelector("#allDweets")
        .scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="bg">
        <div className="welcomeCard">
          <h2>Create Dweet</h2>
          <div className="form">
            <input
              type="text"
              name="id"
              id="dweet"
              autocomplete="off"
              required
            />
            <label for="id" className="label-name">
              <span className="content-name">Dweet</span>
            </label>
          </div>
          {isLoading ? (
            <input type="submit" value="Loading..." disabled />
          ) : (
            <input type="submit" value="Create" onClick={createDweet} />
          )}
        </div>
      </div>
      <div id="allDweets" className="allDweets">
        {dweet && (
          <div className="container">
            <div className="row">
              <h3> Dweet </h3>
              {dweet.dweet != null ? (
                <DweetCard dweet={dweet} />
              ) : (
                <b>No Dweet with this ID</b>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CreateDweet;
