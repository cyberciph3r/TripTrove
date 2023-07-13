import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Map from "./Components/Map/Map";
import List from "./Components/List/List";
import { CssBaseline, Box } from "@material-ui/core";
import getData from "./api";
import "./scrollbar.css";

function App() {
  const [showLoader, setShowLoader] = useState(false);
  const [places, setPlaces] = useState([]);
  const [type, setType] = useState("restaurants");
  const [currentPos, setCurrentPos] = useState(null);
  const [bounds, setBounds] = useState({
    bl: { lat: 0, lng: 0 },
    tr: { lat: 0, lng: 0 },
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPos({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    setShowLoader(true);
    getData(bounds.bl, bounds.tr, type).then((data) => {
      // console.log(data);
      setPlaces(
        data?.filter((place) => {
          return place.name != null;
        })
      );
      setShowLoader(false);
    });
  }, [bounds, type]);

  return (
    <div
      style={{
        boxSizing: "border-box",
      }}
    >
      <CssBaseline />
      <Header />
      <Box display="flex">
        <List
          places={places}
          type={type}
          setType={setType}
          showLoader={showLoader}
          setCurrentPos={setCurrentPos}
        />
      </Box>
      <Map
        currentPos={currentPos}
        setCurrentPos={setCurrentPos}
        bounds={bounds}
        setBounds={setBounds}
        places={places}
      />
    </div>
  );
}

export default App;
