import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { Videocam, PhotoLibrary, InsertEmoticon } from "@material-ui/icons";
import "./MessageSender.css";
import { useStateValue } from "../../../StateProvider";
import db from "../../../firebase";
import firebase from "firebase";

function MessageSender() {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  //DB

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL}></Avatar>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.userName}?`}
          />
          <input
            placeholder="image URL (Optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <Videocam style={{ color: "red" }}></Videocam>
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibrary style={{ color: "green" }}></PhotoLibrary>
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }}></InsertEmoticon>
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
