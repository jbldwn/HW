//class that contains the logic for the game
class Game {
  //class properties
  foundCircles = 0;
  totalCircles = 0;
  searchColor = "#427848";
  normalColor = "#c27a29";
  foundBar = new FoundBar();

  gameZone = document.getElementById("gameZone");

  constructor() {
    //make the circles
    for (var i = 0; i < 75; i++) {
      //create circles
      let newCircle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

      //circle class
      newCircle.classList.add("gameCircle");
      newCircle.setAttribute("cx", Math.random() * 600);
      newCircle.setAttribute("cy", Math.random() * 600);

      //randomly choose what reveal color the circle is
      if (Math.random() < 0.3) {
        //set to be the "looking for" color
        newCircle.dataset.hiddenColor = this.searchColor;
        this.totalCircles++;
      } else {
        newCircle.dataset.hiddenColor = this.normalColor;
      }

      //mouse events
      newCircle.addEventListener("mouseover", (event) => {
        event.target.style.fill = event.target.dataset.hiddenColor;
      });

      newCircle.addEventListener("mouseout", (event) => {
        event.target.style.fill = "#000";
      });

      newCircle.addEventListener("click", (event) => {
        //if the user clicked on a circle with the "looking for" color
        if (event.target.dataset.hiddenColor == this.searchColor) {
          event.target.remove();

          //store how many have been found
          this.foundCircles++;

          //update the found UI
          this.foundBar.setPercent(this.foundCircles / this.totalCircles);
        }
      });

      //add the circle to the screen
      this.gameZone.appendChild(newCircle);
    }
  }
}

class FoundBar {
  element = document.getElementById("foundBar");
  maxSize = 200;
  percent = 0;

  setPercent(percent) {
    this.percent = percent;
    this.element.setAttribute("width", this.percent * this.maxSize);
    this.element.setAttribute("fill", "#787a78");
  }
}

let g = new Game();
