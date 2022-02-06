import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Map, { Marker, NavigationControl, Popup } from "react-map-gl";

import "../sass/user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "mapbox-gl/dist/mapbox-gl.css";

import { isEmpty } from "./isEmpty";

const User = () => {
  const { _id } = useParams();

  const user = useSelector((state) => state.userReducer[_id - 1]);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: Math.round(Number(user.address.geo.lat)),
    longitude: Math.round(Number(user.address.geo.lng)),
    zoom: 6,
  });

  const [showPopUp, setShowPopUp] = useState(true);

  return (
    !isEmpty(user) && (
      <div className="User">
        <div className="company">
          <div>
            <h2>Entreprise :</h2>
          </div>
          <div>
            <div className="company-name">
              <h1>{user.company.name}</h1>
            </div>
            <div className="company-catchPrase">
              <h3>{user.company.catchPhrase}</h3>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <div className="contact-details">
            <h2>Contacts</h2>
            <div className="Name">
              <span className="contact-key">{Object.keys(user)[1]} :</span>
              <span> {user[Object.keys(user)[1]]}</span>
            </div>
            <div className="Username">
              <span className="contact-key">{Object.keys(user)[2]} :</span>
              <span> {user[Object.keys(user)[2]]}</span>
            </div>
            <div className="email">
              <span className="contact-key">{Object.keys(user)[3]} :</span>
              <span>{user[Object.keys(user)[3]]}</span>
            </div>
            <div className="phone">
              {" "}
              <span className="contact-key"> {Object.keys(user)[5]} :</span>
              <span>{user[Object.keys(user)[5]]}</span>
            </div>
            <div className="Website">
              {" "}
              <span className="contact-key">{Object.keys(user)[6]} :</span>{" "}
              <span>
                <a
                  href={`www.${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >{`www.${user.website}`}</a>
              </span>
            </div>
          </div>
          <div className="map-box">
            {" "}
            <div className="address">
              <div>Adresse : </div>
              <div>
                <div>
                  {user.address.street}, {user.address.suite}
                </div>
                <div>
                  {user.address.city}, {user.address.zipcode}
                </div>
              </div>
            </div>
            <div id="map" className="map">
              {/*   <Map
                container="map"
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                initialViewState={viewport}
                onViewportChange={(viewport) => setViewport(viewport)}
                style={{ width: 600, height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
              >
                <Marker
                  latitude={Math.round(Number(viewport.latitude))}
                  longitude={Math.round(Number(viewport.longitude))}
                >
                  <FontAwesomeIcon
                    className="map-marker"
                    icon="map-marker-alt"
                  ></FontAwesomeIcon>
                 
                </Marker>{" "}
                <NavigationControl />
                {showPopUp && (
                  <Popup
                    longitude={Math.round(Number(viewport.longitude))}
                    latitude={Math.round(Number(viewport.latitude))}
                     closeButton={true}
                    closeOnClick={false} 
                    offsetTop={-100}
                  >
                    <p>{user.address.street}</p>
                    <p>{user.address.city}</p>
                  </Popup>
                )}
              </Map> */}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default User;
