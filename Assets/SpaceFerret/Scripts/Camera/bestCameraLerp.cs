using UnityEngine;
using System.Collections;

public class bestCameraLerp : MonoBehaviour {

	public GameObject ship;
	public Transform marker;

	public float moveSpeed = 2.4f;
	public float rotateSpeed = 3f;

	public float offsetX = 0;
	public float offsetY = 14;	
	public float offsetZ = -20;

	public bool followPositionX = true;
	public bool followPositionY = true;
	public bool followPositionZ = true;

	public bool followRotationX = true;
	public bool followRotationY = true;
	public bool followRotationZ = true;

	
	
	void Update () {
		// Assign marker position if followPosition is true else keep current position.
		float newPositionX;
		float newPositionY;
		float newPositionZ;
		if (followPositionX) {
		  newPositionX = marker.position.x;
		} else {
		  newPositionX = transform.position.x;
		} 
		if (followPositionY) {
		  newPositionY = marker.position.y;
		} else {
		  newPositionY = transform.position.y;
		} 
		if (followPositionZ) {
		  newPositionZ = marker.position.z;
		} else {
		  newPositionZ = transform.position.z;
		} 
		Vector3 newPosition = new Vector3(
			newPositionX,
			newPositionY,
			newPositionZ
		);

		float newRotationX;
		float newRotationY;
		float newRotationZ;
		if (followRotationX) {
			newRotationX = marker.rotation.eulerAngles.x;
		} else {
			newRotationX = transform.rotation.eulerAngles.x;
		} 
		if (followRotationY) {
			newRotationY = marker.rotation.eulerAngles.y;
		} else {
			newRotationY = transform.rotation.eulerAngles.y;
		} 
		if (followRotationZ) {
			newRotationZ = marker.rotation.eulerAngles.z;
		} else {
			newRotationZ = transform.rotation.eulerAngles.z;
		} 
		Quaternion newRotation = Quaternion.Euler( 
		  new Vector3(
			newRotationX,
			newRotationY,
			newRotationZ
		  )
		);


            transform.position = Vector3.Lerp(transform.position, newPosition, Time.deltaTime * moveSpeed);
            transform.rotation = Quaternion.Lerp(transform.rotation, newRotation, Time.deltaTime * rotateSpeed);
	}
}
