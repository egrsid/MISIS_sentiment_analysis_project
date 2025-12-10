/* =========================================
   УПРАВЛЕНИЕ МЕНЮ И ИНФОБАРОМ
   ========================================= */
function storybar() {
    document.getElementById("storybar").classList.toggle("hidden");
}

function infobar() {
    document.getElementById("infobar").classList.toggle("hidden");
}

/* =========================================
   ВЫБОР МОДЕЛИ (DROPDOWN)
   ========================================= */

// 1. Открыть/Закрыть меню С ПРОВЕРКОЙ
function toggleDropdown() {
    var list = document.getElementById("modelList");
    
    // Если мы открываем меню (оно было закрыто)
    if (!list.classList.contains("show")) {
        // Сначала смотрим, какая модель сейчас в инпуте
        const input = document.getElementById('selectedModelInput');
        // Если инпут есть, берем значение. Если нет - берем дефолт.
        const currentVal = (input && input.value) ? input.value : "CatBoostClassifier";
        
        // Принудительно красим нужную кнопку перед показом
        const buttons = document.querySelectorAll('.model-btn');
        buttons.forEach(btn => {
            btn.classList.remove('active-model'); // Сброс всех
            if (btn.getAttribute('data-model') === currentVal) {
                btn.classList.add('active-model'); // Актив нужной
            }
        });
    }
    
    // Теперь показываем список
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
    // А. Записываем выбор в скрытый инпут
    const input = document.getElementById('selectedModelInput');
    if (input) {
        input.value = modelKey;
    }

    // Б. Визуально переключаем (чтобы пользователь сразу увидел)
    const buttons = document.querySelectorAll('.model-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active-model');
        if (btn.getAttribute('data-model') === modelKey) {
            btn.classList.add('active-model');
        }
    });

    // В. Закрываем меню
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
    
    // Доп. логика для анимации прямоугольника при наличии результата
    const hiddenBlock = document.getElementById("hiddenBlock");
    if (hiddenBlock && window.getComputedStyle(hiddenBlock).display !== 'none') {
        const rect = document.getElementById("myRectangle");
        const content = document.getElementById("myContent");
        if(rect) rect.classList.add("expanded");
        if(content) content.classList.add("expanded");
    }
});
