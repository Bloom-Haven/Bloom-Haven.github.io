const barrc = document.querySelector('.barrc');
const sidebar = document.querySelector('.sidebar:first-of-type');
const middlebar = document.querySelector('.middlebar');
const middlebarImgs = document.querySelectorAll('.middlebar img');

function adjustSidebarAndImages() {
  if (window.innerWidth < 1240) {
    barrc.insertBefore(sidebar, middlebar.nextSibling);
    for (let i = 0; i < middlebarImgs.length; i++) {
      middlebarImgs[i].style.width = '60%';
    }
  } else {
    barrc.insertBefore(sidebar, barrc.firstChild);
    for (let i = 0; i < middlebarImgs.length; i++) {
      if (navigator.userAgent.indexOf('Firefox') !== -1) {
        middlebarImgs[i].style.width = '75%';
      } else {
        middlebarImgs[i].style.width = '30%';
      }
    }
  }
}

window.addEventListener('resize', adjustSidebarAndImages);
adjustSidebarAndImages();
