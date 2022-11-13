let dropdownList = document.getElementById('selections');

    dropdownList.onchange = function changeBgColor(event) {
      let selecetedIndex = dropdownList.selectedIndex;
      let selectedOption = dropdownList.options[selecetedIndex];
    document.body.style.backgroundColor = selectedOption.text;
   }
    
