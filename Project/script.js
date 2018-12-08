function createTable(tableSize, gridColor, blockColor) {
    document.getElementById('myTable').style.textAlign='center';
  for(var r = 0; r < parseInt(tableSize.value,10); r++) {
    var x = document.getElementById('myTable').insertRow(r);
    for(var c = 0; c < parseInt(tableSize.value,10); c++) {
      var but = document.createElement('input');
      but.setAttribute('type', 'button');
      but.setAttribute('name','javaSubmit');
      but.setAttribute('value','');
      but.style.width = '50px';
      but.style.height = '50px';
    //  but.addEventListener("click", alertHello()); // set onclick handler
        var y = x.insertCell(c);
        y.appendChild(but);
    //  y.innerHTML= r+ c;
    //  y.style.color = gridColor;
    }
     but.onclick = WhichButton(event); // set onclick handler
  }
  //  but.onclick = alertHello(); // set onclick handler
//  document.getElementById('myTable').style.textAlign='center';
}

function alertHello() {
  alert('Hello World');
}

function WhichButton(event) {
    alert("You pressed button: " + event.button)
}
