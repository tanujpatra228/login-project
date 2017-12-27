
function validation()
{
	
		var result=true;
		var i=document.getElementsByTagName("input");
			// var i=document.forms["vform"]["username"]	if Form is given a name (name attribute in form tag)
		var name_error=document.getElementById("name_error");
		var pass_error=document.getElementById("pass_error");

		
	if(i[0].value.length==0)
	{
		i[0].style.border = "1px solid red";
		name_error.textContent="* Invalid Username";
		name_error.style.color="red";
		name_error.style.fontSize="14px";

		result=false;
	}

	if (i[1].value.length==0)
	{
		i[1].style.border = "1px solid red";
		pass_error.textContent="* Invalid password";
		pass_error.style.color="red";
		pass_error.style.fontSize="14px";

		result=false;
	}

	if (i[0].value.length>0)
	{
		i[0].style.border="1px solid Green";
		name_error.textContent="";
	}
	if (i[1].value.length>0)
	{
		i[1].style.border="1px solid Green";
		pass_error.textContent="";
	}

	return(result);
}