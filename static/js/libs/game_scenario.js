  var objects_number = 50;
  var scene_width = 14;
  var scene_height = 8;
  var scene_y_max = 4;
  var scene_x_max = 7; 
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.5, 1400);

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  var render_div = renderer.domElement;
  render_div.style.position='absolute'
  // render_div.style.top = '0px';
  render_div.style.left = '0px';
  document.body.appendChild(render_div);

  // Creating a cube. Adding it to scene
  var geometry = new THREE.CubeGeometry(0.5,0.5,0.5);
  var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  var score = 0;
  camera.position.z = 5;

  var objects_creation = function(){
    var objects_array = [];
    for ( var i = 0; i<objects_number-1; i++){
      var cube = new THREE.Mesh(geometry, material);
      cube.position.x = Math.random()*(scene_width + 1) - scene_x_max;
      cube.position.y = Math.random()*(scene_height + 1) - scene_y_max;
      cube.position.z -= i + 5;
      objects_array.push(cube)
      scene.add(objects_array[i]);
    }
    return objects_array;
  }

objects_array = objects_creation();
  var render = function () {
    requestAnimationFrame(render);

    for (var i = 0; i< objects_number-1; i++){
      var array_object = objects_array[i];
      var speed_multiplier = score/200;
      array_object.position.z += 0.08 + 0.04*speed_multiplier;
      array_object.rotation.x += 0.1;
      array_object.rotation.y += 0.1;
      if (array_object.position.z >= (camera.position.z + 1)){
        array_object.position.z = -9;
        array_object.position.x = Math.random()*(scene_width + 1) - scene_x_max;
        array_object.position.y = Math.random()*(scene_height + 1) - scene_y_max;
      }
    }be.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    // cube.position.z+= 0.05;
    renderer.render(scene, camera);
    score += 1;
    document.getElementById("score_info").innerHTML= " Score: " + score.toString();

  };
  render();

  