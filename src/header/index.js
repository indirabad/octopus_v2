let bufferPosX = 0;
const $title = $(".header-animate .h1")[0];
export const initHeaderAnimation = () => {
  $(".header-animate").on("mousemove", function (event) {
    const w1 = this.offsetWidth;
    const w2 = $title.scrollWidth;
    let shift = 0;
    if (w2 > w1) {
      const max = (w2 - w1) / 2;
      const rate = (w2 - w1) / w1;
      shift = max - rate * event.pageX;
    } else {
      const max = w2 / 10;
      const rate = (max * 2) / w1;
      shift = max - rate * event.pageX;
    }

    if (Math.abs(event.pageX - bufferPosX) > 30) {
      bufferPosX = event.pageX;
      $($title).velocity(
        {
          translateX: shift,
        },
        { duration: 30 }
      );
    }
  });
};

export const initTitleBrush = () => {
  $(".header-animate").on("mousemove", function (event) {
    if (event.pageX > this.offsetWidth / 2) {
      $(this).removeClass("selected-left");
      $(this).addClass("selected-right");
    } else {
      $(this).removeClass("selected-right");
      $(this).addClass("selected-left");
    }
  });
};
