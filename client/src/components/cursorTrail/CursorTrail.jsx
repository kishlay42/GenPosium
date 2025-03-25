import { useState, useEffect, useRef } from "react";
import styles from "./css/cursorTrail.module.css";

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [circleSize, setCircleSize] = useState(50);
  const targetPosition = useRef({ x: 0, y: 0 });
  const lastScrollPosition = useRef({ x: window.scrollX, y: window.scrollY });

  const handleMouseMove = (event) => {
    targetPosition.current = {
      x: event.clientX + window.scrollX,
      y: event.clientY + window.scrollY,
    };
  };

  const handleMouseDown = () => {
    setCircleSize(0);
  };

  const handleMouseUp = () => {
    setCircleSize(50);
  };

  const handleScroll = () => {
    const scrollDeltaX = window.scrollX - lastScrollPosition.current.x;
    const scrollDeltaY = window.scrollY - lastScrollPosition.current.y;

    setPosition((prevPosition) => ({
      x: prevPosition.x + scrollDeltaX,
      y: prevPosition.y + scrollDeltaY,
    }));

    lastScrollPosition.current = {
      x: window.scrollX,
      y: window.scrollY,
    };
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      setPosition((prevPosition) => {
        const dx = targetPosition.current.x - prevPosition.x;
        const dy = targetPosition.current.y - prevPosition.y;
        return {
          x: prevPosition.x + dx * 0.1, // Adjust the easing factor as needed
          y: prevPosition.y + dy * 0.1,
        };
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.cursorTrail} ${
        circleSize === 0 ? styles.shrink : ""
      }`}
      style={{
        width: `${circleSize}px`,
        height: `${circleSize}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CursorTrail;
