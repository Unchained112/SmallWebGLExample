var renderer = new Renderer(document.getElementById('webgl-canvas'))
renderer.setClearColor(100, 149, 237)
var gl = renderer.getContext()

var objects = []

Mesh.load(gl, './js/assets/sphere.obj', './js/assets/diffuse.png')
    .then(function (mesh) {
      objects.push(mesh)
    })

ShaderProgram.load(gl, './js/shaders/basic.vert', './js/shaders/basic.frag')
             .then(function (shader) {
               renderer.setShader(shader)
             })

var camera = new Camera()
camera.setOrthographic(16, 10, 10)
var light = new Light()

loop()

function loop () {
  renderer.render(camera, light, objects)
  camera.position = camera.position.rotateY(Math.PI / 120)
  requestAnimationFrame(loop)
}