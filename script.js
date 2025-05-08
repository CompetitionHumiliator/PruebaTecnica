
function validateForm() {
  
    var username=document.forms["LoginUser"]["username"].value;
    var password=document.forms["LoginUser"]["password"].value;
    
    
    if ((username == "admin") && (password == "admin")) {
        alert ("Inicio de sesion exitoso");
             window.location.href = 'index.html';
              return false;
          }
          else {
              alert ("Incorrecto, revisa el usuario y la contraseña o vuelve a tu pais");
            }
    
  }




  function showTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const customDateTime = now.toLocaleString('es-ES', options);
    document.getElementById('clock').textContent = customDateTime;
  }
  
  setInterval(showTime, 0);
