import {getProject, types as t} from "@theatre/core"
import state from "./state.json"
//import studio from "@theatre/studio"
//studio.initialize()

const proj = getProject("foobarloremipsum", {state})
const sheet = proj.sheet("Bouncing box")

const nudgableNumber = t.number(1, {nudgeMultiplier: 0.01})

function makeBouncingBox(i: number) {
  const component = document.getElementById("component")
  //const boxContainer = document.getElementById("boxContainer")
  const boxDiv = document.getElementById("box")
  const dustDiv = document.getElementById("dust")
  const textDiv = document.getElementById("text")
  var fl=false
  var kb=false
  window.addEventListener("keyup",(evt)=>{
    if (evt.key.match('5'))
      kb=true
  })
  window.addEventListener("keydown",(evt)=>{ 
    if (evt.key.match('c')||evt.key.match('C'))
     if (component!=null)
        component.style.backgroundColor = "#B2FE99"
    if(evt.key.match('4'))
      if (kb==true){
        if (component!=null)
          component.style.backgroundColor = "#C3BBEC"
        kb=false
        }
  })
  component?.addEventListener("click", () => {
    fl=true
    component.style.backgroundColor="#000"
    sheet.sequence.play({iterationCount: 3}).then(()=>{
      fl=false
      if (textDiv!=null) 
        textDiv.innerText=textObj1.value.content})
      if (textDiv!=null) 
        textDiv.innerText=textObj3.value.content
  })

  const boxObj = sheet.object("Box", {
    y: 0,
    stretch: nudgableNumber,
  })
  boxObj.onValuesChange(({y, stretch}) => {
    if (boxDiv!=null)
     boxDiv.style.transform = `translateY(${-y}px) scale(${
        1 / stretch
      }, ${stretch})`
  })

  const dustObj = sheet.object("Dust", {
    opacity: nudgableNumber,
    scaleX: nudgableNumber,
  })
  dustObj.onValuesChange(({opacity, scaleX}) => {
    if (dustDiv!=null){
      dustDiv.style.opacity = String(opacity)
      dustDiv.style.transform = `scaleX(${scaleX})`
    }
  })

  const textObj1 = sheet.object("Text1", {content: "foo", position: {x1: 10, y1: 10}})
  const textObj2 = sheet.object("Text2", {content: "bar", position: {x2: 10, y2: 10}})
  const textObj3 = sheet.object("Text3", {content: "baz", position: {x3: 10, y3: 10}})

  textObj1.onValuesChange((values) => {
      if(textDiv!=null){
        textDiv.style.left = values.position.x1 + 'px'
        textDiv.style.top = values.position.y1 + 'px'
      }
  })
  textObj2.onValuesChange((values) => {
    if(textDiv!=null){
      textDiv.style.left = values.position.x2 + 'px'
      textDiv.style.top = values.position.y2 + 'px'
    }
  })
textObj3.onValuesChange((values) => {
  if(textDiv!=null){
    textDiv.style.left = values.position.x3 + 'px'
    textDiv.style.top = values.position.y3 + 'px'
  }
})
  if (textDiv!=null)
    textDiv.innerText=textObj1.value.content      
  component?.addEventListener("mouseout", () => {
    if (fl==false){
      if (textDiv!=null)
        textDiv.innerText=textObj1.value.content
      component.style.background="#6200ee"
    }
  })
  component?.addEventListener("mouseover", () => {
    if (fl==false){
      component.style.background="#facc15"
      if (textDiv!=null)
        textDiv.innerText=textObj2.value.content
    }
  })
}

makeBouncingBox(1)

