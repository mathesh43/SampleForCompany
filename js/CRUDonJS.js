var increment = 0;
var arrayOfElements = [];


    function save() {
      var inputValue = document.getElementById("input").value;
      if(inputValue == '' || inputValue == null) {
        document.getElementById("warn").innerHTML = "please fill the value";
        return;
      }
      document.getElementById("warn").innerHTML = '';
      var obj = {};
      obj['id'] = increment+1;
      obj['name'] = inputValue;
      arrayOfElements.push(obj);
      increment = increment+ 1;
      document.getElementById("formdata").reset();
      viewAll();
    }

    function viewAll() {
      var text = "<table border ='1'><tr><th>Id</th><th>Name</th><th colspan='2'>Action</th></tr>"
	    for (var i=0;i<arrayOfElements.length;i++){
      var value = arrayOfElements[i];
      text+="<tr><td>"+value.id+"</td><td><input type = 'text' id = 'input_"+i+"' value="+value.name+" disabled = 'true'></td>";
      text += '<td><input type="button" id= "modify_'+ i  +'" onclick = "modifyRow(this, '+ i +')" value = "Modify"></td>'
      text += '<td><input type="button" id= "delete_'+ i  +'" onclick = "deleteRow(this, '+ i +' )" value="Delete"></td></tr>'
	}
	text+="</table>";
    document.getElementById("saveDiv").innerHTML = text;
    }

function deleteRow(value, id) {
  arrayOfElements.splice(id,1);
  viewAll();
}

function saveExistingData(value, id) {
  arrayOfElements[id].name = document.getElementById("input_"+id).value;
  document.getElementById("modify_"+id).onclick = function () { modifyRow(this, id) };
    document.getElementById("modify_"+id).value = "modify";
  document.getElementById("input_"+id).disabled = true;
}
  viewAll();

function modifyRow(value, id) {
  idValue = 'input_'+id;
  document.getElementById("modify_"+id).value = "save";
  document.getElementById("modify_"+id).onclick = function () { saveExistingData(this, id) };
  document.getElementById("input_"+id).disabled = false;
}
