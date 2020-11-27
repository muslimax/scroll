
class Scroll {
    constructor(obj) {
        if (typeof obj.el == "string") {
            this.el = document.querySelector(obj.el);
        } else if (obj.el instanceof HTMLElement) { //  проверяет наличие класса в предках
            this.el = obj.el
        }
        this.el.style.position = "fixed"
        // this.el.style.top = this.top + "px"
        this.unit = obj.unit
        window.addEventListener("scroll", () => { this.scroll() })
        window.addEventListener("resize", () => { this.scroll() })
        this.scroll()
    }
    scroll() {
        // window.pageYOffset - хранит расстояниее от верхнего края страницы
        this.menuTop = this.scrollNumber()
        // console.log(window.pageYOffset);
        if (this.menuTop - window.pageYOffset > 0) {
            this.el.style.top = this.menuTop - window.pageYOffset + "px"
        } else {
            this.el.style.top = 0;
        }

    }
    scrollNumber() {
        if (this.unit == "px") {
            return this.top >= 0 ? this.top : 0;
        } else if (this.unit == "%" || this.unit === underfined) {
            return this.calc(window.innerHeight, this.top) - this.el.clientHeight
        }
    }
    calc(height, top) {
        return height / 100 * top
    }

}
const myScroll = new Scroll({
    el: ".header__nav",
    top: 50,
    unit: "px",

})
// console.log(myScroll);

class Offset {
    constructor(object) {
        if (typeof object.headerEl == "string") {
            this.headerEl = document.querySelector(object.headerEl);
        } else if (object.headerEl instanceof HTMLElement) {
            this.headerEl = object.headerEl
        }
        this.headerEl.addEventListener("mouseover", () => { this.margin()    
       })
    }
    margin() {
        this.parent = this.headerEl.closest(".header")
        this.height = this.parent.clientHeight - this.headerEl.clientHeight;
        this.width = this.parent.clientWidth - this.headerEl.clientWidth;
        this.headerEl.style.marginTop = Math.floor(Math.random() * this.height) + "px";
        this.headerEl.style.marginLeft = Math.floor(Math.random() * this.width) + "px";
        // console.log(this.height);
        // console.log(this.width);
    }
}
const offsetHeader = new Offset({
    headerEl: ".header__content"
})

