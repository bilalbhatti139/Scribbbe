import React, { Fragment } from "react";

// import components

const AddFilesBtn = ({ showTranscript, hideAddFileBtn }) => {
  return (
    <Fragment>
      {hideAddFileBtn && (
        <div className="add-files-btn-container">
          <button onClick={showTranscript}>
            <img
              src="../../static/assets/images/add.svg"
              alt="add-btn"
              className="img-fluid pr-3"
            />
            Add files <span>Supported formats: mp3, flac, wav</span>
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default AddFilesBtn;
