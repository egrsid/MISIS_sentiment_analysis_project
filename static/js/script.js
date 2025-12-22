/* УПРАВЛЕНИЕ МЕНЮ И ИНФОБАРОМ */
function storybar() {
    document.getElementById("storybar").classList.toggle("hidden");
}

function infobar() {
    document.getElementById("infobar").classList.toggle("hidden");
}

/* Выбор модели */

// 1. Открыть/Закрыть меню 
function toggleDropdown() {
    var list = document.getElementById("modelList");
    if (!list.classList.contains("show")) {
        const input = document.getElementById('selectedModelInput');
        const currentVal = (input && input.value) ? input.value : "CatBoostClassifier";
        const buttons = document.querySelectorAll('.model-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active-model'); 
            if (btn.getAttribute('data-model') === currentVal) {
                btn.classList.add('active-model'); 
            }
        });
    }
    
    // показываем список
    list.classList.toggle("show");
}

// 2. Закрыть меню при клике вне
window.onclick = function(event) {
    if (!event.target.matches('.model-select-button') && !event.target.closest('.model-select-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// 3. ВЫБОР МОДЕЛИ (При клике на пункт меню)
function selectModel(modelKey, modelName) {
    const input = document.getElementById('selectedModelInput');
    if (input) {
        input.value = modelKey;
    }
    // Б. переключаем 
    const buttons = document.querySelectorAll('.model-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active-model');
        if (btn.getAttribute('data-model') === modelKey) {
            btn.classList.add('active-model');
        }
    });
    document.getElementById("modelList").classList.remove("show");
    console.log("Выбрана модель: " + modelKey);
}

// 4. ПРИ ЗАГРУЗКЕ СТРАНИЦЫ (Восстанавливаем состояние с сервера)
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('selectedModelInput');
    const currentVal = (input && input.value) ? input.value : "CatBoostClassifier";
    
    // Красим кнопку
    const buttons = document.querySelectorAll('.model-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active-model');
        if (btn.getAttribute('data-model') === currentVal) {
            btn.classList.add('active-model');
        }
    });
    
    // для анимации прямоугольника
    const hiddenBlock = document.getElementById("hiddenBlock");
    if (hiddenBlock && window.getComputedStyle(hiddenBlock).display !== 'none') {
        const rect = document.getElementById("myRectangle");
        const content = document.getElementById("myContent");
        if(rect) rect.classList.add("expanded");
        if(content) content.classList.add("expanded");
    }
});
