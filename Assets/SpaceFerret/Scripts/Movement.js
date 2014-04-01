#pragma strict

var baseSpeed : float = 1000;
var boostSpeed : float = 1500;
var breakSpeed : float = 500;
var speed : float;

var ship : GameObject;

function Start () {

}

function Update () {
  speed = baseSpeed;
  this.transform.Translate(ship.transform.forward * speed * Time.deltaTime);

}