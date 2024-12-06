document.getElementById("one").addEventListener("click", function() {
    alert("Вы кликнули на заголовок - так держать!");
});

const secondSemesterPractices = [
    "Базовое бэкенд-приложение",
    "HTTP-запросы",
    "JSON и работа с ним",
    "HTTP-ответы",
    "Проектирование API",
    "Роутинг и его настройка",
    "NoSQL базы данных",
    "Обеспечение авторизации и доступа пользователей",
    "Работа сторонних сервисов уведомления и авторизации",
    "Основы ReactJS",
    "Работа с компонентами динамической DOM",
    "Использование хуков в React",
    "Основы микросервисной архитектуры",
    "Разработка классических модулей веб-приложений",
    "Разработка классических модулей веб-приложений"
];

const firstSemesterPractices = [
    "Основы языка HTML",
    "Углубленное изучение HTML",
    "Основы работы с CSS",
    "Адаптивная верстка",
    "Bootstrap",
    "Основы языка JavaScript",
    "Работа с DOM",
    "Введение в Github"
];

// Функция для отображения тем первого семестра
function displayFirstSemesterPractices() {
    const table = document.getElementById("practicesTable");

    // Удаляем все строки таблицы, кроме заголовков
    for (let i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    // Добавляем новые строки для тем первого семестра
    firstSemesterPractices.forEach((practice, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td></td>
            <td>${practice}</td>
            <td><input type="checkbox"></td>
        `;
    });
}

// Функция для отображения тем второго семестра
function displaySecondSemesterPractices() {
    const table = document.getElementById("practicesTable");

    for (let i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    secondSemesterPractices.forEach((practice, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td></td>
            <td>${practice}</td>
            <td><input type="checkbox"></td>
        `;
    });
}

document.getElementById("changePracticesButton").addEventListener("click", function() {
    displaySecondSemesterPractices();
    document.getElementById("firstSemesterButton").style.display = "block";
    document.getElementById("changePracticesButton").style.display = "none";
});

// Обработчик события для кнопки "Темы первого семестра"
document.getElementById("firstSemesterButton").addEventListener("click", function() {
    displayFirstSemesterPractices();
    document.getElementById("firstSemesterButton").style.display = "none";
    document.getElementById("changePracticesButton").style.display = "block";
});

// Изначально показываем темы первого семестра
displayFirstSemesterPractices();

// для изображения
const image = document.getElementById("mainImage");
let isImageChanged = false;

// Увеличиваем размер изображения при наведении
image.addEventListener("mouseover", function() {
    image.style.transform = "scale(1.1)";  
    image.style.transition = "transform 0.3s ease"; 
});

// Восстанавливаем размер изображения при уходе курсора
image.addEventListener("mouseout", function() {
    image.style.transform = "scale(1)";  // возвращаем к нормальному размеру
});

// Изменяем изображение при клике
image.addEventListener("click", function() {
    if (!isImageChanged) {
        image.src = "https://i.pinimg.com/564x/72/71/1f/72711f9b3d262dc3709b00409eb41149.jpg";  // новое изображение
        isImageChanged = true;  // Запоминаем, что картинка была изменена
    } else {
        alert("Не налегай, у меня не так много любимых преподавателей");
    }
});

// Получаем кнопку и таблицу
const lecturesButton = document.getElementById("lecturesButton");
const table = document.getElementById("LTable");

// Обработчик события для кнопки
lecturesButton.addEventListener("click", function() {
    table.classList.toggle("show");
});
 // Получаем элемент параграфа
        const paragraph = document.getElementById("myParagraph");

        // Добавляем обработчик события click
        paragraph.addEventListener("click", function() {
            // Переключаем класс, который изменяет фон
            paragraph.classList.toggle("clicked");
        });