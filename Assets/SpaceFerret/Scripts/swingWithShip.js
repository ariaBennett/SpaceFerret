#pragma strict

var ship : GameObject;

var swingWithX : System.Boolean;
var swingWithY : System.Boolean;
var swingWithZ : System.Boolean;

var swingSpeedX : float = 100;
var swingSpeedY : float = 100;
var swingSpeedZ : float = 100;



function Update () {
  this.transform.RotateAround(ship.transform.position, Vector3.right, swingSpeedX);
    
}

/*
  var marker : Transform = new Transform();
  marker.position = ship.transform.position;
  marker.rotation = ship.transform.rotation;
  
  marker.position.x += markerOffsetX;
  marker.position.y += markerOffsetY;
  marker.position.z += markerOffsetZ;
  
  
  
  
  var markerOffsetX : float;
var markerOffsetY : float;
var markerOffsetZ : float;

function rotateTowards(source : Transform, target : Transform, speed : float, x : System.Boolean, y : System.Boolean, z : System.Boolean){

  var direction = (target.transform.position - source.transform.position).normalized;
  if (!x){
    direction.x = 0;
  } if (!y){
    direction.y = 0;
  } if (!z){
    direction.z = 0;
  }
  var looking = Quaternion.LookRotation(direction);
  
  source.rotation = Quaternion.Slerp(source.rotation, looking, Time.deltaTime * speed);
}

function moveTowards(source : Transform, target : Transform, speed : float, x : System.Boolean, y : System.Boolean, z : System.Boolean) {
  var newPosition = new Vector3();
  newPosition.x = target.position.x;
  newPosition.y = target.position.y;
  newPosition.z = target.position.z;
  
  if (!x){
    newPosition.x = source.position.x;
  } if (!y){
    newPosition.y = source.position.y;
  } if (!z){
    newPosition.z = source.position.z;
  }
  source.position = Vector3.MoveTowards(source.position, newPosition, speed * Time.deltaTime);
}
  */
  
  //swingDelayX = 
  
  //moveTowards(this.transform, marker, swingDelayX, true, true, true);
  
