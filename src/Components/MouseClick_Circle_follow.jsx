import React, { useRef } from "react";

// ---------------> using the UseRef <---------------------------

const MouseClick_Circle_follow = () => {
  // 1. Create a reference to the circle div
  const circleRef = useRef(null);

  const handleMouseMove = (e) => {
    // 2. Directly manipulate the DOM element
    // This happens WITHOUT re-rendering the whole component
    if (circleRef.current) {
      const x = e.clientX - 15;
      const y = e.clientY - 15;
      circleRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ width: "100vw", height: "100vh" }}
    >
      {/* 3. Attach the ref to the element */}
      <div
        ref={circleRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "30px",
          height: "30px",
          backgroundColor: "deepskyblue",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          // We set an initial position so it doesn't flicker at (0,0)
          willChange: "transform",
        }}
      />
    </div>
  );
};

// Important Technical Concepts Used:
// willChange: "transform": This is a CSS hint to the browser. It tells the Graphics Card (GPU) to prepare for movement, 
// which makes the animation even smoother.

// Direct DOM Access: By using circleRef.current.style, we bypass React's "Reconciliation" process. It’s like taking a 
// shortcut instead of going through the main office.

// if (circleRef.current): Always check if the ref exists before using it. If the component unmounts quickly, the mouse move
//  event might fire one last time when the div is already gone, causing an error.

// 💡 Is this "Safe"?
// Usually, direct DOM manipulation is discouraged in React. However, for high-frequency animations (like custom cursors, 
// parallax effects, or game loops), useRef is the industry standard because it prevents your application from slowing down.

export default MouseClick_Circle_follow;

// ==================================================================================
// --------------------> using with the useState <----------------------------
// ==================================================================================

// import React, { useState } from "react";

// const MouseClick_Circle_follow = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     // We use clientX/Y to get the mouse position relative to the browser window
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   return (
//     <div
//       onMouseMove={handleMouseMove}
//       style={{ width: "100vw", height: "100vh" }}
//     >
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "30px",
//           height: "30px",
//           backgroundColor: "deepskyblue",
//           borderRadius: "50%",
//           pointerEvents: "none",
//           transform: `translate(${position.x - 15}px, ${position.y - 15}px)`,
//           zIndex: 9999,
//         }}
//       />
//     </div>
//   );
// };

// export default MouseClick_Circle_follow;

// ==================================================================================
// ------------------------ as with js code and with UseEffect  -----------------------------------------------------
// ==================================================================================

// import React, { useState, useEffect } from "react";

// const MouseClick_Circle_follow = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     // 1. Define the handler function
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     // 2. Add the listener to the window
//     window.addEventListener("mousemove", handleMouseMove);

//     // 3. CLEANUP: This is crucial!
//     // It removes the listener when the component is destroyed.
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "30px",
//         height: "30px",
//         backgroundColor: "deepskyblue",
//         borderRadius: "50%",
//         pointerEvents: "none", // Important: so you can still click things "under" the circle
//         transform: `translate(${position.x - 15}px, ${position.y - 15}px)`,
//         // transition: "transform 0.1s ease-out", // Adds a smooth "lagging" effect
//         zIndex: 9999,
//       }}
//     />
//   );
// };

// export default MouseClick_Circle_follow;
