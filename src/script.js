class DomController {
    constructor() {
        this.navMenuMobile = document.querySelector(".nav-menu");
        this.mobile_btn = document.querySelector(".btn-mobile");
        this.mobile_btn.addEventListener("click", () => this.openCloseMobileMenu())
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