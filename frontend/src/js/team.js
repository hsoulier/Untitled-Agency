import * as PIXI from "pixi.js"
// import { GlitchFilter } from "pixi-filters"
let app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true,
  transparent: false,
  resolution: 1,
})

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view)

//load an image and run the `setup` function when it's done
PIXI.loader.add("ali.png").load(setup)

//This `setup` function will run when the image has loaded
function setup() {
  //Create the cat sprite
  let cat = new PIXI.Sprite(PIXI.loader.resources["ali.png"].texture)

  //Add the cat to the stage
  app.stage.addChild(cat)
}