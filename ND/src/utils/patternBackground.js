export const initializePatternBackground = () => {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let dots = [];
  const dotSize = 1.5;
  const numDots = 400;
  const repelRadius = 300;
  const floatSpeed = 0.3; 
  const maxClusterSize = 3;
  const connectionDistance = 36;
  const lineWidth = 1;
  let mouseX = null, mouseY = null;
  let lastMouseMoveTime = Date.now();
  let animationFrameId;
  const dotColor = "rgb(0, 109, 49)"; 

  const resizeCanvas = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    generateDots();
  };

  const generateDots = () => {
    dots = [];
    for (let i = 0; i < numDots; i++) {
      let newDot = {
        x: Math.random() * width,
        y: Math.random() * height,
        originalX: Math.random() * width,
        originalY: Math.random() * height,
        vx: (Math.random() - 0.5) * floatSpeed,
        vy: (Math.random() - 0.5) * floatSpeed,
      };
      dots.push(newDot);
    }
  };

  const updateDots = () => {
    let now = Date.now();

    dots.forEach((dot) => {
      if (mouseX !== null && mouseY !== null) {
        let dx = dot.x - mouseX;
        let dy = dot.y - mouseY;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < repelRadius) {
          let angle = Math.atan2(dy, dx);
          let force = (repelRadius - distance) / repelRadius;
          dot.x += Math.cos(angle) * force * 5;
          dot.y += Math.sin(angle) * force * 5;
        }
      }

      
      dot.x += dot.vx;
      dot.y += dot.vy;

      
      if (now - lastMouseMoveTime > -5000) {
        dot.x += (dot.originalX - dot.x) * 0.02;
        dot.y += (dot.originalY - dot.y) * 0.02;
      }

     
      if (dot.x < 0 || dot.x > width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > height) dot.vy *= -1;
    });
  };

  const drawPattern = () => {
    ctx.fillStyle = "black"; 
    ctx.fillRect(0, 0, width, height);

    dots.forEach((dot) => {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.fill();
    });

    let visited = new Set();
    for (let i = 0; i < dots.length; i++) {
      let dotA = dots[i];
      let cluster = [dotA];

      for (let j = i + 1; j < dots.length && cluster.length < maxClusterSize; j++) {
        let dotB = dots[j];
        let distance = Math.hypot(dotA.x - dotB.x, dotA.y - dotB.y);

        if (distance < connectionDistance && !visited.has(j)) {
          cluster.push(dotB);
          visited.add(j);
        }
      }

      for (let k = 0; k < cluster.length; k++) {
        for (let l = k + 1; l < cluster.length; l++) {
          let d1 = cluster[k];
          let d2 = cluster[l];
          let lineDist = Math.hypot(d1.x - d2.x, d1.y - d2.y);

          if (lineDist < connectionDistance - 10) {
            ctx.beginPath();
            ctx.moveTo(d1.x, d1.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.strokeStyle = dotColor;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        }
      }
    }
  };

  const animate = () => {
    updateDots();
    drawPattern();
    animationFrameId = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    lastMouseMoveTime = Date.now(); 
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("mousemove", handleMouseMove);

  animate();

  return () => {
    window.removeEventListener("resize", resizeCanvas);
    window.removeEventListener("mousemove", handleMouseMove);
    cancelAnimationFrame(animationFrameId);
  };
};
