import React, { Fragment, useState } from "react";

// import components
import AddFilesBtn from "./AddFilesBtn";
import AddFiles from "./AddFiles";
import TranscriptionSettings from "./TranscriptionSettings";

const TranscriptContainer = () => {
  const [hideAddFileBtn, setHideFileBtn] = useState(true);
  const [hideAddFiles, setHideFiles] = useState(false);
  const [hideTranscriptionSettings, setTranscriptionSettings] = useState(false);

  const showTranscript = () => {
    setHideFileBtn(false);
    setHideFiles(true);
    setTranscriptionSettings(false);
  };
  const showTranscriptionSettings = () => {
    setTranscriptionSettings(true);
    setHideFiles(false);
  };
  const Close = () => {
    setTranscriptionSettings(false);
    setHideFiles(true);
  };

  return (
    <Fragment>
      <div className="transcript-container">
        <AddFilesBtn
          showTranscript={showTranscript}
          hideAddFileBtn={hideAddFileBtn}
        />
        <AddFiles
          hideAddFilesBtn={hideAddFiles}
          showTranscriptionSettings={showTranscriptionSettings}
        />
        <TranscriptionSettings
          hideTranscriptionSettings={hideTranscriptionSettings}
          Close={Close}
        />
      </div>
    </Fragment>
  );
};

export default TranscriptContainer;
