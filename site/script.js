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
function infobar() {
    const bar = document.getElementById('infobar');
    const bar2 = document.getElementById('infobar2');
    const bar3 = document.getElementById('infobar3');
    
    // Закрыть storybar если открыт
    closeStoryBar();
    
    bar2.classList.toggle('visiblebar2');
    bar.classList.toggle('visiblebar');
    bar.classList.toggle('hidden');
    bar2.classList.toggle('hidden');
    bar3.classList.toggle('visiblebar3');
    bar3.classList.toggle('hidden');
}

function storybar() {
    const bar = document.getElementById('storybar');
    const bar2 = document.getElementById('storybar2');
    const bar3 = document.getElementById('storybar3');
    
    // Закрыть infobar если открыт
    closeInfoBar();
    
    bar2.classList.toggle('storybar2');
    bar.classList.toggle('storybar');
    bar.classList.toggle('hidden');
    bar2.classList.toggle('hidden');
    bar3.classList.toggle('storybar3');
    bar3.classList.toggle('hidden');
}

// Функции для закрытия меню
function closeInfoBar() {
    const bar = document.getElementById('infobar');
    const bar2 = document.getElementById('infobar2');
    const bar3 = document.getElementById('infobar3');
    
    bar.classList.add('hidden');
    bar.classList.remove('visiblebar');
    bar2.classList.add('hidden');
    bar2.classList.remove('visiblebar2');
    bar3.classList.add('hidden');
    bar3.classList.remove('visiblebar3');
}

function closeStoryBar() {
    const bar = document.getElementById('storybar');
    const bar2 = document.getElementById('storybar2');
    const bar3 = document.getElementById('storybar3');
    
    bar.classList.add('hidden');
    bar.classList.remove('storybar');
    bar2.classList.add('hidden');
    bar2.classList.remove('storybar2');
    bar3.classList.add('hidden');
    bar3.classList.remove('storybar3');
}

// Закрытие меню при клике вне области
document.addEventListener('click', function(event) {
    const infobar = document.getElementById('infobar');
    const storybar = document.getElementById('storybar');
    const infoBtn = document.getElementById('info');
    const storyBtn = document.getElementById('story');
    
    if (!infobar.contains(event.target) && !infoBtn.contains(event.target)) {
        closeInfoBar();
    }
    
    if (!storybar.contains(event.target) && !storyBtn.contains(event.target)) {
        closeStoryBar();
    }
});