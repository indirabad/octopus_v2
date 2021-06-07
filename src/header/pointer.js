import { POINTER_COLOR } from "../const";

export const initPointer = () => {
  const points = [];
  const $pointer = $(".header-animate-dot");

  const $canvas = $(".pointer-area");
  $canvas.attr("width", window.innerWidth);
  $canvas.attr("height", window.innerHeight);

  const radius = $pointer.outerWidth() / 2;
  const context = $canvas[0].getContext("2d");
  const gradient = context.createLinearGradient(0, 0, $canvas.outerWidth(), 0);

  gradient.addColorStop(0, POINTER_COLOR);
  gradient.addColorStop(0.1, "#fff");
  gradient.addColorStop(0.2, POINTER_COLOR);
  gradient.addColorStop(0.3, "#fff");
  gradient.addColorStop(0.5, POINTER_COLOR);
  gradient.addColorStop(0.6, POINTER_COLOR);
  gradient.addColorStop(0.7, "#fff");
  gradient.addColorStop(0.8, POINTER_COLOR);
  gradient.addColorStop(0.9, "#fff");
  gradient.addColorStop(1.0, POINTER_COLOR);

  const drawPath = () => {
    context.clearRect(0, 0, $canvas.width(), $canvas.height());
    context.beginPath();
    context.fillStyle = gradient;
    let prevPoint;
    context.lineWidth = radius * 2;
    context.lineJoin = "round";
    context.lineCap = "round";
    context.strokeStyle = gradient;
    for (let i = 0; i < points.length - 1; i++) {
      const point = points[i];

      if (prevPoint) {
        context.moveTo(prevPoint.x, prevPoint.y);
        context.lineTo(point.x, point.y);
      }
      if (i === points.length - 1) {
        context.arc(point.x, point.y, radius, 0, 2 * Math.PI);
      }
      prevPoint = { ...point };
    }
    context.fill();

    context.stroke();

    context.closePath();
  };
  $(".header").on("mousemove", function (event) {
    if (points.length === 25) {
      points.splice(0, 10);
    }
    points.push({
      x: event.pageX,
      y: event.pageY,
    });
    drawPath();
  });
  $(window).on("resize", function () {
    $canvas.attr("width", window.innerWidth);
    $canvas.attr("height", window.innerHeight);
  });
};
