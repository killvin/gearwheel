var  oField;
var  oField1; 
var  Material; 

function OpenMaterial( oDestination,oDestination1 ) {
  oField = oDestination;
  oField1 = oDestination1;
  if ( !Material || Material.closed ) {
    Material = window.open("/btcjerpWeb/jsp/am/common/mai_material/Tv_Material.jsp", "Material", "resizable=yes,dependent=yes,scrollbars=yes,left=0,top=0,width=" + screen.width * .3 + ",height=" + screen.height * .55);
  }
  Material.focus();
}



// Do not direcly include this file in an html;
// instead use rhpp and #include aplist.html

function LoadMasterSelect(theSelect, theArray) {
   for (i=0; i < theArray.length; i++) {
      if (typeof theArray[i] == "string")
        AddItem(theSelect, theArray[i], null);
      else
        AddItem(theSelect, theArray[i][0], null);
   }
   theSelect.selectedIndex = -1;
}

function ClearSelect() {
  for (var i=0; i<ClearSelect.arguments.length; i++) {
    var theSelect = ClearSelect.arguments[i];
    var len = theSelect.length;
    for(var j=0; j < len; j++)
      RemoveItem(theSelect, 0, null, 0);
  }
}

function AddItem(theSelect, oKey, toArray) {
   if (toArray) {
      toArray[toArray.length] = oKey;

      if (theSelect) {
         theSelect.options[theSelect.length] = new Option(oKey[0], oKey[0], false, false);
         theSelect.selectedIndex = theSelect.length-1;
      }
   }
   else {
      if (theSelect) {
         theSelect.options[theSelect.length] = new Option(oKey, oKey, true, true);
         theSelect.selectedIndex = theSelect.length-1;
      }
   }
}

function RemoveItem(theSelect, selIndex, fArray, arrIndex) {
   if (fArray) {
      for(var i=arrIndex; i<fArray.length; fArray[i]=fArray[++i]);
      fArray.length--;
   }
   if (theSelect) {
      if (selIndex < 0 || selIndex > theSelect.length)
         return;
      else {
         theSelect.options[selIndex] = null;
         theSelect.selectedIndex = -1;
      }
   }
}

function EditItem(theSelect, oKey, oVal) {
   theSelect.options[theSelect.selectedIndex] = new Option(oKey, oVal, true, true);
}

function MasterChange(theMaster, theSlave, theSlave2) {
   if (theSlave) {
     ClearSelect(theSlave);
     LoadMasterSelect(theSlave, gArray[theMaster.selectedIndex].slice(1));
   }

   if (theSlave2) {
     ClearSelect(theSlave2);
     LoadMasterSelect(theSlave2, sArray[theMaster.selectedIndex]);
   }
}

function MasterAdd(theSelect, slaveSelect, oKey, theArray) {
  keyVal = oKey.value;
  if (keyVal == "")
    return;
  if (btnactn == "add") {
    for (var i=0; i<theSelect.length; i++) {
      if (theSelect.options[i].text == keyVal) {
        return;
      }
    }
    AddItem(theSelect, new Array(keyVal), theArray);
    oKey.value = "" ;
    if (slaveSelect)
      ClearSelect(slaveSelect);
  }
  else if (btnactn == "edit") {
    if (theSelect.selectedIndex > -1) {
      if (typeof theArray[theSelect.selectedIndex] == "string")
        theArray[theSelect.selectedIndex] = keyVal;
      else
        theArray[theSelect.selectedIndex][0] = keyVal;
      theSelect.options[theSelect.selectedIndex] = new Option(keyVal, keyVal, true, true);
      oKey.value = "" ;
    }
  }
}

function SlaveEdit(theSelect, oKey, theArray) {
  keyVal = oKey.value;
  if (keyVal == "")
    return;

  if (theSelect.selectedIndex > -1) {
    theArray[theSelect.selectedIndex+1] = keyVal;
    theSelect.options[theSelect.selectedIndex] = new Option(keyVal, keyVal, true, true);
    oKey.value = "" ;
  }
}

function MasterRemove(theMaster, theSlave, theArray) {
  var selIndex = theMaster.selectedIndex;
  if (selIndex >= 0) {
    if (confirm(RemoveMsgHead + theMaster.options[selIndex].text + RemoveMsgTail)) {
      if (theSlave)
        ClearSelect(theSlave);
      RemoveItem(theMaster, selIndex, theArray, selIndex);
    }
  }
}

function SlaveRemove(theSlave, theArray) {
  var selIndex = theSlave.selectedIndex;
  if (selIndex >= 0) {
    if (confirm(RemoveMsgHead + theSlave.options[selIndex].text + RemoveMsgTail))
      RemoveItem(theSlave, selIndex, theArray, selIndex+1);
  }
}


/*
 * Used by apuseraccess and apgroupaccess
 * Event handlers to clicks on Delete and Apply buttons
 * Moves items between two lists
 */
function SwapItem(fromList, toList, fromArray, toArray) {
  var frmIndex = fromList.selectedIndex;

  if (frmIndex >= 0) {
    var oKey = fromArray[frmIndex];
    var str =  new String(oKey[0]);
    if (str.charAt(str.length-1) != "*")
      AddItem(toList, oKey, toArray);

    RemoveItem(fromList, frmIndex, fromArray, frmIndex);
  }

}

function submitHandlerSwitch(field, theArray) {
  for (var i = 0; i < theArray.length; i++) {
    theArray[i] = theArray[i].toString().replace(/\\/g, "/");
  }
  field.value += ArrayToString(theArray);
  return true;
}

function submitHandler(field, theArray) {
  field.value += ArrayToString(theArray);
  return true;
}

function ArrayToString(theArray) {
  var returnStr = "";
  var dataStr, elementStr;

  if (!theArray)
    return("{}");

  for (var i=0; i < theArray.length; i++) {
    if (typeof theArray[i] != "string")
      returnStr += (i > 0 ? " " : "") + ArrayToString(theArray[i]);
    else {
      returnStr = "{";
      for (var i=0; i < theArray.length; i++) {       // cycle through elements
        dataStr = theArray[i].toString();
        if (/\s/.test(dataStr)) {
          dataStr = dataStr.replace(/\\/g, "\\\\");
          dataStr = dataStr.replace(/\"/g, "\\\"");
          dataStr = "\"" + dataStr + "\"";           // if quotes are added, escape backsalshes
      }
        dataStr = dataStr.replace(/{/g, "\\{");
        dataStr = dataStr.replace(/}/g, "\\}");
        if (i > 0)
          dataStr = " " + dataStr;
        returnStr += dataStr;
      }
      return( returnStr + "}");
    }
  }
  return returnStr;
}

function ArrayToStringDelim(theArray, theDelim) {
  var returnStr = "";
  var dataStr;


  if (!theArray)
    return("{}");

  for (var i=0; i < theArray.length; i++) {
    if (typeof theArray[i] != "string")
      returnStr += (i > 0 ? " " : "") + ArrayToStringDelim(theArray[i], theDelim);
    else {
      returnStr = "{";
      for (var i=0; i < theArray.length; i++) {       // cycle through elements
        dataStr = theArray[i].toString();
        if (/\s/.test(dataStr)) {
          dataStr = dataStr.replace(/\\/g, "\\\\");
          dataStr = dataStr.replace(/\"/g, "\\\"");
          //dataStr = "\"" + dataStr + "\"";           // if quotes are added, escape backsalshes
        }
        dataStr = dataStr.replace(/{/g, "\\{");
        dataStr = dataStr.replace(/}/g, "\\}");
        if (i > 0)
           dataStr = theDelim + dataStr;
        returnStr += dataStr;
      }
      return( returnStr + "}");
    }
  }
  return returnStr;
}

function redirects(box1, box2, statlist, arrayVal, radiobtn) {
   box1.value = arrayVal[0];

   for (var i=0; i<statlist.length; i++) {
      if (statlist.options[i].text == arrayVal[1])
         statlist.selectedIndex = i;
   }
   box2.value = arrayVal[2];
   radiobtn[arrayVal[3]].checked = true;
}


function clearfields() {
  for (var i=0; i < clearfields.arguments.length; i++)
    clearfields.arguments[i].value = "";
}
