#pragma strict

function OnCollisionEnter(collision : Collision) {
  Debug.Log(collision);
  //this.transform.Translate(new Vector3(-collision.transform.position.x, -collision.transform.position.y, -collision.transform.position.z));
}