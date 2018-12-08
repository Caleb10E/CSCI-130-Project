function createTable(tableSize, gridColor, blockColor) {
  for(var r = 0; r < parseInt(tableSize.value,10); r++) {
    var x = document.getElementById('myTable').insertRow(r);
    for(var c = 0; c < parseInt(tableSize.value,10); c++) {
      var but = document.createElement('input');
      but.setAttribute('type', 'button');
      but.setAttribute('name','javaSubmit');
      but.setAttribute('id','uniqueIdentifier');
      but.setAttribute('value',' ');
      but.setAttribute('onmousedown', 'WhichButton(event)');
      but.style.width = '50px';
      but.style.height = '50px';
      but.style.backgroundColor = blockColor.value;
        var y = x.insertCell(c);
        y.appendChild(but);
    }
  }
}

function WhichButton(event) {
  if(event.button == 0){
  alert("You pressed button: " + event.button);
  }

  else if(event.button == 2) {
      alert("You pressed button: " + event.button);
    // make button an X
    var elem = document.getElementById("uniqueIdentifier");
    elem.value = "X";
  }
 else {
     alert("Invalid Input");
 }
}
