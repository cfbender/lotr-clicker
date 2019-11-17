import React from "react";

const Character = ({ id, name, file, click }) => {
  return (
    <>
      <img
        className="char"
        id={`char-${id}`}
        src={
          process.env.BACKEND_URL ? `${process.env.BACKEND_URL}${file}` : file
        }
        alt={name}
        onClick={click}
      />
      <style jsx>{`
        .char {
          border-radius: 5px;
          max-width: 150px;
          height: auto;
          margin: 5px;
          -webkit-box-shadow: 1px 1px 10px -5px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 1px 1px 10px -5px rgba(0, 0, 0, 0.75);
          box-shadow: 1px 1px 10px -5px rgba(0, 0, 0, 0.75);
        }
      `}</style>
    </>
  );
};

export default Character;
