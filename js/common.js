window.onload = function(){
  // MODAL
  document.body.style.overflowY = "unset";
  const modalButton = document.querySelectorAll("[data-view='modal']");
  modalButton.forEach(function(elem){
    elem.addEventListener("click", function(){
      const modalID = this.dataset.modal;
      document.querySelector(modalID).classList.add("active");
      scrollForbid(modalID);
      console.log(1);
    });
  });

  const closeButton = document.querySelectorAll(".modal-close--fx");
  closeButton.forEach(function(elem){
    elem.addEventListener("click", function(){
      modalClose(elem);
    });
  });
}

function modalClose(close){
  const modal = close.closest(".modal__wrap");
  modal.classList.remove("active");
}

function scrollForbid(id){
  if(document.querySelector(id).classList.contains("active")){
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "unset";
  }
}

// CLASS TOGGLE
// CLASS TOGGLE (VAR)
const clickElem = document.querySelector(".class-add--fx li");
// CLASS TOGGLE (FUNC)
const addClassList = document.querySelectorAll(".class-add--fx li");
addClassList.forEach(function(addClassElem, idx) {
  addClassElem.addEventListener("click", function(){
    if(addClassElem.classList.contains("active")) {
      addClassElem.classList.remove("active");
    } else {
      addClassElem.classList.add("active");
    }
    // ONLY CLASS (IF)
    // 이미 설정되어 있으면 걔 빼고 나한테 클래스 주라 
    const activeClassList = document.querySelectorAll(".class-add--fx li");
    activeClassList.forEach(function(activeClassElem, idx) {
      if(activeClassElem.classList.contains("active") && activeClassElem !== addClassElem) {
        activeClassElem.classList.remove("active");
      }
    });
  });
});

// SELECT
const selectList = document.querySelectorAll(".select");
selectList.forEach(function(select){
  select.addEventListener("click", function(){ // 누름
    if(select.classList.contains("active")) { // 그럼 켜져야지 근데
      select.classList.remove("active"); // 이미 켜져 있으면 끄고
    } else if(select.classList.contains("active") == false) { // 꺼져 있으면
      select.classList.add("active"); // 켜라
      // 근데 눌렀을 때 다른 셀렉트가 이미 켜져있으면 그거 꺼야지 켜기 전에
      const activeSelectList = document.querySelectorAll(".select");
      // 셀렉트 중에 이미 활성화 된 게 있으면(방금 누른 건 아니어야 함)
      activeSelectList.forEach(function(activeSelect){
        if(activeSelect.classList.contains("active") && activeSelect !== select){
          // 그거 먼저 꺼야지
          activeSelect.classList.remove("active");
        }
      });
    }
  });
  
  // 셀렉트박스 값 넣기
  const optionList = select.querySelectorAll(".select__item");
  optionList.forEach(function(option){
    let optionValue = option.dataset.value;
    let selectID = option.closest(".select").dataset.id;
    let valueSection = select.querySelector(".select__value");
    option.addEventListener("click", function(){ // 옵션 누름
      // console.log(selectID);
      const seletedOptionList = select.querySelectorAll(".select__item");
      valueSection.innerText = option.innerText; // 값 공간에 선택된 텍스트 넣기
      // formSubmitHandler(select, optionValue);
      seletedOptionList.forEach(function(seletedOption){ // 다른 옵션이
        // 이미 선택되어 있으면
        if(seletedOption.classList.contains("selected") && seletedOption !== option){
          seletedOption.classList.remove("selected"); // 그거 해제해
        } else {
          return;
        }
      });
      option.classList.add("selected"); // 삭제했으니까 선택함
    });
  });
    
});

// function formSubmitHandler(elem, select) {
//   elem.querySelector("input").value = select;
//   elem.closest("form").submit();
// }

// 셀렉트박스 이외의 곳을 선택하면 셀렉트박스가 닫힘
document.addEventListener("click", function(e){
  const target = e.target;
  if(target.closest(".select") <= 0) {
    const activeSelectList = document.querySelectorAll(".select");
    activeSelectList.forEach(function(activeSelect){
      activeSelect.classList.remove("active");
    });
  } 
});

// CURSOR 설정 (현재 OFF)
// const mouseElement = document.createElement("div");
// const mouseCursor = document.querySelector(".mouse__cursor");

// document.body.append(mouseElement);
// mouseElement.classList.add("mouse__cursor");

// document.addEventListener("mousemove", (e) => { 
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;
//   mouseElement.style.left = mouseX + "px";
//   mouseElement.style.top = mouseY + "px";
// });

// HEADER INDICATOR
document.addEventListener("scroll", function () {
  let winSct = window.scrollY;
  console.log(winSct);
  const header = document.querySelector(".header");
  if (winSct >= 1) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

