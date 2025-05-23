import { useEffect, useRef } from "react";

const MatrixRain = ({
  characters = "01",
  fontSize = 16,
  fadeSpeed = 0.1,
  alpha = 0.2,
  cycleSpeed = 0.002, // how fast colors shift
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1);

    const charArray = characters.split("");
    let hue = 140; // start from greenish

    const draw = () => {
      // Darken the previous frame (fade effect)
      ctx.fillStyle = `rgba(0, 0, 0, ${fadeSpeed})`;
      ctx.fillRect(0, 0, width, height);

      // Cycle hue for color shift effect
      hue += cycleSpeed * 360;
      if (hue > 360) hue = 0;
      const currentColor = `hsla(${hue}, 100%, 60%, ${alpha})`;

      ctx.fillStyle = currentColor;
      ctx.font = `${fontSize}px 'IBM Plex Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      requestAnimationFrame(draw);
    };

    draw();

    const resizeHandler = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [characters, fontSize, fadeSpeed, alpha, cycleSpeed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default MatrixRain;
