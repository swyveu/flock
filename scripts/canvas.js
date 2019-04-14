
function Canvas(width, height) {
    this.element = document.getElementById('canvas')
    this.element.width  = this.width = width
    this.element.height = this.height = height


    this.ctx = this.element.getContext('2d')
    // this.ctx.translate(0.5, 0.5)
    this.setup()

}
Canvas.prototype = {

    setup() {
        const dpr = window.devicePixelRatio || 1
        const rect = this.element.getBoundingClientRect()
        this.width  = rect.width * dpr
        this.height = rect.height * dpr

        this.ctx.scale(dpr, dpr)


    },

    clear() {
        this.ctx.clearRect(-1, -1, this.width+1, this.height+1)
    },

    draw(array) {
        array.forEach(item => item.draw(this.ctx))
    }
}
