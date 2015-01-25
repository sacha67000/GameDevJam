function OnMouseEnter()
{
	this.guiText.color = Color.green;
}

function OnMouseExit()
{
	this.guiText.color = Color.white;
}

function OnMouseUp()
{
	Application.LoadLevel("Scene Bureau");
}