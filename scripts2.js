window.onload = async function () {
  const animator = new AnimatorLoader();
  animator.getContent();
  animator.assignEventListener();
  animator.startAnimation();
};

class AnimatorLoader {
  constructor() {
    this.itemList = document.getElementsByClassName("image-item");
    this.imgMain = document.getElementsByClassName("logo-img")[0];
    this.imgContainer = document.getElementsByClassName("list-group")[0];
    this.flagAnimation = true;
  }

  assignEventListener() {
    for (let index = 0; index < this.itemList.length; index++) {
      this.itemList[index].addEventListener("animationend", () => {
        if (this.itemList[index + 1])
          this.itemList[index + 1].classList.add("fadeIn");
        else {
          this.imgContainer.classList.add("fadeOut");
        }
      });
      if (!this.itemList[index + 1]) break;
    }

    this.imgContainer.addEventListener("animationend", (event) => {
      if (event.animationName === "fadeOut")
        this.imgMain.classList.add("fadeIn");
    });

    this.imgMain.addEventListener("animationend", (event) => {
      if (event.animationName === "fadeIn") {
        for (const item of this.itemList) {
          item.classList.remove("fadeIn");
        }

        this.imgMain.classList.add("fadeOut");
      }

      if (event.animationName === "fadeOut") {
        this.imgMain.classList.remove("fadeIn");
        this.imgMain.classList.remove("fadeOut");
        this.imgContainer.classList.remove("fadeOut");
        this.itemList[0].classList.add("fadeIn");

        //   this.imgMain.classList.remove('fadeOut');
      }
    });
  }

  startAnimation() {
    //the first element trigger the other collegues.
    this.itemList[0].classList.add("fadeIn");
  }

  getContent() {
    console.log(this.itemList);
    console.log(this.imgMain);
    console.log(this.imgContainer);
  }
}
