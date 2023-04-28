function convertir() {
    let pesos = document.getElementById("pesos").value;
    let dolares = pesos / 500;

    if(pesos === ""){
        swal("Formulario Incompleto","Ingrese una cantidad mayor a 0","error")
    }else if (pesos <= 0){
        swal("Formulario Erróneo", "Ingrese una cantidad mayor a 0","error")
    }else{
        (document.getElementById("dolares")).value = dolares;
    }
} 
