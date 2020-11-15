import * as THREE from 'three'

var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(100000 / (window.innerWidth * 2.5), window.innerWidth / window.innerHeight, 0.1, 1000)
const canvas = document.querySelector('#threejs')
var renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(self.innerWidth, self.innerHeight, false)

var geometry = new THREE.SphereGeometry(3, 12, 12, 0, Math.PI * 2, 0, Math.PI * 2)
var wireframe = new THREE.WireframeGeometry(geometry)
var line = new THREE.LineSegments(wireframe, new THREE.LineBasicMaterial({ color: 0xe1f1ff }))
line.material.depthTest = true
line.material.opacity = 0.5
line.material.transparent = true
scene.add(line)

camera.position.z = 15
var render = function () {
  requestAnimationFrame(render)

  line.rotation.y += 0.001
  line.rotation.x -= 0.0001

  renderer.render(scene, camera)
}

window.addEventListener('resize', onWindowResize, false)

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.fov = 100000 / (window.innerWidth * 2.5)
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
render()


