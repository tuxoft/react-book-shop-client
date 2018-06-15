import React from "react";
import * as styles from "./styles";
import {FaCheck, FaTimesCircle, FaInfoCircle} from 'react-icons/lib/fa/';

const Flash = ({flash, actions}) => {
  const {
    type,
    autoHide,
    isVisible,
    message,
    callback,
  } = flash;

  let icon;
  switch (type) {
    case "success" :
      icon = <FaCheck/>;
      break;
    case "danger" :
      icon = <FaTimesCircle/>;
      break;
    case "info" :
      icon = <FaInfoCircle/>;
      break;
    case "confirm" :
      icon = <FaInfoCircle/>;
      break;
    default :
      icon = <FaInfoCircle/>;
  }

  return (
    <styles.Flash
      type={type}
      autoHide={autoHide}
      isVisible={isVisible}>
      <styles.Message type={type}>{icon}{" "}{message}</styles.Message>

      {!autoHide && type !== "confirm" && (
        <styles.Controls>
          <styles.Control small onClick={actions.hideFlash}>
            &times;
          </styles.Control>
        </styles.Controls>
      )}
      {!autoHide && type === "confirm" && (
        <styles.Controls>
          <styles.Control small onClick={() => {
            actions.hideFlash();
            callback();
          }}>
            Да
          </styles.Control>
          <styles.Control small onClick={actions.hideFlash}>
            Нет
          </styles.Control>
        </styles.Controls>
      )}

    </styles.Flash>
  );
};

export default Flash;
