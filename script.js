function convertToM(){

    const cm = Number(document.getElementById("cm").value) 
    document.getElementById("m").value = (cm /100);

}


function convertToCm(){
    const m = Number(document.getElementById("m").value)
    document.getElementById("cm").value = (m*100); 

}

function setLang(){
    let control = document.getElementById("buttonLang").innerHTML;

    if (control == "Deutsch"){
        document.getElementById("title").innerHTML = "Einheiten Umrechner";
        document.getElementById("h1").innerHTML = "Einheiten Umrechner";
        document.getElementById("h2").innerHTML = "Länge";
        document.getElementById("buttonLang").innerHTML = "English";

    }

    else if (control =="English") {
        document.getElementById("title").innerHTML = "Unit Converter";
        document.getElementById("h1").innerHTML = "Unit Converter";
        document.getElementById("h2").innerHTML = "Lenght";
        document.getElementById("buttonLang").innerHTML = "Deutsch";

    }

    else {
        alert("Error beim Sprachenwechsel. / Error when changing language.")
    }

}