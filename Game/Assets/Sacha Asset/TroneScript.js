
var move = "none";

function Start () {
	this.gameObject.transform.position.y = -2;
}


function OnTriggerEnter (other : Collider)
{
	if (other.name == "Person")
		move = "up";
}

function Update()
{
	if (move == "up" && this.gameObject.transform.position.y < 1)
		this.gameObject.transform.position.y += 0.01;
	if (this.gameObject.transform.position.y > 0.9 && GameObject.Find("Person").transform.position.y > 2)
		Debug.Log("Yolo"); 
}