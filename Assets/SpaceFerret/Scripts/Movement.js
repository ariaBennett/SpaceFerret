#pragma strict


var cameraMarker: GameObject;
var cameraMarkerOffsetX: float = 40;
var cameraMarkerOffsetY: float = 0;
var cameraMarkerOffsetZ: float = 40;

var rotationSpeed: float = 500;
var curveBoost: float = 100;
var cameraLookSpeed: float = 50;

var baseSpeed: float = 1000;
var boostSpeed: float = 1500;
var breakSpeed: float = 500;
var speed: float;
var wasSpinning: boolean = false;




function Update() {
    var leftHand: GameObject = GameObject.FindWithTag('RightHand') || null;

    if (leftHand) {
        // Rotate stuff
    var currentRotation = this.transform.rotation;
    
    var leftHandRotation = leftHand.transform.rotation;
    leftHandRotation.SetEulerRotation(-90, -90, 0);
    Debug.Log(leftHand.transform.rotation);

    var clampedRotation: Vector3;

    if (leftHandRotation.eulerAngles.z > 90 && leftHandRotation.eulerAngles.z < 270) {
        if (leftHandRotation.eulerAngles.z <= 180) {
          //if (wasSpinning === false) {
          if (0) {
            wasSpinning = true;
            cameraMarker.transform.position = new Vector3(
                cameraMarkerOffsetX,
                cameraMarkerOffsetY,
                cameraMarkerOffsetZ
            );
          }
            
            // this.transform.rotation = Quaternion.Lerp(this.transform.rotation, Quaternion.Euler(0, this.transform.rotation.y, this.transform.rotation.z), curveBoost * Time.deltaTime);
            clampedRotation = new Vector3(
                leftHandRotation.eulerAngles.x,
                leftHandRotation.eulerAngles.y,
                90
            );
        } 
        else {
            if (leftHandRotation.eulerAngles.z >= 180) {
            if (0) {
             // if (wasSpinning === false) {
                wasSpinning = true;
                cameraMarker.transform.position = new Vector3(-cameraMarkerOffsetX, -cameraMarkerOffsetY, -cameraMarkerOffsetZ);
              }
                
                //Camera.main.transform.RotateAround(this.transform.position, Vector3.left, cameraLookSpeed);
                //  this.transform.rotation = Quaternion.Lerp(this.transform.rotation, Quaternion.Euler(360, this.transform.rotation.y, this.transform.rotation.z), curveBoost * Time.deltaTime);
                clampedRotation = new Vector3(
                    leftHandRotation.eulerAngles.x,
                    leftHandRotation.eulerAngles.y,
                    270
                );
            }
        } 
    }
    else {
        if (wasSpinning == true) {
         cameraMarker.transform.position = new Vector3(0, 0, -10);
        }
       
        clampedRotation = new Vector3(
            leftHandRotation.eulerAngles.x,
            leftHandRotation.eulerAngles.y,
            leftHandRotation.eulerAngles.z
        );
    }
    }

        /*
      clampedRotation = new Vector3(
      leftHandRotation.eulerAngles.x,
      leftHandRotation.eulerAngles.y,
      leftHandRotation.eulerAngles.z
    );
    */

        var step = rotationSpeed * Time.deltaTime;
        this.transform.rotation = Quaternion.RotateTowards(currentRotation, Quaternion.Euler(clampedRotation), step);


        // Speed below

        speed = baseSpeed;
        this.transform.Translate(Vector3.forward * speed * Time.deltaTime);


    }