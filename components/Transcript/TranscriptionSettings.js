import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";

// import components

const TranscriptionSettings = ({ hideTranscriptionSettings, Close }) => {
  return (
    <Fragment>
      {hideTranscriptionSettings && (
        <div className="transcription-container">
          <div className="fade-in-fwd">
            <div className="text-right" onClick={Close}>
              <img
                src="../../static/assets/images/close.svg"
                alt="add-btn"
                className="img-fluid"
                className="close-btn"
              />
            </div>
            <div className="transcription-title">
              <p>Transcription settings</p>
            </div>
            <div className="language-select">
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>File Language</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className="toggle-content">
              <label className="switch mr-3">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <p>Speakers Identification Beta</p>
            </div>
            <div className="toggle-content">
              <label className="switch mr-3">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <p>My Vocabulary</p>
            </div>
            <div className="toggle-content">
              <label className="switch mr-3">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <p>Export Timecode</p>
            </div>
            <button className="confirm-btn">
              <img
                src="../../static/assets/images/confirm.svg"
                alt="add-btn"
                className="img-fluid pr-3"
              />
              Confirm
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default TranscriptionSettings;
