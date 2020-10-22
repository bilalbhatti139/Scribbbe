import React, { Fragment, useState } from "react";

// import components
import AddFilesBtn from "./AddFilesBtn";
import AddFiles from "./AddFiles";
import TranscriptionSettings from "./TranscriptionSettings";

const TranscriptContainer = () => {
  const [hideAddFilesBtn, setHideFilesBtn] = useState(false);
  const [hideTranscriptionSettings, setTranscriptionSettings] = useState(false);

  const showTranscript = () => {
    setHideFilesBtn(true);
    setTranscriptionSettings(false);
  };
  const showTranscriptionSettings = () => {
    setTranscriptionSettings(true);
    setHideFilesBtn(false);
  };
  const Close = () => {
    setTranscriptionSettings(false);
    setHideFilesBtn(true);
  };

  return (
    <Fragment>
      <AddFilesBtn showTranscript={showTranscript} />
      <AddFiles
        hideAddFilesBtn={hideAddFilesBtn}
        showTranscriptionSettings={showTranscriptionSettings}
      />
      <TranscriptionSettings
        hideTranscriptionSettings={hideTranscriptionSettings}
        Close={Close}
      />
    </Fragment>
  );
};

export default TranscriptContainer;
