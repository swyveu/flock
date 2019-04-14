
function Agent(position) {
    this.pos =  position
    this.vel = Vector.prototype.fromAngle(Math.random() * 2 * Math.PI)

}
Agent.prototype = {
    SIZE: 10,
    SPEED: 100,

    update(timeStep) {
        this.move(timeStep)
    },

    move(timeStep) {
        const stepSize = timeStep * this.SPEED
        this.pos = this.pos.add(this.vel.multiply(stepSize))
        this.wrap(this.pos)
    },

    wrap(pos) {

        let canvasWidth = 600
        let canvasHeight = 600

        if      (this.pos.x < -this.SIZE)               this.pos.x += canvasWidth  + 2 * this.SIZE
        else if (this.pos.x > canvasWidth + this.SIZE)  this.pos.x -= canvasWidth  + 2 * this.SIZE

        if      (this.pos.y < -this.SIZE)               this.pos.y += canvasHeight + 2 * this.SIZE
        else if (this.pos.y > canvasHeight + this.SIZE) this.pos.y -= canvasHeight + 2 * this.SIZE
    },

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.pos.x, this.pos.y, this.SIZE, 0, 2*Math.PI)
        ctx.closePath()
        ctx.fillStyle = 'indianred'
        ctx.fill()
        ctx.lineWidth = 2
        ctx.stroke()
    },

    interact() {
    },

    react() {
    }

}
