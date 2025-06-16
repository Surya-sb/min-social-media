const name1 = "surya"
const pass1 = "1234"




function vali(event){

    event.preventDefault()

    var name = document.getElementById("floatingInput").value
    var pass = document.getElementById("floatingPassword").value



    if (name === "" || pass === "") {
        alert("please fill the user name and pass")
    } else {
        if(name === name1 && pass === pass1){
            window.location.href = "home.html"
        }
        else{
            alert("wrong pass or user name")
        }
    }
}





// if(name == name1){
//     var co = 1
// }
// else{
//     var co = 0
// }

// if(pass == pass1){
//     var cn =1
// }
// else{
//     var cn =0
// }

// if( co === 0 && cn === 0 || co === 1 && cn === 0 || co === 0 && cn === 1){
//     alert("wrong pass")
// }
// else[
//     window.location.href = "home.html"
// ]
