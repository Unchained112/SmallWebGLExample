function movement(e, camera){
    // rotate camera
    if(e.key == 'ArrowUp') camera.position = camera.position.rotateX(0.05)
    if(e.key == 'ArrowDown') camera.position = camera.position.rotateX(-0.05)
    if(e.key == 'ArrowLeft') camera.position = camera.position.rotateY(0.05)
    if(e.key == 'ArrowRight') camera.position = camera.position.rotateY(-0.05)

    // move camera
    var yaw = camera.position.fields[6] // To be fixed later
    var speed = 0.1
    var forwardDri = {x: Math.sin(yaw) * speed, y: 0, z: Math.cos(yaw) * speed}
    var rightDir = {x: forwardDri.z * speed, y: 0, z: -forwardDri.x * speed}
    if(e.key == 'w') camera.position = camera.position.translate(-forwardDri.x, -forwardDri.y, -forwardDri.z)
    if(e.key == 's') camera.position = camera.position.translate(forwardDri.x, forwardDri.y, forwardDri.z)
    if(e.key == 'a') camera.position = camera.position.translate(-rightDir.x, -rightDir.y, -rightDir.z)
    if(e.key == 'd') camera.position = camera.position.translate(rightDir.x, rightDir.y, rightDir.z)
    if(e.key == 'q') camera.position = camera.position.translate(0, speed, 0)
    if(e.key == 'e') camera.position = camera.position.translate(0, -speed, 0)
}