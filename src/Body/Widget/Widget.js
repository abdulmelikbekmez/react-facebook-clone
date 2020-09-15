import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widget">
      <iframe
        title="asdfas"
        width="340"
        height="100%"
        src="https://www.youtube.com/embed/8oAns_nOcVU"
        frameborder="0"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allowTransparency="true"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Widget;
