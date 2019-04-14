
function app() {

    const canvas = new Canvas(600, 600)

    const add = (a, b) => {
        return a + b
    }

    const subtract = (a, b) => {
        return a - b
    }

    const multiply = (a, b) => {
        return a * b
    }

    const divide = (a, b) => {
        return a / b
    }

    const modulo = (a, b) => {
        return a % b
    }

}

window.onload = () => app()
