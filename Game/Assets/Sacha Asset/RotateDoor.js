var work = 1;

function Update () {
	if (work == 1)
		transform.Rotate(Vector3.up * Time.deltaTime * 500);
}