const pennieImgs = document.querySelectorAll('.pennie');

function adjustImageWidthForPennie() {
  Array.from(pennieImgs).forEach(img => {
    if (window.innerWidth < 1240) {
      img.style.width = '60%';
    } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
      img.style.width = '75%';
    } else {
      img.style.width = '35%';
    }
  });
}

adjustImageWidthForPennie();
