function convert(){
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

}