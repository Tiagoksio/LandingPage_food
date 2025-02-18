class DomController {
    constructor() {
        this.topBarMenuDisplay = document.querySelector(".nav-menu");
        this.header = document.querySelector("header");
        this.mobile_btn = document.querySelector(".btn-mobile");
        this.boxShadowHeader = window.addEventListener("scroll", () => {
            this.header.style.boxShadow = (window.scrollY > 0 ? "rgba(0, 0, 0, 0.1) 5px 1px 5px" : "none");  
        })
        this.mobile_btn.addEventListener("click", () => this.openCloseMobileMenu())
        this.displayTopBar = window.addEventListener("resize", () => {
            this.topBarMenuDisplay.style.display = window.innerWidth > 1170 ? "flex" : "none"
        })
    }
    openCloseMobileMenu() {
        this.topBarMenuDisplay.style.display = this.topBarMenuDisplay.style.display === "flex" ? "none" : "flex"
        this.animationBurger()
    }

    animationBurger() {
        this.mobile_btn.classList.toggle("active")
    }
    
}
const APP = new DomController
