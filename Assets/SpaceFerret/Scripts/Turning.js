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

  this.transform.rotation = Quaternion.RotateTowards(currentRotation, Quaternion.Euler(clampedRotation), step);
}