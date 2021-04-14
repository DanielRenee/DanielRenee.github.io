let terminal = document.getElementById("terminal");
let body = document.body;
let title = document.getElementById("title");

function easterEgg(){
    let a = confirm("This will close the terminal");
    if(a == true){
        let b = confirm("Are you sure?");
        if(b == true){
            let c = confirm("Do you really wanna close it?");
            if(c == true){
                let d = confirm("There is no way back after this");
                if(d == true){
                    let e = confirm("ONLY DEATH!!!!");
                    if(e == true){
                        let f = confirm("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARG");
                        if(f == true){
                            terminal.style.visibility = "hidden";
                            body.style.backgroundImage = "url(assets/x.gif)"
                            body.style.backgroundPosition = "center";
                            body.style.backgroundRepeat =  "no-repeat";
                            body.style.backgroundSize = "cover";
                            terminal.style.visibility = "hidden";
                            let audio = new Audio("assets/audio.mp3");
                            audio.play();
                            title.innerHTML = "Get faKKKed";
                        }
                    }
                }
            }
        }
    }
}
