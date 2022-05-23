const positiveButton = document.getElementById("positiveButton")
const negativeButton = document.getElementById("negativeButton")
const neutralButton = document.getElementById("neutralButton")
positiveButton.onclick = () => {
    document.getElementById("content").innerText = "Positive content"
    document.getElementById("positiveButton").classList.add("active")
    document.getElementById("negativeButton").classList.remove("active")
    document.getElementById("neutralButton").classList.remove("active")
}

negativeButton.onclick = () => {
    document.getElementById("content").innerHTML = `Negative content`
    document.getElementById("positiveButton").classList.remove("active")
    document.getElementById("negativeButton").classList.add("active")
    document.getElementById("neutralButton").classList.remove("active")
}

neutralButton.onclick = () => {
    document.getElementById("content").innerHTML = `Neutral content`
    document.getElementById("positiveButton").classList.remove("active")
    document.getElementById("negativeButton").classList.remove("active")
    document.getElementById("neutralButton").classList.add("active")
}

document.getElementById("changeTab").onclick = () =>{
    const input = document.getElementById("tabIndex").value
    if(input==1){
        positiveButton.onclick()
    }
    else if(input==2){
        negativeButton.onclick()
    }
    else if(input==3){
        neutralButton.onclick()
    }
    else{
        alert("Index is invalid")
    }
}