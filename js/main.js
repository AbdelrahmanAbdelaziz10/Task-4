let arrow = document.querySelector(".arrow");

window.onscroll=function(){
    if(this.scrollY >=350  ){
        arrow.classList.add("show");
    } else {
        arrow.classList.remove("show");
    }
    // this.scrollY >= 300 ? arrow.classList.add("show") : arrow.classList.remove("show");
};

arrow.onclick = function(){
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });
}