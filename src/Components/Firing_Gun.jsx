import { useRef, useState } from "react";

function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    let now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    func(...args);
  };
}

const Firing_Gun = () => {
  const [normalShots, setNormalShots] = useState(0);
  const [debounceShots, setDebounceShots] = useState(0);
  const [throttleShots, setThrottleShots] = useState(0);

  const fireNormalShots = () => {
    setNormalShots((prev) => prev + 1);
  };

  const fireDebounceShots = () => {
    setDebounceShots((prev) => prev + 1);
  };

  const fireThrottleShots = () => {
    setThrottleShots((prev) => prev + 1);
  };

  const debounceFire = useRef(debounce(fireDebounceShots, 1000)).current;
  const throttleFire = useRef(throttle(fireThrottleShots, 1000)).current;
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <p>Normal Shots </p>
          <button onClick={fireNormalShots}>fire Normal Shots</button>
          <p>Count - {normalShots}</p>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <p>debounce Shots </p>
          <button onClick={debounceFire}>fire debounce Shots</button>
          <p>Count - {debounceShots}</p>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <p>throttle Shots </p>
          <button onClick={throttleFire}>fire throttle Shots</button>
          <p>Count - {throttleShots}</p>
        </div>
      </div>
    </>
  );
};

export default Firing_Gun;
