
function Start () {
	this.gameObject.renderer.material.color = Color.red;
}

function OnTriggerStay (other : Collider) 
{
	if (Input.GetKeyDown (KeyCode.E))
	{
		if (this.gameObject.renderer.material.color == Color.red)
			this.gameObject.renderer.material.color = Color.yellow;
		else if (this.gameObject.renderer.material.color == Color.yellow)
		{
			this.gameObject.renderer.material.color = Color.green;
			GameObject.Find("Door3").GetComponent("RotateDoor").work = 0;
			GameObject.Find("Door3").GetComponent(CapsuleCollider).enabled = false;

		}
		else
		{
			this.gameObject.renderer.material.color = Color.red;
			GameObject.Find("Door3").GetComponent("RotateDoor").work = 1;
			GameObject.Find("Door3").GetComponent(CapsuleCollider).enabled = true;
		}
	}
}
