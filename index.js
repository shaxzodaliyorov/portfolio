const menubtn = document.querySelector(".menu");
const link = document.querySelector(".link");
const links = document.querySelectorAll("#link");
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");

menubtn.addEventListener("click", () => {
  link.classList.toggle("links");

  item1.classList.toggle("item11");
  item2.classList.toggle("item12");
  item3.classList.toggle("item13");

  links.forEach((item) => {
    item.addEventListener("click", () => {
      link.classList.remove("links");
      item1.classList.remove("item11");
      item2.classList.remove("item12");
      item3.classList.remove("item13");
    });
  });
});
