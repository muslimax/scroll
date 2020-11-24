class Scroll {
    constructor(obj) {
        if (typeof obj.el == "string") {
            this.el = document.querySelector(obj.el);
        } else if (obj.el instanceof HTMLElement) { //  проверяет наличие класса в предках
            this.el = obj.el
        }
        this.el.style.position = "fixed"
        this.top = obj.top;
        this.el.style.top = this.top + "px"
        this.unit = obj.unit
        window.addEventListener("scroll", () => { this.scroll() })
    }
    scroll() {
        // window.pageYOffset - хранит расстояниее от верхнего края страницы
        console.log(window.pageYOffset);
        if (this.top - window.pageYOffset > 0) {
            this.el.style.top = this.top - window.pageYOffset + "px"
        } else {
            this.el.style.top = 0;
        }

    }
    scrollNumber() {
        if (this.unit == "px") {
            return this.top >= 0 ? this.top : 0;
        }
    }
}
const myScroll = new Scroll({
    el: ".header__nav",
    top: 200,
    unit: "px"
})
// console.log(myScroll);

class Offset {
    constructor(object) {
        if (typeof object.headerEl == "string") {
           this.headerEl =  document.querySelector(object.headerEl); 
        } else {
            this.headerEl = object.headerEl
        }
        this.headerEl.addEventListener("mouseover", ()=>{
            this.headerEl.style.marginTop = Math.floor(Math.random() * 600) +"px"
            this.headerEl.style.marginLeft = Math.floor(Math.random() * 800) +"px"
           /*  this.headerEl.style.marginRight = Math.floor(Math.random() * 800) +"px"
            this.headerEl.style.marginBottom = Math.floor(Math.random() * 500) +"px" */
        })
    }
}

const offsetHeader = new Offset({
    headerEl: ".header__content"
})

console.log(offsetHeader);