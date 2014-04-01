#pragma strict

function Start () {

}

function Update () {
  var cameraRotation = Camera.main.transform.rotation;
  var currentRotation = this.transform.rotation;
  
  var newEulerRotation = new Vector3(
    cameraRotation.x - 90,
    cameraRotation.y,
    cameraRotation.z
  );
  this.transform.rotation = Quaternion.Euler(newEulerRotation);

}