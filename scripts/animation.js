
function Animation() {

    let callback
    let running = true
    let then = performance.now()
    let maxFps = 60
    let maxStep = 0.1

    /* ------------------------------------------ */

    const run = () => {
        if (!running) return

        let now = performance.now()

        let step  = (now - then) * 0.001

        if      (step < 0)       step += 1
        else if (step > maxStep) step = maxStep

        update(step)
        then = now

        setTimeout(() => requestAnimationFrame(run), 1000/maxFps)
    }

    const update = (timeStep) => {
        callback(timeStep)
    }

    /* ------------------------------------------ */

    this.start = () => {
        requestAnimationFrame(run)
    }

    this.toggle = () => {
        running = !running
        if (running) this.start()
    }

    this.setCallback = (func) => {
        callback = func
    }
}
