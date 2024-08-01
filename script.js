const clock = (e) => {
  const now = new Date();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Setup Canvas
  ctx.save();
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250);
  ctx.rotate(-Math.PI / 2);

  // Set default styles
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#f4f4f4";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";

  // Draw clock face/boarder
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.strokeStyle = "#000000";
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  // Draw hour lines
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Draw minute lines
  ctx.save();
  ctx.lineWidth = 4;
  ctx.strokeStyle = "800000";
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  const hr = now.getHours() % 12;
  const mins = now.getMinutes();
  const secs = now.getSeconds();

  // Draw hour hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * mins + (Math.PI / 2160) * secs
  );

  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // Draw min hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * mins + (Math.PI / 1800) * secs);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // Draw sec hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * secs);
  ctx.strokeStyle = "#D92421";
  ctx.fillStyle = "#D92421";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore(); // Restore default state

  requestAnimationFrame(clock);
};

clock();
