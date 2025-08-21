function setLang(){
    let control = document.getElementById("buttonLang").innerHTML;
    console.log(control)

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
        alert("Erro beim Sprachenwechsel. / Error when changing language.")
    }

}


function convertToM(){

    const cm = Number(document.getElementById("cm").value)
    let result =  cm /100
    console.log(result)
    document.getElementById("m").value = result;

}


function convertToCm(){
    const m = Number(document.getElementById("m").value)
    let result = m*100
    console.log(result)
    document.getElementById("cm").value = result; 

}

/* function convert(){
    const cm = Number(document.getElementById("cm").value)
    const m = Number(document.getElementById("m").value)

    if (cm != 0){
       let result =  cm /100
       console.log(result)
       document.getElementById("m").value = result;
    }
    else if (m != 0){
        let result = m*100
        console.log(result)
        document.getElementById("cm").value = result;
    }

    else{
        alert("Error!")
    }

}*/

//this function was a part of the first version, where i used a button in the html 
