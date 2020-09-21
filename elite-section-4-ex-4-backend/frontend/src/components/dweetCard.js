import React from "react";
import { Link } from "react-router-dom";

export default function dweetCard(props) {
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
  const copy = () => {
    var copyText = document.getElementById("copyValue");
    copyText.select();
    // copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copy this --> "+copyText.value)
    return;
  }
  const { dweet } = props;
  const urlLink = `/update-dweet/${dweet._id}`;
  return (
      <div>
    <input type="text" value={dweet._id} id="copyValue" style={{display: 'none'}}/>
    <input type="submit" value="Copy ID" onClick={copy} />
    <Link to={urlLink}>
      <div className="card" key={dweet._id}>
        <p>Id: {dweet._id}</p>
        <p>{dweet.dweet}</p>
        <p>{convertIso(dweet.last_updated_at)}</p>
        <p>{dweet.posted_by}</p>
      </div>
    </Link>
    </div>
  );
}
