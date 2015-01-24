
function Start () {
		GameObject.Find("Button2").renderer.enabled = false;
		GameObject.Find("Push").renderer.enabled = false;		
}

function OnTriggerEnter (other : Collider) 
{
		GameObject.Find("Button2").renderer.enabled = true;
		GameObject.Find("Push").renderer.enabled = true;
}

function OnTriggerExit (other : Collider) 
{
		GameObject.Find("Button2").renderer.enabled = false;
		GameObject.Find("Push").renderer.enabled = false;
}