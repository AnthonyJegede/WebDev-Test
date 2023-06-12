
function sayHello() {
alert("Hello!")
}

function getFormvalue()
{
	var x=document.getElementById("form1");
	for (var i=0; i<x.length; i++)
	{
		if (x.elements[i].value!='Submit')
		{
			console.log(x.elements[i].value);
			alert(x.elements[i].value);
		}


	}
}

function multiplyBy() 
{
        num1=document.getElementById("firstNumber").value;
        num2=document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML=num1*num2;
}

function divideBy() 
{ 
        num1=document.getElementById("firstNumber").value;
        num2=document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML=num1/num2;
}

