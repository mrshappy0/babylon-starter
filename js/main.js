var canvas;
var engine;
var scene;
document.addEventListener("DOMContentLoaded", startGame);

function startGame() {
  canvas = document.getElementById("renderCanvas");
//   canvas.style.width = "3500px";
//   canvas.style.height = "2100px";
  engine = new BABYLON.Engine(canvas, true);
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  scene = createScene();
  engine.runRenderLoop(function() {
    scene.render();
  });
}

var createScene = function() {
  var scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(1, 0, 1);
  // Code Here
  var sphere = BABYLON.Mesh.CreateSphere("mySphere", 32, 2, scene);
  var ground = BABYLON.Mesh.CreateGround("myGround", 20, 20, 50, scene);
  var camera = new BABYLON.FreeCamera(
    "myCamera",
    new BABYLON.Vector3(0, 1, -10),
    scene
  );
  camera.attachControl(canvas)
  var light = new BABYLON.PointLight(
    "myPointLight",
    new BABYLON.Vector3(0, 10, 0),
    scene
  );
  light.intensity = 0.5;
  light.diffuse = new BABYLON.Color3(1,0,0);
  return scene;
};

window.addEventListener("resize", function() {
  engine.resize();
});
