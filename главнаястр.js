

function logCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

// Функция для изменения цвета фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для сброса фона на исходный цвет (например, "white")
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        // Переключаем видимость
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
}

function changeH1BasedOnUtm() {
    // Извлекаем параметры из URL
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    
    const h2 = document.querySelector('h2');
    
    if (utmTerm) {
        // Если параметр utm_term есть в URL
        h2.textContent = utmTerm;
    } else {
        h2.textContent = "По умолчанию текст H1";// Если параметр utm_term отсутствует

    }
}

document.addEventListener("DOMContentLoaded", function() {
    showMessage("Скрипт загружен!");
    
    logCurrentTime();
    
    resetBackgroundColor();
    
    changeBackgroundColor("lightblue");
    
    toggleVisibility(".img1");
    
    changeH1BasedOnUtm();
});
