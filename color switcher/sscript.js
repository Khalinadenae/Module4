//selectedOptions contains a list of the <option> elements contained within the <select> element that are currently selected.
// selectedIndex property sets or returns the index of the selected option in a drop-down list

let dropdownList = document.getElementById('selections');


    dropdownList.onchange = function changeBgColor(event) {
      let selecetedIndex = dropdownList.selectedIndex;
      let selectedOption = dropdownList.options[selecetedIndex];
    document.body.style.backgroundColor = selectedOption.text;
   }
    

