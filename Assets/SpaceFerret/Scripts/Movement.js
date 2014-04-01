#pragma strict

var baseSpeed : float = 1000;
var boostSpeed : float = 1500;
var breakSpeed : float = 500;
var speed : float;



function Start () {

}

function Update () {
  speed = baseSpeed;
  this.transform.Translate(Vector3.forward * speed * Time.deltaTime);
  //this.rigidbody.AddForce(this.transform.forward * speed);

}