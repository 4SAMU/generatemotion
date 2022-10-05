/** @format */

import React, { useState } from "react";
import "./generateMotion.css";
import water from "../../assets/fish.gif";
import coin from "../../assets/coins.gif";
import sky from "../../assets/sky.gif";
import shapes from "../../assets/shapes.gif";
import tire from "../../assets/tire.gif";

const GenerateMotion = () => {
  const [formParams, updateFormParams] = useState({
    title: "",
    description: "",
  });

  const [imageX, setImage] = useState();
  const [busy, setBtnBusy] = useState(false);

  async function checkImage() {
    const { title, description } = formParams;
    if (!title) {
      return window.alert("Title can't be empty");
    } else if (!description) {
      return window.alert("Description can't be empty");
    }
    try {
      setBtnBusy(true);
      if (title === "coin" || title === "coins") {
        setImage(coin);
      } else if (title === "water" || title === "wat" || title === "fish") {
        setImage(water);
      } else if (title === "sky" || title === "cloud" || title === "clouds") {
        setImage(sky);
      } else if (
        title === "shape" ||
        title === "shapes" ||
        title === "triangle" ||
        title === "rectangle" ||
        title === "circle" ||
        title === "oval"
      ) {
        setImage(shapes);
      } else if (title === "tire" || title === "car" || title === "road") {
        setImage(tire);
      } else {
        setImage("not found");
        setBtnBusy(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const Delay = () => {
    setTimeout(function () {
      checkImage();
    }, 500);
  };

  async function ResetInputs() {
    setTimeout(function () {
      setBtnBusy(false);
      updateFormParams({ title: "", description: "" });
      setImage("");
    }, 500);
  }

  return (
    <div className="generatemotion_page">
      <div className="writeText">
        Write your text and we will
        <br /> create a precise motion
        <br /> graphics from it for you.
      </div>
      <div className="JustBegintyping">
        Just begin typing. Its is as easy as snap!
      </div>
      <div className="SearchItemBox">
        <input
          type="text"
          placeholder="Title"
          className="input_title"
          value={formParams.title}
          id={formParams.title}
          onChange={(e) =>
            updateFormParams({
              ...formParams,
              title: e.target.value.toLowerCase(),
            })
          }
        ></input>
        <textarea
          type="text"
          placeholder="Description of what you want. Description of what you want.
          Description of what you want."
          className="input_description"
          value={formParams.description}
          id={formParams.description}
          onChange={(e) =>
            updateFormParams({
              ...formParams,
              description: e.target.value.toLowerCase(),
            })
          }
        ></textarea>
      </div>
      <div>
        <img src={imageX} alt={imageX} className="OutputImage"></img>
      </div>

      {busy ? (
        <button className="startBTN" onClick={ResetInputs}>
          Try again
        </button>
      ) : (
        <button className="startBTN" onClick={Delay}>
          Start
        </button>
      )}
      {busy ? (
        <a href={imageX} download={imageX}>
          <button className="downloadBTN">Download </button>
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default GenerateMotion;
