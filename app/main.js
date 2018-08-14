import MarsController from '../components/Mars-Controller.js'

class App {
    constructor() {
        this.controllers = {
            marsCont: new MarsController
        }
    }
}

const app = new App()
window.app = app