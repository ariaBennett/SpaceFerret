/*
using UnityEngine;
using UnityEditor;
using UnityEditorInternal;
using System.Collections;
using System.Reflection;
// CopyComponents - by Michael L. Croswell for Colorado Game Coders, LLC
// March 2010

public class CopyComponents : ScriptableWizard
{   
	public bool copyValues = true;  
	public Component oldComp;
	public GameObject target;
	public GameObject source;
	//public GameObject gameObject;


	[MenuItem ("Custom/Copy Components")]
	
	
	static void CreateWizard ()
	{
		ScriptableWizard.DisplayWizard("Copy Components", typeof(CopyComponents), "Copy");  
	}
	
	void OnWizardCreate ()
	{
		for (int i = 0; i < source.GetComponents(CustomAttributeData).Length; i++) {
			oldComp = source.GetComponents(CustomAttributeData).GetValue(i);
			if ((oldComp.GetType().ToString ()) != "UnityEngine.Transform") {
				Component new_component = target.AddComponent(oldComp.GetType());
				//int hack = 0;
				foreach (FieldInfo f in oldComp.GetType().GetFields())
				{
					//	if (hack < 8) {
					//		hack++;
					//	} else {
					Debug.Log (f.GetValue(oldComp));
					f.SetValue(new_component, f.GetValue(oldComp));
					//	}
					
				}
			}
				}






	}
}
*/