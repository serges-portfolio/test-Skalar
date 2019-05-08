var shopList = document.querySelector(".footer__item-name");
var disableList = document.querySelector(".footer__multiple-item");

shopList.onclick = function () {
    disableList.classList.toggle("-move");

};