const formData = {};

// Функция для обработки отправки формы
function submitForm(event) {
    event.preventDefault(); 

    // Получаем данные из формы
    const name = document.getElementById('fio').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone') ? document.getElementById('phone').value : ''; // Для телефона
    const comments = document.getElementById('comments').value;

    // Проверка, что поля name, email и comments не пустые
    if (!name || !email || !comments) {
        alert('Поля "Имя", "Email" и "Комментарии" не могут быть пустыми');
        return;
    }

    // Проверка номера телефона
    const phoneRegex = /^[0-9]+$/; // Проверка на только цифры
    if (phone && !phoneRegex.test(phone)) {  // Если телефон не пустой и содержит не только цифры
        alert('Телефон должен содержать только цифры, без букв');
        return;
    }

    // Проверка на корректность email 
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert('Введите корректный email');
        return;
    }

    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.comments = comments;
    formData.date = new Date().toLocaleDateString(); // Текущая дата

    printData();

// Сохраняем данные в localStorage
localStorage.setItem('formData', JSON.stringify(formData));

    window.open('/project2.html', '_blank');
}

function printData() {
    console.log(`Имя: ${formData.name}`);
    console.log(`E-mail: ${formData.email}`);
    console.log(`Телефон: ${formData.phone}`);
    console.log(`Дата: ${formData.date}`);
    console.log(`Комментарии: ${formData.comments}`);
}

// Обработчик события для отправки формы
const form = document.getElementById('contactForm');
form.addEventListener('submit', submitForm);

// Открытие модального окна при клике на кнопку
const modal = document.getElementById('modal');
const btns = document.getElementsByClassName('b_1');
const closeBtn = document.getElementsByClassName('close')[0];

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        modal.style.display = 'block';
    };
}

// Закрытие модального окна при клике на крестик
closeBtn.onclick = function() {
    modal.style.display = 'none';
};

// Закрытие модального окна при клике за пределами окна
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
