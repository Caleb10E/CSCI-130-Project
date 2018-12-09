function displayArray(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      alert('i: ' + i + array[i][j] + '\n' +
        'j: ' + j + array[i][j]);
    }
  }
}

function createTable(tableSize, gridColor, blockColor) {
  var size = parseInt(tableSize.value)
  var array = new Array(size);
  for (var i = 0; i < array.length; i++) {
    array[i] = new Array(size);
  }

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if ((i == j) || (i + j == 6)) {
        array[i][j] = 1;
      } else {
        array[i][j] = 0;
      }
    }
  }

  //displayArray(array);

  for (var r = 0; r < parseInt(tableSize.value, 10); r++) {
    var x = document.getElementById('myTable').insertRow(r);
    for (var c = 0; c < parseInt(tableSize.value, 10); c++) {
      //var num = (r + 1) * (c + 1);
      var but = document.createElement('input');
      but.setAttribute('type', 'button');
      but.setAttribute('name', 'javaSubmit');
      but.setAttribute('id', 'num');
      but.setAttribute('value', '');
      but.setAttribute('onmousedown', 'WhichButton(event)');
      but.style.width = '50px';
      but.style.height = '50px';
      but.style.backgroundColor = blockColor.value;
      var y = x.insertCell(c);
      y.appendChild(but);
    }
  }
}

var totalMoves = 0;
var totalErrors = 0;

function WhichButton(event) {
  if (event.button == 0) {
    var movesLable = document.getElementById("moves");
    ++totalMoves;
    movesLable.innerHTML = pad(totalMoves);

    function pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }
    //alert("You pressed button: " + event.button);
  } else if (event.button == 2) {
    //    alert("You pressed button: " + event.button);
    var elem = document.getElementById("num");
    elem.value = "X";
  } else {
    alert("Invalid Input");
  }
}