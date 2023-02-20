import React, { useState } from "react";
import Button from "../../constants/buttons/Buttons";
import { COLORS } from "../../constants/colors";
import { ModalStyle } from "../../styles/modal";

const Modal = ({ clickModal, isVisibility }) => {
  const [data, setData] = useState({ name: "", emailOrPhone: "" });

  const onChangeText = (event) => {
    console.log(event.name, event.value);

    setData({ [event.name]: event.value });
  };

  return (
    <div style={{ display: isVisibility ? "flex" : "none" }}>
      <ModalStyle>
        <div className="black" onClick={clickModal}></div>
        <div className="modal">
          <h4>Biz ga ismingiz va telfon raqamizngizni yuboring</h4>
          <div className="inputs">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input"
              onChange={(e) => onChangeText(e.target)}
              value={data.name}
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="input"
              name="emailOrPhone"
              onChange={(e) => onChangeText(e.target)}
              value={data.emailOrPhone}
            />
          </div>
          <div className="btns">
            <Button
              text="Cancel"
              back={COLORS.COLOR_WHITE}
              onClick={clickModal}
            />
            <Button text="Send" back={COLORS.BTN_BACKGROUND_SKY} />
          </div>
        </div>
      </ModalStyle>
    </div>
  );
};

export default Modal;
