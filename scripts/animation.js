
function Animation() {

    let callback
    let running = false
    let then = performance.now()
    let delta = 0
    let maxFps = 60

    /* ------------------------------------------ */

    const run = () => {
        requestAnimationFrame(tick)
    }

    const tick = now => {
        if (!running) return

        update()

        delta = (now - then) * 0.001
        const fps = 1 / delta
        // console.log('fps', fps)

        then = now

        setTimeout(() => {
            requestAnimationFrame(tick)
        }, 1000/maxFps)
    }

    const update = () => {
        callback(getTimeStep())
    }

    const getTimeStep = () => {
        return delta
    }

    /* ------------------------------------------ */

    this.toggle = () => {
        if (!running) run()
        running = !running
    }

    this.setCallback = (callbackFunction) => {
        callback = callbackFunction
    }

}
