import Mars from "../models/MarsPic.js"

let photos = []
let index = 0

export default class MarsService {
    //next
    //increase index
    //return photo[index]

    //previous
    //decrease index
    //return photo[index]

    getMars(draw, drawError) {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=nDGRiKZEf0tuu7b7zBmjtajk69TeUuDd49MD3uht')
            .then(res => res.json())
            .then(data => {
                photos = data.photos
                draw(photos[index])
            })
            .catch(drawError)
    }

    // getMars(draw, drawError) {
    //     console.log("hello from getMars Service")
    //     fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=nDGRiKZEf0tuu7b7zBmjtajk69TeUuDd49MD3uht')
    //         .then(res => res.json())
    //         .then(res => {
    //             let myMars = res.results.map(marsP => {
    //                 return new Mars(marsP)
    //             })
    //             draw(myMars)
    //         })
    //         .catch(drawError)
    // }
}