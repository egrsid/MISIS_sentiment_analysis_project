// Функция для открытия/закрытия ИНФО
function infobar() {
    const bar = document.getElementById("infobar");
    bar.classList.toggle("hidden");
    bar.classList.toggle("infobar"); // Добавляем стиль отображения
}

function storybar() {
    const bar = document.getElementById("storybar");
    
    bar.classList.toggle("hidden");
    bar.classList.toggle("storybar");

    const elementsToToggle = [
        "storybar2",       // Текст приветствия
        "storybar_reg",    // Кнопка регистрации
        "storybar_login",  // Кнопка входа
        "storybar_logout"  // Кнопка выхода
    ];

    elementsToToggle.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (!bar.classList.contains("hidden")) {
                el.classList.remove("hidden");
            } else {
                el.classList.add("hidden");
            }
        }
    });
}

document.addEventListener('click', function(event) {
    const storybarEl = document.getElementById('storybar');
    const storyBtn = document.getElementById('story');
    const infobarEl = document.getElementById('infobar');
    const infoBtn = document.getElementById('info');

    if (storybarEl && !storybarEl.contains(event.target) && !storyBtn.contains(event.target) && !storybarEl.classList.contains('hidden')) {
        storybar();
    }
    
    if (infobarEl && !infobarEl.contains(event.target) && !infoBtn.contains(event.target) && !infobarEl.classList.contains('hidden')) {
        infobar();
    }
});