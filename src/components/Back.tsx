import React from "react";
import { Link } from "react-router-dom";
import "_/styles/Back.scss";

const Back = () => {
  return (
    <div className="back-btn">
      <Link to="/">
        <svg viewBox="0 0 49 49" xmlns="http://www.w3.org/2000/svg">
          <path d="M42.6289 24.1189C42.6289 24.9597 42.0133 25.6545 41.2146 25.7644L40.9925 25.7796L12.2269 25.7787L22.6194 36.2813C23.2598 36.9284 23.2621 37.9799 22.6244 38.6298C22.0447 39.2206 21.1357 39.2762 20.4941 38.7952L20.3102 38.6348L7.11024 25.2966L7.07789 25.2616C7.04437 25.2258 7.01242 25.1884 6.98213 25.1496L7.11024 25.2966C7.04665 25.2323 6.98935 25.1641 6.93834 25.0926C6.90751 25.0478 6.87759 25.0012 6.84998 24.953C6.78762 24.8459 6.7393 24.7338 6.70366 24.6186C6.69165 24.5779 6.68048 24.5364 6.67089 24.4943C6.6631 24.4622 6.65669 24.4295 6.65125 24.3967C6.64581 24.3612 6.64107 24.3256 6.63745 24.2897C6.63336 24.2537 6.63084 24.2169 6.62954 24.18C6.62927 24.1596 6.62891 24.1393 6.62891 24.1189L6.62939 24.0638C6.63075 24.0229 6.63358 23.982 6.63789 23.9413L6.62891 24.1189C6.62891 24.0241 6.63674 23.9311 6.65178 23.8406C6.6585 23.7994 6.66702 23.758 6.6771 23.7169C6.68519 23.6843 6.69407 23.6522 6.70387 23.6206C6.71544 23.583 6.72866 23.5451 6.74327 23.5076C6.75844 23.469 6.77485 23.4312 6.79258 23.3941C6.80601 23.3658 6.82104 23.3366 6.83699 23.3077C6.86707 23.2536 6.89891 23.2029 6.93329 23.1541C6.9387 23.1464 6.94476 23.138 6.95091 23.1296C7.00548 23.0555 7.06205 22.9901 7.12328 22.9296L20.3101 9.60267C20.9505 8.9555 21.9866 8.95768 22.6243 9.60754C23.2041 10.1983 23.255 11.121 22.7783 11.7701L22.6195 11.956L12.2289 22.4567L40.9925 22.4583C41.8963 22.4583 42.6289 23.2018 42.6289 24.1189Z" />
        </svg>
      </Link>
    </div>
  );
};

export default Back;