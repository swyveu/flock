
function app() {

    const canvas = new Canvas(600, 600)
    const anim   = new Animation()
    const agents = []
    const eve    = new Agent(new Vector(canvas.width/2, canvas.height/2))

    const init = () => {
        anim.setCallback(update)
        listen()
        initAgents()
        anim.start()
    }

    const initAgents = () => {
        agents.push(eve)
    }

    const update = (timeStep) => {
        canvas.clear()
        updateAgents(timeStep)
        canvas.draw(agents)
    }

    const updateAgents = (timeStep) => {
        agents.forEach(agent => agent.update(timeStep))
    }

    const listen = () => {
        document.addEventListener('keydown', (e) => {
            switch (e.which) {
                case 32: e.preventDefault(); anim.toggle(); break;  //space
            }
        })
    }

    init()
}

window.onload = () => app()
