import React, { useEffect, useRef, useState } from "react";

const Text = () => {
  const circleRef = useRef(null);

  const handleMouseMove = (e) => {
    if (circleRef.current) {
      const x = e.ClientX - 15;
      const y = e.ClientY - 15;

      circleRef.current.style.transform = `translate( ${x}px , ${y}px)`;
    }
  };

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          ref={circleRef}
          style={{
            width: "30px",
            height: "30px",
            willChange: transform,
          }}
        ></div>
      </div>
    </>
  );
};

export default Text;
