#pragma strict

var ship : GameObject;

function Update () {
  if (Input.GetKeyDown('f')) {
    var euler = ship.transform.rotation.eulerAngles;
    var newEuler : Vector3;
    if (euler.y <= 180){
      newEuler = new Vector3(
        euler.x,
        euler.y + 180,
        euler.z
      );
    } else {
      newEuler = new Vector3(
        euler.x,
        euler.y - 180,
        euler.z
      );   
    }
    
    ship.transform.rotation = Quaternion.Euler(newEuler);
  }
}