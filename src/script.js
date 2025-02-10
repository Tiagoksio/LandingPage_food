class DomController {
    constructor() {
        this.navMenuMobile = document.querySelector(".nav-menu");
        this.header = document.querySelector("header");
        this.mobile_btn = document.querySelector(".btn-mobile");
        this.mobile_btn.addEventListener("click", () => this.openCloseMobileMenu())
        this.boxShadowHeader = window.addEventListener("scroll", () => {
            this.header.style.boxShadow = (window.scrollY > 0 ? "rgba(0, 0, 0, 0.1) 5px 1px 5px" : "none");  
        })
    }
    openCloseMobileMenu() {
        if (this.navMenuMobile.style.display !== "none") {
            this.navMenuMobile.style.display = "none"
        } else {
            this.navMenuMobile.style.display = "flex"
        }
    }
    
}
const APP = new DomController
