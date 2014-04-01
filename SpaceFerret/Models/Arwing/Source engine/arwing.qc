$scale 0.5
$root "body"
//$origin 0 0 0 90
$origin 0 1.4 0 0 //slight adjustment because of the scaling!
$modelname "arwing/arwing.mdl"
$body "body" "arwing_ref.smd"
$cdmaterials "models/arwing/" 

$opaque

$attachment "vehicle_driver_eyes" "eyes" 0.0 0.0 0.0
$attachment "vehicle_driver_eyes3rd" "eyes3rd" -40.0 10.0 0.0
$attachment "blaster_l" "blaster_l" 0.0 0.0 0.0
$attachment "blaster_r" "blaster_r" 0.0 0.0 0.0
$attachment "blaster_center" "blaster_center" 0.0 0.0 0.0
$attachment "thruster" "thruster" 0.0 0.0 0.0
$attachment "retro_l" "retro_l" 0.0 0.0 0.0
$attachment "retro_r" "retro_r" 0.0 0.0 0.0

//$surfaceprop "Metal" 

$sequence "idle" "arwing_idle" loop fps 30

$collisionmodel "arwing_phys"
{
	$maxconvexpieces 35
    $concave
	$mass "12000" //12 tons
	$inertia "0.9"
	$damping "0.8"
	$drag "0.3"
}

$keyvalues
{
      prop_data
      {
              base			Metal.Large
			  physicsmode	1
      }
}