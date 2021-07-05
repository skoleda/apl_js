let id_men='_00';

function swapContent(id)
{
    id_men=id;
    let a = document.getElementById(id).textContent
    document.getElementById('inp_1').value =a;
    document.getElementById('main_menu').textContent = a;
            
}
function myFunction() {
  document.getElementById("my_Dropdown").classList.toggle("show");
}
function editeMenu(){    
    let a = document.getElementById('inp_1').value;
    document.getElementById (id_men).textContent =a;
    document.getElementById('main_menu').textContent = a;
}


// Закрыть the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
