const Cursor = () => {
  const cursorTag = document.querySelector("div.cursor");
  const balls = cursorTag?.querySelectorAll("div");

  let aimX = 0;
  let aimY = 0;

  let currentX = 0;
  let currentY = 0;

  let speed = 0.1;

  const animate = function () {
    currentX += (aimX - currentX) * speed;
    currentY += (aimY - currentY) * speed;

    if (balls) {
      // balls.style.left = currentX + "px";
      // balls.style.top = currentY + "px";
    }

    requestAnimationFrame(animate);
  };

  animate();

  document.addEventListener("mousemove", function (event) {
    aimX = event.pageX;
    aimY = event.pageY;
  });

  return (
    <div className="cursor">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Cursor;
