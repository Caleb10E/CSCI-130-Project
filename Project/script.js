var length = prompt("What length would you like to play in? 7 or 13", 7);
var width = prompt("What width would you like to play in? 7 or 13", 7);
var colorGrid = prompt("Red, Blue, or Green?");
switch(colorGrid) {
    case "Red":
      colorGrid="Red";
        break;
    case "Blue":
        colorGrid="Blue";
        break;
    case "Green":
        colorGrid="Green";
        break;
    default:
      alert("Invalid Color")
        break;
}

function createTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);

 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c;
    }
   }
}
