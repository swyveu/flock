
function Agent(position) {
    this.pos =  position
    this.vel = Vector.prototype.fromAngle(Math.random() * 2 * Math.PI)

}
Agent.prototype = {
    SPEED: 10,

    move(timeStep) {
        const stepSize = timeStep * this.SPEED
        this.pos = this.pos.add(this.vel.multiply(stepSize))
    },

    update(timeStep) {
        this.move(timeStep)
    },

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.pos.x, this.pos.y, 10, 0, 2*Math.PI)
        ctx.closePath()
        ctx.stroke()
    },

    interact() {

    },

    react() {

    }

}
