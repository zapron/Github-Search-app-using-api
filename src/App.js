import React from "react";
import { useState } from "react";

export default function Fetching() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");

  console.log(data);

  function handleInput(e) {
    setInput(e.target.value);
  }

  async function fetchData() {
    setLoading(true);
    fetch(`https://api.github.com/users/${input}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((e) => setError(e));
    setLoading(false);
  }
  return (
    <div style={{ textAlign: "center", border: "2px dashed black" }}>
      <h1>Search Github user</h1>
      <input
        style={{ border: "2px dashed black" }}
        type="text"
        onChange={handleInput}
        value={input}
      ></input>
      <br />
      <button
        style={{ background: "white", border: "2px dashed black" }}
        onClick={fetchData}
      >
        FETCH
      </button>
<button
        style={{ background: "white", border: "2px dashed black" }}
        onClick={() => {
          setData(null);
        }}
      >
        RESET
      </button>

      {loading ? (
        <div>Loading...</div>
      ) : data ? (
        <div style={{ textAlign: "center", border: "2px dashed black" }}>
          {" "}
          <span>
            The username of the person is:<b> {data.login}</b>
          </span>
          <br />
          <span>
            Github Id : <b>{data.id}</b>
          </span>
          <br />
          <span>The name of the person is: {<b>{data.login}</b>}</span>
          <br />
          <span>
            You can contact the person at :{" "}
            <b>
              <a href={data.html_url}>{<b>{data.html_url}</b>}</a>
            </b>
          </span>
          <br />
          <span>
            Public repos : <b>{data.public_repos}</b>
          </span>
          <br />
          <span>
            You can get the api info for this person at :{" "}
            <a href={data.url}>{data.url}</a>
          </span>
          <br />
          <span>
            <b>Github Avatar</b> <br />{" "}
            <img
              style={{ border: "2px dashed black" }}
              src={data.avatar_url}
              height="150px"
              width="150px"
              alt="user pic"
            />
          </span>
        </div>
      ) : (
        <div>No Data..</div>
      )}
    </div>
  );
}
