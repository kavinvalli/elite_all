import React, { useEffect, useState } from "react";
import DweetApi from "../apis/dweets";
import DweetCard from '../components/dweetCard';

const dweetApi = new DweetApi();
const SpecificDweet = () => {
  const [dweet, setDweet] = useState(null);
  const [isLoading, setLoading] = useState(false)

    const hasWhiteSpace = (string) => {
        return /[^A-Za-z0-9]+/g.test(string);
    }

  const searchDweet = async () => {
      setLoading(true)
    let value = document.getElementById("dweetSearch").value;
    // console.log(value);
    if (hasWhiteSpace(value)) {
        alert("Not a valid ID")
        setLoading(false)
    } else {
        var dweetResponse = await dweetApi.dweetSpecific(value);
        if (dweetResponse) {
            setLoading(false)
        console.log(dweetResponse);
        setDweet(dweetResponse);
        document
            .querySelector("#allDweets")
            .scrollIntoView({ behavior: "smooth" })
        }
    }
  };
  return (
    <div>
      <div className="bg">
        <div className="welcomeCard">
          <h2>Search for Dweet By Id</h2>
          <div className="form">
            <input
              type="text"
              name="id"
              id="dweetSearch"
              autocomplete="off"
              required
            />
            <label for="id" className="label-name">
              <span className="content-name">Dweet ID</span>
            </label>
          </div>
          {isLoading ? <input type="submit" value="Loading..." onClick={searchDweet} /> : <input type="submit" value="Search" onClick={searchDweet} />}
        </div>
      </div>
      <div id="allDweets" className="allDweets">
            {
                dweet && (
            <div className="container">
                <div className="row">
                <h3> Dweet </h3>
                {dweet.dweet != null ? <DweetCard dweet={dweet} /> : <b>No Dweet with this ID</b> }
                    
                </div>
            </div>
            )}
        </div>
    </div>
  );
}

export default SpecificDweet;