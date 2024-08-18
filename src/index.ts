function find(tagname: string) {
    return document.getElementById(tagname);
}

function newPage(id: string, root: HTMLElement) {
    const div = document.createElement("div");
    div.id = id;
    div.className = "page";
    div.innerText = "Some text here";
    root.appendChild(div);
}

function getJobName() {
    const myJobs = [
        "Programmer",
        "Gamer",
        "Nature Viewer",
        "Culture Appreciator"
    ];

    const randInt = Math.floor( Math.random() * myJobs.length );
    return myJobs[randInt];
}


window.onload = ()=>{
    console.log("Hello, world!");
    // newPage("test",document.body);

    const main = document.getElementById("home");
    if (main) {
        const randomFun = ()=>{
            const test = main.querySelector('#custom-job');
            if (test) {
                test.innerHTML = getJobName();
            }
        }

        main.onclick = randomFun;
        main.onmouseenter = randomFun;
        main.onmouseleave = randomFun;
    }    
}