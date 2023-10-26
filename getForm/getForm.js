var selectMenu = document.testForm.major;
function displaySelect() {
  var selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
  alert("[" + selectedText + "]를 선택했습니다.");
}