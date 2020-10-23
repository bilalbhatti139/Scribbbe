import React, { Fragment } from "react";

// import components

const AddFilesBtn = ({ hideAddFilesBtn, showTranscriptionSettings }) => {
  return (
    <Fragment>
      {hideAddFilesBtn && (
        <div className="add-file-container">
          <div className="fade-in-fwd">
            <button className="upload-document">
              <img
                src="../../static/assets/images/addition-dark.svg"
                alt="add-btn"
                className="img-fluid pr-3"
              />
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
              </div>{" "}
              <div className="file">
                <p>AntoineFaitDeLaTrompette.mp3</p>
                <img
                  src="../../static/assets/images/delete.svg"
                  className="img-fluid"
                />
              </div>{" "}
              <div className="file">
                <p>AntoineFaitDeLaTrompette.mp3</p>
                <img
                  src="../../static/assets/images/delete.svg"
                  className="img-fluid"
                />
              </div>{" "}
              <div className="file">
                <p>AntoineFaitDeLaTrompette.mp3</p>
                <img
                  src="../../static/assets/images/delete.svg"
                  className="img-fluid"
                />
              </div>{" "}
              <div className="file">
                <p>AntoineFaitDeLaTrompette.mp3</p>
                <img
                  src="../../static/assets/images/delete.svg"
                  className="img-fluid"
                />
              </div>{" "}
              <div className="file">
                <p>AntoineFaitDeLaTrompette.mp3</p>
                <img
                  src="../../static/assets/images/delete.svg"
                  className="img-fluid"
                />
              </div>{" "}
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
        </div>
      )}
    </Fragment>
  );
};

export default AddFilesBtn;
