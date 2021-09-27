import React, { useState } from "react";
import "./pogoda.css";
import "./data_country";
import { baza } from "./data_country";
import namlik_logo from "../img/humidity-64.png";
import bpm_logo from "../img/а_давление.png";
import veter from "../img/воздух.png";
import obloko from "../img/облако.png";

function Pogoda() {
  const [input_value, setInputValue] = useState("namangan");
  const [pogoda, setPogoda] = useState("");
  const [shaxar, setShaxar] = useState("...");
  const [davlat, setCountry] = useState("...");
  const [xato, setError] = useState();
  const [maxTemp, setMaxTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [hour, setHour] = useState();
  const [minut, setMinut] = useState();
  const [namlik, setNamlik] = useState(0);
  const [pmm, setPmm] = useState(0);
  const [shamol, setShamol] = useState(0);
  const [bulut, setBulut] = useState(0);

  const search = async (e) => {
    if (e.key === "Enter") {
      My_Pogoda(
        setPogoda,
        setShaxar,
        setCountry,
        setError,
        setMaxTemp,
        setMinTemp,
        input_value,
        setNamlik,
        setPmm,
        setShamol,
        setBulut
      );
    }
  };

  window.addEventListener("mousemove", () => {
    MyDate(setHour, setMinut);
  });

  return (
    <div className="card_pogoda">
      <div id="card_top">
        <div className="top_content">
          <div id="clock">
            <p id="hour">{hour}</p>
            <p id="sec">:</p>
            <p id="miut">{minut}</p>
          </div>
        </div>

        <div id="in_put" className="top_content">
          <input
            onKeyPress={search}
            id="input_value"
            placeholder="Uzbekistan"
            onChange={(event) => setInputValue(event.target.value)}
          />
        </div>

        <div id="info_davlat" className="top_content">
          <div>
            <p id="davlat">{davlat}</p>
            <p id="shaxar">{shaxar}</p>
          </div>
        </div>
      </div>
      <div id="card_center">
        {pogoda} {xato}
      </div>
      <div id="card_bottom">
        <div id="card_pro">
          <div id="box_vl">
            <p id="p_teg">Max: {maxTemp}</p>
          </div>
          <div id="box_vl">
            <p id="p_teg">Min: {minTemp}</p>
          </div>
        </div>

        <div id="card_pro">
          <div id="box_vl">
            <img id="logo_vl" src={namlik_logo} alt="Logo" />
            <p id="p_teg">{namlik}</p>
          </div>
          <div id="box_vl">
            <img id="logo_vl" src={bpm_logo} alt="Logo" />
            <p id="p_teg">{pmm}</p>
          </div>
        </div>

        <div id="card_pro">
          <div id="box_vl">
            <img id="logo_vl" src={veter} alt="" />
            <p id="p_teg">{shamol}</p>
          </div>
          <div id="box_vl">
            <img id="logo_vl" src={obloko} alt="" />
            <p id="p_teg">{bulut}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function My_Pogoda(
  setPogoda,
  setShaxar,
  setCountry,
  setError,
  setMaxTemp,
  setMinTemp,
  input_value,
  setNamlik,
  setPmm,
  setShamol,
  setBulut
) {
  let mesta_v = input_value;
  if (mesta_v === "") return null;

  // const API_ID = "61b1a8a1e0f11a8616c2"

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${mesta_v}&APPID=180941f68139fba12f166dc35d9b688b`
  )
    .then((response) => response.json())
    .then((json) => {
      try {
        setPogoda(Math.round(json.main.temp - (273.15 * 100) / 100) + "°C");
        setShaxar(json.name);
        let st = json.sys.country;
        setCountry(baza[st]);
        setMaxTemp(
          Math.round(json.main.temp_max - (271.15 * 100) / 100) + "°C"
        );
        setMinTemp(
          Math.round(json.main.temp_min - (275.15 * 100) / 100) + "°C"
        );
        setNamlik(json.main.humidity + "%");
        setPmm(json.main.pressure);
        setShamol(json.wind.speed + " M/s");
        setBulut(json.clouds.all + "%");
      } catch (err) {
        alert(input_value + " ~ Nomli joy topilmadi");
      }
    });
}

function MyDate(setHour, setMinut) {
  const d = new Date(),
    hr = d.getHours(),
    mn = d.getMinutes();

  if (hr < 10) {
    setHour("0" + hr);
  } else {
    setHour(hr);
  }

  if (mn < 10) {
    setMinut("0" + mn);
  } else {
    setMinut(mn);
  }
}

export { Pogoda };
