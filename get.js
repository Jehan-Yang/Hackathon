function get_content(){
    var content = document.getElementById("content").value;
    if (content === ""){
        alert("Please input information!")
    }else{window.location.href = "quiz.html";}
}

function home(){
    window.open(encodeURI('./home.html'));
}