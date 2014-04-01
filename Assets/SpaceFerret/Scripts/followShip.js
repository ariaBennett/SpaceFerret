#pragma strict
var ship : GameObject;

var followPositionX : System.Boolean;
var followPositionY : System.Boolean;
var followPositionZ : System.Boolean;

var offsetPositionX : float;
var offsetPositionY : float;
var offsetPositionZ : float;

var followRotationX : System.Boolean;
var followRotationY : System.Boolean;
var followRotationZ : System.Boolean;

var offsetRotationX : float;
var offsetRotationY : float;
var offsetRotationZ : float;

var multiplierRotationX : float = 1;
var multiplierRotationY : float = 1;
var multiplierRotationZ : float = 1;




function Update () {
  if (followPositionX) {
    this.transform.position.x = ship.transform.position.x + offsetPositionX;
  } if (followPositionY) {
    this.transform.position.y = ship.transform.position.y + offsetPositionY;
  } if (followPositionZ) {
    this.transform.position.z = ship.transform.position.z + offsetPositionZ;
  }
  
  var eulers = this.transform.rotation.eulerAngles;
  if (followRotationX) {
    var x : float = (ship.transform.rotation.eulerAngles.x + offsetRotationX);
    Debug.Log(x.ToString());
    //x = x * multiplierRotationX;
    eulers.x = x;
  } if (followRotationY) {
      var y : float = (ship.transform.rotation.eulerAngles.y + offsetRotationY);
      //y = y * multiplierRotationY;
      eulers.y = y;
  } if (followRotationZ) {
      var z : float = (ship.transform.rotation.eulerAngles.z + offsetRotationZ);
      //z = z * multiplierRotationZ;
      eulers.z = z;
  }
  this.transform.rotation = Quaternion.Euler(eulers);
  






  //this.transform.RotateAround(ship.transform.position, Vector3.right, swingDelay * (this.transform.rotation.eulerAngles.y - ship.transform.rotation.eulerAngles.y) * Time.deltaTime);
  

}