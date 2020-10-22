import React, { Fragment } from "react";

// import components

const TranscriptionSettings = ({ hideTranscriptionSettings, Close }) => {
  return (
    <Fragment>
      {hideTranscriptionSettings && (
        <div className="add-file-container slide-in-bottom">
          <div onClick={Close}>x</div>
          <h1>I am component three</h1>
          <button>Confirm</button>
        </div>
      )}
    </Fragment>
  );
};

export default TranscriptionSettings;
