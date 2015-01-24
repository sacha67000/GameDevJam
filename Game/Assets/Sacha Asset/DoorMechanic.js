var move = "none";
var work = 1;

function OnTriggerEnter (other : Collider) 
{
	move = "down";
	if (this.gameObject.name == "Door1")
		GameObject.Find("Door2").GetComponent("DoorMechanic").move = "up";
	else if (this.gameObject.name == "Door2")
		GameObject.Find("Door1").GetComponent("DoorMechanic").move = "up";	
}

function Update()
{
	if (move == "up" && this.gameObject.transform.position.y < 6 && work == 1)
		this.gameObject.transform.position.y += 0.01;
	else if (move == "down" && this.gameObject.transform.position.y > 1.5 && work == 1)
		this.gameObject.transform.position.y -= 0.2;

}