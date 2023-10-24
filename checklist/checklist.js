var itemList = [];

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList() {
  var item = document.querySelector("#item").value;
  if (item != null) {
    itemList.push(item);
    document.querySelector("#item").value = "";  // 입력 받은후 초기화
    document.querySelector("#item").focus();  // 텍스트 필드에 focus 적용
  }
  showList();
}


function showList() {
  var list = "<ul>";  // 목록을 시작하는 ul 태그 저장 리스트 출력되는걸 ul 태그로 감싸주기 위함 인듯 함

  for (var i = 0; i < itemList.length; i++) {
    list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>"; // 각각의 요소를 <li> ~~ </li>로 묶음
  }
  list += "</ul>";  // 전체 목록 감싸기

  document.querySelector("#itemList").innerHTML = list;  // list 내용 표시 ?

  var remove = document.querySelectorAll(".close");
  for (var i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  var id = this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
}