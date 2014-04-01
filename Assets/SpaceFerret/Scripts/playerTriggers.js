#pragma strict

function OnTriggerLeave(trigger : Collider) {
  Debug.Log("trigger " + trigger);
  Debug.Log("this " + this);
}