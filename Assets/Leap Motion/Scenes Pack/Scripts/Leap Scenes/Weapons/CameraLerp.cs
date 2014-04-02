using UnityEngine;
using System.Collections;

public class CameraLerp : MonoBehaviour {

    public Transform camPos;
    public Transform camPos1;
	

	
	
	void Update () {


            transform.position = Vector3.Lerp(transform.position, camPos.transform.position, Time.deltaTime);
            transform.rotation = Quaternion.Lerp(transform.rotation, camPos.rotation, Time.deltaTime);
	
	}
}
