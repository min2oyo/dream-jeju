let slides = document.querySelectorAll("#slides > img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let current = 0;

// showSlides();
showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

// function showSlides() {
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   current++;                    // 다음 이미지로 이동
//   if (current > slides.length)  // 마지막 이미지라면
//     current = 1;                // 첫 번째로 이동
//   slides[current - 1].style.display = "block";  // 현재 위치 이미지 표시
//   setTimeout(showSlides, 2000);                 // 2초마다 showSlides 함수 반복 실행 
// }

function showSlides(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function prevSlide() {
  if (current > 0) current -= 1;
  else
    current = slides.length - 1;
  showSlides(current);
}

function nextSlide() {
  if (current < slides.length - 1) current += 1;
  else
    current = 0;
  showSlides(current);
}