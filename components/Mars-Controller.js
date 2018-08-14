import MarsService from "./Mars-Service.js"
import Mars from "../models/MarsPic.js"

const marsService = new MarsService
let app = document.getElementById('app')

function draw(data) {
    console.log(data)
    app.innerHTML = `
    <div id="error"></div>
    <div>
    <button onclick="app.controllers.marsCont.getMarsPic()">
    Get Moar Mars!
    </button>
    </div>
    <div id="mars-pic"></div>
    `
}

function drawMars(photo) {
    let marsElem = document.getElementById('mars-pic')
    let template = ''
    template += `<div><p>
        ${photo.sol}
        <img src="${photo.img_src}">
        ${photo.earth_date}
        </div></p>
        `
    marsElem.innerHTML = template
}

// function drawError(error)
// console.log(error)
// document.getElementById('error').innerHTML = error.message

export default class MarsController {
    constructor() {
        draw()
    }
    getMarsPic() {
        marsService.getMars(drawMars)
    }

    //getNext
    //let photo = marsService.getNext()
    //drawMars(photo)
}