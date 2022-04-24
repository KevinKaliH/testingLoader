let flagAnimation = true;

window.onload = async function () {
  while (flagAnimation) {
    await startAnimation();
  }
};

async function startAnimation() {
  const itemList = document.getElementsByClassName("image-item");
  const imgMain = document.getElementsByClassName("logo-img")[0];
  const imgContainer = document.getElementsByClassName("list-group")[0];

  for (const item of itemList) {
    console.log("interesante");
    item.classList.add('fadeIn');
    await animateItem(item);
    removeEvent(item);
  }

  console.log(imgContainer)
  imgContainer.style.opacity = 0;
  imgMain.classList.add('fadeIn');
  await animateItem(imgMain);
  removeEvent(imgMain);
  imgMain.classList.add('fadeOut');
  await animateItem(imgMain);
  removeEvent(imgMain);

  flagAnimation = false;
}

function clearAnimations(itemElement) {
}

function animateItem(itemElement) {
  return new Promise((res, rej) => {
    itemElement.addEventListener("animationend", function () {
      console.log("end ok");
      res();
    });
  });
}

function removeEvent(itemElement) {
    itemElement.removeEventListener("animationend", function () {
        console.log("ok revemed");
    });
}
