
function Canvas(width, height) {
    this.element = document.getElementById('canvas')
    this.element.width  = width
    this.element.height = height
}
Canvas.prototype = {
    clear() {
        this.ctx.clearRect(-1, -1, this.width+1, this.height+1)
    },
}
