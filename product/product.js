var isOpen = false;
var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");   // .small 클래스 가져오기

for (i = 0; i < smallPics.length; i++) {
  smallPics[i].addEventListener("click", function () {
    newPic = this.src;
    bigPic.setAttribute("src", newPic);
  });
}


var view = document.querySelector("#view");
view.addEventListener("click", function () {
  if (isOpen == false) {
    document.querySelector("#detail").style.display = "block";  // 상세정보 화면에 표시
    view.innerHTML = "상세 설명 닫기";
    isOpen = true;  // 표시 상태로 지정
  }
  else {
    document.querySelector("#detail").style.display = "none";
    view.innerHTML = "상세 설명 보기";
    isOpen = false;
  }
});

