function OnMouseEnter()
{
	this.guiText.color = Color.red;
}

function OnMouseExit()
{
	this.guiText.color = Color.white;
}

function OnMouseUp()
{
	Application.Quit();
}