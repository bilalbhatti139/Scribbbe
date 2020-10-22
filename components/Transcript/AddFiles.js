import React, { Fragment } from "react";

// import components

const AddFilesBtn = ({ hideAddFilesBtn, showTranscriptionSettings }) => {
  return (
    <Fragment>
      {hideAddFilesBtn && (
        <div className="add-file-container scale-in-top">
          <button className="upload-document">
            Add files <span>Supported formats: mp3, flac, wav</span>
          </button>
          <div className="files-list">
            <div className="file">
              <p>AntoineFaitDeLaTrompette.mp3</p>
              <img
                src="../../static/assets/images/delete.svg"
                className="img-fluid"
              />
            </div>
            <div className="file">
              <p>AntoineFaitDeLaTrompette.mp3</p>
              <img
                src="../../static/assets/images/delete.svg"
                className="img-fluid"
              />
            </div>
            <div className="file">
              <p>AntoineFaitDeLaTrompette.mp3</p>
              <img
                src="../../static/assets/images/delete.svg"
                className="img-fluid"
              />
            </div>
          </div>
          <button
            className="transcript-btn"
            onClick={showTranscriptionSettings}
          >
            Transcript
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default AddFilesBtn;
