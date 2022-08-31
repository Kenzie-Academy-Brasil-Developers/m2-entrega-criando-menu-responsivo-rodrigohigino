function modal() {
  const btn = document.querySelector(".btn-modal");
  const modal = document.querySelector(".modal-mobile");
  const img = document.querySelector(".btn-img");


  btn.addEventListener("click", (evento) => {
    if (btn.id == "entrou") {
      console.log("funfou");
      modal.style.transform = "translateY(-150%)";
      img.src = "../../src/img//17654.png";
      btn.removeAttribute("id");
    } else {
      console.log("funfou");
      modal.style.transform = "translateY(0%)";
      img.src = "../../src/img/1659.png";
      btn.setAttribute("id", "entrou");
    }
  });
}

modal();
