import { Pane } from 'tweakpane'


type params = {
  perspective: number;
  scale: number;
  translateX: number;
  translateY: number;
  skewX: number;
  skewY: number;
  rotate: number;
  rotateX: number;
  rotateY: number;
}

const PARAMS: params & { color: string } = {
  perspective: 500,
  scale: 1,
  translateX: 0,
  translateY: 0,
  skewX: 0,
  skewY: 0,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  color: '#ff0055',
}

window.addEventListener('DOMContentLoaded', () => {
  const $app = document.getElementById('app')
  if (!$app) throw new Error('#app not found')

  const pane = new Pane({
    title: 'Positioning',
    expanded: true,
  })
  

  const pScale = pane.addInput(PARAMS, 'scale', { min: 0.1, max: 1.5, step: .1 })
  const pTranslateX = pane.addInput(PARAMS, 'translateX', { min: -1000, max: 1000, step: 10 })
  const pTranslateY = pane.addInput(PARAMS, 'translateY', { min: -700, max: 700, step: 10 })
  const pRotate = pane.addInput(PARAMS, 'rotate', { min: -.02, max: .02, step: .001 })
  pane.addSeparator()
  const pSkewX = pane.addInput(PARAMS, 'skewX', { min: -10, max: 10, step: .5 })
  const pSkewY = pane.addInput(PARAMS, 'skewY', { min: -10, max: 10, step: .5 })
  pane.addSeparator()
  const pPerspective = pane.addInput(PARAMS, 'perspective', { min: 80, max: 1024, step: 1, label: 'depth' })
  const pRotateX = pane.addInput(PARAMS, 'rotateX', { min: -.02, max: .02, step: .001 })
  const pRotateY = pane.addInput(PARAMS, 'rotateY', { min: -.02, max: .02, step: .001 })


  pPerspective.on('change', function (ev) {
    transform({...PARAMS, perspective: ev.value})
  })
  pScale.on('change', function (ev) {
    transform({...PARAMS, scale: ev.value})
  })
  pTranslateX.on('change', function (ev) {
    transform({...PARAMS, translateX: ev.value})
  })
  pTranslateY.on('change', function (ev) {
    transform({...PARAMS, translateY: ev.value})
  })
  pSkewX.on('change', function (ev) {
    transform({...PARAMS, skewY: ev.value})
  })
  pSkewY.on('change', function (ev) {
    transform({...PARAMS, skewY: ev.value})
  })
  pRotate.on('change', function (ev) {
    transform({...PARAMS, rotate: ev.value})
  })
  pRotateX.on('change', function (ev) {
    transform({...PARAMS, rotateX: ev.value})
  })
  pRotateY.on('change', function (ev) {
    transform({...PARAMS, rotateY: ev.value})
  })


  pane.addSeparator()
  const pColor = pane.addInput(PARAMS, 'color', { picker: 'inline',  })
  pColor.on('change', function (ev) {
    $app.style.borderColor = ev.value
  })

  const transform = ({
    perspective,
    scale,
    translateX,
    translateY,
    skewX,
    skewY,
    rotate,
    rotateX,
    rotateY,
  }: params) => {
    $app.style.transform = `
      perspective(${perspective}px)
      scale(${scale})
      translateX(${translateX}px)
      translateY(${translateY}px)
      skewX(${skewX}deg)
      skewY(${skewY}deg)
      rotate(${rotate}turn)
      rotateX(${rotateX}turn)
      rotateY(${rotateY}turn)
    `
  }

})
