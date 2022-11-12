p1 = localStorage.getItem("p_one");
p2 = localStorage.getItem("p_two");

p1s = 0;
p2s = 0;

document.getElementById("p1n").innerHTML = p1 + " :";
document.getElementById("p2n").innerHTML = p2 + " :";

document.getElementById("p1s").innerHTML = p1s;
document.getElementById("p2s").innerHTML = p2s;

player_turn = Math.random(1,2);

if(player_turn == 1 ){
    document.getElementById("pq").innerHTML = "Question Turn - " + p1;
    document.getElementById("pa").innerHTML = "Answer Turn - " + p2;
    q = "p1"
}
else{
    document.getElementById("pa").innerHTML = "Answer Turn - " + p1;
    document.getElementById("pq").innerHTML = "Question Turn - " + p2;
    q = "p2"
}

function start(){
    gw = document.getElementById("word").value;
    word = gw.toLowerCase();
    console.log("Word in lowercase: " + word)

    length = word.length;

    if(length >= 5){
       var charAt1 = word.charAt(1);
       console.log(charAt1);
       n = 1
    }

    charAt2 = word.charAt(Math.floor(length/2));
    console.log(charAt2);
    n = 2

    if(length >= 4){
        charAt3 = word.charAt(length - 1);
        console.log(charAt3);
        n = 3
    }

    if(n == 1){
        r2 = word.replace(charAt2, "_");
        console.log(r2);
        r3 = r2.replace(charAt3, "_");
        console.log(r3);
    }

    if(n == 2){
        r3 = word.replace(charAt2, "_");
        console.log(r3);
    }
    
    if(n == 3){
        r1 = word.replace(charAt1, "_");
        console.log(r1);
        r2 = r1.replace(charAt2, "_");
        console.log(r2);
        r3 = r2.replace(charAt3, "_");
        console.log(r3);
    }

    value = "<h4 id = 'word_display'> Q: " + r3 + "</h4>";
    input = "<br> Answer: <input class = 'form-control' id = 'answer' type = 'text' >";
    button = "<br><br> <button onclick = 'check();' class = 'btn btn-info'> Check Answer </button>";
    row = value + input + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    document.getElementById("word").style.display = "none";
    document.getElementById("btn_send").style.display = "none";
}

function check(){
    sna = document.getElementById("answer").value;
    ans = sna.toLowerCase();
    if(ans == word){
        if(q == "p1"){
            p2s = p2s + 1;
            document.getElementById("p2s").innerHTML = p2s;
            q = "p2";
            document.getElementById("pa").innerHTML = "Answer Turn - " + p1;
            document.getElementById("pq").innerHTML = "Question Turn - " + p2;
        }
        else{
            p1s = p1s + 1;
            document.getElementById("p1s").innerHTML = p1s;
            q = "p1";
            document.getElementById("pq").innerHTML = "Question Turn - " + p1;
            document.getElementById("pa").innerHTML = "Answer Turn - " + p2;
        }
        document.getElementById("output").innerHTML = "";
        document.getElementById("word").style.display = "inline-block";
        document.getElementById("btn_send").style.display = "inline-block";
    }
}