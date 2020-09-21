import React, { useEffect, useState } from "react";
import DweetApi from "../apis/dweets";
import { getLoginKey } from "../utils/auth";
const dweetApi = new DweetApi();

const UpdateDweet = (props) => {
  const [dweet, setDweet] = useState(null);
  const [isAllowed, setAllowed] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const convertIso = (string) => {
    let date = new Date(string);
    return (
      date.getFullYear() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getDate() +
      ", " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
    );
  };
  useEffect(() => {
    async function getData() {
      setLoading(true);
      //   console.log(props.match.params.id);
      var dweetResponse = await dweetApi.dweetSpecific(props.match.params.id);
      if (dweetResponse) {
        console.log(localStorage.getItem("DWEET_USERNAME"));
        setLoading(false);
        console.log(dweetResponse);
        setDweet(dweetResponse);
        if (
          localStorage.getItem("DWEET_USERNAME") === dweetResponse.posted_by
        ) {
          setAllowed(true);
        } else {
          setAllowed(false);
        }
        // document
        //   .querySelector("#allDweets")
        //   .scrollIntoView({ behavior: "smooth" });
      }
    }
    getData();
  }, []);
  const updateDweet = async () => {
    var dweetValue = document.getElementById("dweet").value;
    if (dweetValue.length !== 140) {
      alert("Dweet should be 140 characters long");
    } else if (dweetValue === dweet.dweet) {
      alert("Kuch change toh karo update karne ke liye\n(Please change something to update)");
      return false;
    } else {
      var data = { dweet: dweetValue };
      setLoading(true);
      var dweetResponse = await dweetApi.updateDweet(
        props.match.params.id,
        data
      );
      if (dweetResponse) {
        //   setDweet(dweetResponse);
        //   setLoading(false);
        var dweetResponseTwo = await dweetApi.dweetSpecific(
          props.match.params.id
        );
        if (dweetResponseTwo) {
          setLoading(false);
          console.log(dweetResponseTwo);
          setDweet(dweetResponseTwo);
          // document
          //   .querySelector("#allDweets")
          //   .scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };
  const deleteDweet = async () => {
    var dweetResponse = await dweetApi.deleteDweet(
        props.match.params.id,
      );
      if (dweetResponse) {
          if (dweetResponse.deletedCount === 1){
              window.location.replace('/');
          }else {
              alert("somesthing went wrong")
          }
      }
  }
  return (
    <div>
      <div className="bg">
        <div
          className="welcomeCard"
          style={{
            width: "auto",
            minWidth: 680,
            height: "auto",
            minHeight: 280,
          }}
        >
          <h2>Update Dweet</h2>
          {dweet && (
            <div>
              <h3>Dweet:</h3>
              <p>{dweet.dweet}</p>
              <h3>Posted By:</h3>
              <p>{dweet.posted_by}</p>
              <h3>Lasted Updated on:</h3>
              <p>{convertIso(dweet.last_updated_at)}</p>
            </div>
          )}
          {isAllowed ? (
            <div className="form">
              {" "}
              <input
                type="text"
                name=""
                id="dweet"
                autocomplete="off"
                defaultValue={dweet.dweet}
                required
              />{" "}
              <label for="id" className="label-name">
                {" "}
                <span className="content-name">Dweet</span>{" "}
              </label>{" "}
            </div>
          ) : (
            false
          )}
          {isAllowed ? (
            isLoading ? (
              <input type="submit" value="Loading..." disabled />
            ) : (
              <div><input type="submit" value="Update" onClick={updateDweet} /><input type="submit" value="Delete" onClick={deleteDweet} /></div>
            )
          ) : (
            false
          )}
        </div>
      </div>
      {/* <div id="allDweets" className="allDweets">
        </div> */}
    </div>
  );
};

export default UpdateDweet;
