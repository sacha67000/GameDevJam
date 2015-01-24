
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
			GameObject.Find("Door1").GetComponent("DoorMechanic").work = 0;
			GameObject.Find("Door2").GetComponent("DoorMechanic").work = 0;
		}
		else
		{
			this.gameObject.renderer.material.color = Color.red;
			GameObject.Find("Door1").GetComponent("DoorMechanic").work = 1;
			GameObject.Find("Door2").GetComponent("DoorMechanic").work = 1;
		}
	}
}