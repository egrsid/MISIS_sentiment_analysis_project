let enter = document.getElementById("enter");
let info = document.getElementById("info");
let story = document.getElementById("story");
let form = document.getElementById("myForm");
let output = document.getElementById("output");

function toggleExpand() {
    const rectangle = document.getElementById('myRectangle');
    rectangle.classList.toggle('expanded');
    const сontent = document.getElementById('myContent');
    сontent.classList.toggle('expanded');
    const inner = document.getElementById('myInner');
    inner.classList.toggle('expanded');
    const block = document.getElementById('hiddenBlock');
    block.classList.toggle('visible');
    block.classList.toggle('hidden');
}