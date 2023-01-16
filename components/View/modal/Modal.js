import React from "react";
import { ModalStyle } from "../../styles/modal";

const Modal = ({ setVisibility, isVisibility }) => {
  return (
    <div style={{ display: isVisibility ? "flex" : "none" }}>
      <ModalStyle>
        <div className="black"></div>
      </ModalStyle>
    </div>
  );
};

export default Modal;
