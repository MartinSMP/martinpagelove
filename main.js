
// FUNCION LOGIN CON CODIGOS DE INGRESO ALV
function Login(){  
    var user;
    user = document.getElementById("codigo").value;

    if(user == "Martin" || user == "Linette"|| user == "Linet669" || user == "944676744"){
        alert("Codigo Correcto :)");
        alert("Cierra los ojos :3");
        alert("Ya cerraste los ojos? xd :3");
        alert("Ya ahora si :3");

        window.location.href = "casoPositive.html";
    } else{
        alert("CÓDIGO INCORRECTO ._."); 
        window.location.href = "casoNegative.html"
    
    }
} 





