import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <p>Lat: {lat}</p>
      <p>Lng: {lng}</p>
      <button onClick={() => setSearchParams({ lat: 90, lng: 100 })}>
        Change Position
      </button>
    </div>
  );
}

export default Map;
