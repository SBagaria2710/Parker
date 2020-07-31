import React from "react";
import PropTypes from "prop-types";
import "../styles/components/popup.css";

export default function Popup(props) {
  return (
    <section className="modal-bg">
      <article
        className="modal"
        style={{ width: props.modalWidth, height: props.modalHeight }}
      >
        {props.children}
      </article>
    </section>
  );
}

Popup.propTypes = {
  modalWidth: PropTypes.number,
  modalHeight: PropTypes.number,
  children: PropTypes.any.isRequired,
};
