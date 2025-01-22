let box = document.getElementById("card");
let icon = document.querySelector("i");
box.addEventListener(`dblclick`, function () {
  icon.style.transform = 'translate(-50%, -50%) scale(1)'
  icon.style.opacity = 1;
  setTimeout(function () {
    icon.style.transform = 'translate(-50%, -50%) scale(0)';
    icon.style.opacity = 0;
  }, 1000);
});

