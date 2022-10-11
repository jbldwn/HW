/*
 *  Using TweenMax / Greensock:
 *  1) A build-in for all the elements (go from nothing on the screen, to everything visible)
 *  2) A mouse over / highlight for each of the gallery elements below
 *  3) A exit animation for when one gallery element is clicked
 */

// go from nothing on the screen, to everything visible
let contents = document.getElementsByClassName("content");

for (let i = 0; i < contents.length; i++) {
  TweenLite.from(contents[i], {
    duration: 0.6,
    x: "100",
    alpha: 0,
    delay: i * 0.1,
  });
}

//bring in Gallery
let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
  TweenLite.from(boxes[i], {
    duration: 0.6,
    x: "100",
    alpha: 0,
    delay: i * 0.1,
  });
  //add event listener
  addBoxListener();
}

//event listeners FUNCTIONS for Gallery items
function addBoxListener() {
  $(".box").on("mouseover", (e) => {
    boxID = e.target.id;
    TweenLite.to(`#${boxID}`, 0.7, {
      backgroundColor: "#a86032",
      width: "320px",
    });
  });
  $(".box").on("mouseout", (e) => {
    boxID = e.target.id;
    TweenLite.to(`#${boxID}`, 0.7, {
      backgroundColor: "#800080",
      width: "300px",
    });
  });
  // lastClick;
  $(".box").on("click", (e) => {
    boxID = e.target.id;
    TweenMax.fromTo(
      `#${boxID}`,
      0.1,
      {
        x: "-3",
      },
      {
        x: "3",
        repeat: 5,
        yoyo: true,
        ease: Quad.easeInOut,
      }
    );
    // let lastClick = boxID;
  });
}

function resetAnimation(el) {
  el.style.animation = "none";
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null;
}
