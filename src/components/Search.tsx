import React, { useEffect } from "react";
import { useStudent } from "_/hooks/useStudent";
import "_/styles/Search.scss";

const Search: React.FC = () => {
  const { search } = useStudent();

  useEffect(() => {
    search("");
  }, []);

  return (
    <div className="search">
      <div>
        <svg viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5087 0.505722C30.1253 0.505722 38.7318 8.92211 38.7318 19.3042C38.7318 24.2038 36.815 28.6656 33.6748 32.0116L39.8507 38.0329C40.4296 38.5976 40.4308 39.5142 39.8534 40.0804C39.3285 40.595 38.5061 40.6428 37.926 40.223L37.7597 40.083L31.5111 33.9892C28.2219 36.5634 24.0492 38.1028 19.5087 38.1028C8.89211 38.1028 0.285645 29.6864 0.285645 19.3042C0.285645 8.92211 8.89211 0.505722 19.5087 0.505722ZM19.5087 3.4012C10.5274 3.4012 3.24652 10.5212 3.24652 19.3042C3.24652 28.0872 10.5274 35.2073 19.5087 35.2073C28.4901 35.2073 35.7709 28.0872 35.7709 19.3042C35.7709 10.5212 28.4901 3.4012 19.5087 3.4012Z" />
        </svg>
        <input
          onChange={(e) => search(e.target.value)}
          type="number"
          placeholder="search student id ..."
        />
      </div>
    </div>
  );
};

export default Search;
