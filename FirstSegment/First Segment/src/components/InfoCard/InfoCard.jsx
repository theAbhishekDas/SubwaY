import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Our Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Name </b>
        </span>
        <span>Abhishek Das(21MCC2012)</span><br></br>
        <span>Yashasvi Tripathi(21MCC2009)</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>India</span>
      </div>
      <div className="info">
        <span>
          <b>Course </b>
        </span>
        <span>MCA CC & DevOps</span>
      </div>
     

      <div className="info">
        <span>
          <b>Studies at </b>
        </span>
        <span>Chandigarh University</span>
      </div>
      <div className="info">
        <span>
          <b>Topic </b>
        </span>
        <span>SUBWAY - Major Projecct</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
