#pragma strict
var leapRight : GameObject;

var rotationSpeed : float = 500;	

function Update () {
  var step = rotationSpeed * Time.deltaTime;
  
  var currentRotation = this.transform.rotation;
  var leapRotation = leapRight.transform.rotation;
  
  var clampedRotation : Vector3;
  
  if (leapRotation.eulerAngles.z > 90 && leapRotation.eulerAngles.z < 270) {
    if (leapRotation.eulerAngles.z <= 180){
      clampedRotation = new Vector3(
        leapRotation.eulerAngles.x,
        leapRotation.eulerAngles.y,
        90
      );
    } else {
      clampedRotation = new Vector3(
        leapRotation.eulerAngles.x,
        leapRotation.eulerAngles.y,
        270
      );
    }
  }  else {
    clampedRotation = new Vector3(
      leapRotation.eulerAngles.x,
      leapRotation.eulerAngles.y,
      leapRotation.eulerAngles.z
    );
  }
  /*
  if (currentRotation.eulerAngles.x < 45 && leapRotation.eulerAngles.x >= 315) {
    clampedRotation.x = 0;
  } else if (currentRotation.eulerAngles.x >= 315 && leapRotation.eulerAngles.x < 45) {
    clampedRotation.x = 360;
  }
  if (currentRotation.eulerAngles.y < 45 && leapRotation.eulerAngles.y >= 315) {
    clampedRotation.y = 0;
  } else if (currentRotation.eulerAngles.y >= 315 && leapRotation.eulerAngles.y < 45) {
    clampedRotation.y = 360;
  }
  if (currentRotation.eulerAngles.z < 45 && leapRotation.eulerAngles.z >= 315) {
    clampedRotation.z = 0;
  } else if (currentRotation.eulerAngles.z >= 315 && leapRotation.eulerAngles.z < 45) {
    clampedRotation.z = 360;
  }
  */

  this.transform.rotation = Quaternion.RotateTowards(currentRotation, Quaternion.Euler(clampedRotation), step);
}