import React, { Fragment } from "react";

// import components

const AddFilesBtn = ({ showTranscript }) => {
  return (
    <Fragment>
      <button onClick={showTranscript}>Add files</button>
    </Fragment>
  );
};

export default AddFilesBtn;
