function createTable(tableSize, gridColor, blockColor) {
  for(var r = 0; r < parseInt(tableSize.value,10); r++) {
    var x = document.getElementById('myTable').insertRow(r);
    // document.getElementById("myTable").style.color = red;
    for(var c = 0; c < parseInt(tableSize.value,10); c++) {
      var y = x.insertCell(c);
      y.innerHTML= "     ";
    }
  }
}
