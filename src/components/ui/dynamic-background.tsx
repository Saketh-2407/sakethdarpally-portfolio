import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

export function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const nodeCount = Math.min(Math.floor((width * height) / 18000), 70);
    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          baseAlpha: Math.random() * 0.5 + 0.2,
        });
      }
    };

    initNodes();

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === "dark" || theme === "system";
      const nodeColor = isDark ? "255, 140, 0" : "59, 130, 246"; // Orange in dark, blue in light
      const lineMaxDist = 130;
      const mouseMaxDist = 180;

      // Draw faint background aurora circles
      const t = frame * 0.005;
      const grad1X = width * 0.2 + Math.sin(t) * 100;
      const grad1Y = height * 0.3 + Math.cos(t * 0.8) * 100;
      const grad2X = width * 0.8 + Math.cos(t * 0.7) * 100;
      const grad2Y = height * 0.7 + Math.sin(t * 0.9) * 100;

      const aurG1 = ctx.createRadialGradient(grad1X, grad1Y, 10, grad1X, grad1Y, 400);
      aurG1.addColorStop(0, isDark ? "rgba(255, 115, 0, 0.04)" : "rgba(59, 130, 246, 0.03)");
      aurG1.addColorStop(1, "transparent");

      ctx.fillStyle = aurG1;
      ctx.fillRect(0, 0, width, height);

      const aurG2 = ctx.createRadialGradient(grad2X, grad2Y, 10, grad2X, grad2Y, 450);
      aurG2.addColorStop(0, isDark ? "rgba(6, 182, 212, 0.03)" : "rgba(147, 51, 234, 0.03)");
      aurG2.addColorStop(1, "transparent");

      ctx.fillStyle = aurG2;
      ctx.fillRect(0, 0, width, height);

      // Update & render nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        // Draw Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeColor}, ${node.baseAlpha})`;
        ctx.fill();

        // Connect Node to Mouse
        const mdx = mouseX - node.x;
        const mdy = mouseY - node.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < mouseMaxDist) {
          const alpha = (1 - mdist / mouseMaxDist) * 0.3;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(${nodeColor}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Connect to neighboring nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < lineMaxDist) {
            const alpha = (1 - dist / lineMaxDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(${nodeColor}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-20 w-full h-full"
    />
  );
}
