import React from "react";
import "_/styles/Titlebar.scss";
import { remote } from "electron";

const win = remote.getCurrentWindow();

const Titlebar: React.FC = () => {
  const close = () => win.close();

  const minimize = () => win.minimize();

  return (
    <div className="titlebar">
      <div className="right-sec">
        <div className="minimize-btn" onClick={minimize}>
          <svg viewBox="0 0 18 4" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 1.63636C0 0.732625 0.732625 0 1.63636 0H16.3636C17.2674 0 18 0.732625 18 1.63636C18 2.5401 17.2674 3.27273 16.3636 3.27273H1.63636C0.732625 3.27273 0 2.5401 0 1.63636Z"
            />
          </svg>
        </div>
        <div className="close-btn" onClick={close}>
          <svg viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.4201 0.420548L3.66057 0.628185L8.99857 5.96779L14.3353 0.634031C15.1727 -0.203338 16.5303 -0.203338 17.3677 0.634031C18.1289 1.39528 18.1981 2.5865 17.5753 3.42592L17.3677 3.66641L12.0319 9.00114L17.3721 14.3426C18.2094 15.1801 18.2093 16.5377 17.3718 17.375C16.6105 18.1361 15.4193 18.2052 14.5799 17.5823L14.3394 17.3747L9.00143 12.0316L3.66756 17.3665C2.83019 18.2039 1.47254 18.2039 0.635174 17.3665C-0.126071 16.6053 -0.195275 15.4141 0.427562 14.5746L0.635174 14.3342L5.96808 8.99828L0.62787 3.66025C-0.209412 2.82279 -0.209272 1.46515 0.628184 0.627869C1.38951 -0.133296 2.58074 -0.202377 3.4201 0.420548Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Titlebar;
