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

window.onload = ()=>{
    console.log("Hello, world!");
    newPage("test",document.body);
}