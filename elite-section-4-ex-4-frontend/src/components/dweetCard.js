import React from "react";

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
    const {dweet} = props
    return (
        <div className="card" key={dweet._id}>
            <p>Id: {dweet._id}</p>
            <p>{dweet.dweet}</p>
            <p>{convertIso(dweet.last_updated_at)}</p>
            <p>{dweet.posted_by}</p>
        </div>
    )
}