import React, { Fragment } from "react";

// import components

const AddFilesBtn = ({ hideAddFilesBtn, showTranscriptionSettings }) => {
  return (
    <Fragment>
      {hideAddFilesBtn && (
        <div>
          <h1>I am component two</h1>
          <button onClick={showTranscriptionSettings}>Transcript</button>
        </div>
      )}
    </Fragment>
  );
};

export default AddFilesBtn;
