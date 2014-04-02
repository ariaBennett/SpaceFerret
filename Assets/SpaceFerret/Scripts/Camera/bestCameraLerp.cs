using UnityEngine;
using System.Collections;

public class bestCameraLerp : MonoBehaviour {

	public GameObject ship;
	public Transform marker;

	public float moveSpeed = 1;
	public float rotateSpeed = 1;

	public float offsetX = 0;
	public float offsetY = 0;	
	public float offsetZ = 0;

	
	
	void Update () {
	  Vector3 newPosition = new Vector3(
			marker.position.x,
			marker.position.y,
			marker.position.z
			);
            transform.position = Vector3.Lerp(transform.position, newPosition, Time.deltaTime * moveSpeed);
            transform.rotation = Quaternion.Lerp(transform.rotation, ship.transform.rotation, Time.deltaTime * rotateSpeed);
	}
}
