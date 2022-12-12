var renderer = new Renderer(document.getElementById('webgl-canvas'))
renderer.setClearColor(0, 0, 0)
var gl = renderer.getContext()

var objects = []

Mesh.load(gl, './js/assets/viking_room.obj', './js/assets/viking_room.png')
    .then(function (mesh) {
      // adjust object position
      mesh.position = mesh.position.rotateY(-Math.PI / 2)
      mesh.position = mesh.position.rotateX(-Math.PI / 2)

      objects.push(mesh)
    })

ShaderProgram.load(gl, './js/shaders/basic.vert', './js/shaders/basic.frag')
             .then(function (shader) {
               renderer.setShader(shader)
             })

var camera = new Camera()
// camera.setOrthographic(8, 5, 5)
camera.setPerspective(90, 0.625, 0.5, 100)// 10:16 aspect ratio

document.addEventListener('keydown', moveCamera)
camera.position = camera.position.translate(0, 0.24, 2)


function moveCamera(e) {
  movement(e, camera)
}

var light = new Light()

loop()

function loop () {
  renderer.render(camera, light, objects)
  //camera.position = camera.position.rotateY(Math.PI / 240)
  requestAnimationFrame(loop)
}