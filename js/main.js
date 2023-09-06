document.addEventListener("DOMContentLoaded", function () {
    // Определяем элементы и переменные
    const header = document.querySelector(".header");
    const tabs = document.querySelectorAll(".tab");
    const allProducts = document.querySelectorAll(".clothes__wrapper .clothes .clothe");
    const sizeTabs = document.querySelectorAll(".sweatshirt__size");
    const colorTabs = document.querySelectorAll(".sweatshirt__colour");
    const modalFirst = document.getElementById("wrapper-modal-first");
    const overlayFirst = document.getElementById("overlay");
    const modalSecond = document.getElementById("wrapper-modal-second");
    const btnOpen = document.getElementById("btn-open");
    const btnClose = document.getElementById("btn-close");
    const callSubmit = document.getElementById("call-submit");
    const btnCloseResponse = document.getElementById("btn-close-response");

    function openModal(modal) {
        modal.classList.add("active");
    }

    function closeModal(modal) {
        modal.classList.remove("active");
    }

    overlayFirst.addEventListener("click", function () {
        closeModal(modalFirst);
    });

    btnClose.addEventListener("click", function () {
        closeModal(modalFirst);
    });

    btnCloseResponse.addEventListener("click", function () {
        closeModal(modalSecond);
    });

    callSubmit.addEventListener("click", function (e) {
        e.preventDefault();
        closeModal(modalFirst);
        openModal(modalSecond);
    });

    btnOpen.addEventListener("click", function (e) {
        e.preventDefault();
        openModal(modalFirst);
    });

    // Обработчик события для заголовка
    document.addEventListener("scroll", function () {
        if (window.pageYOffset === 0) {
            header.classList.remove("opacity");
        } else {
            header.classList.add("opacity");
        }
    });

    // Обработчик события для вкладок раздела
    tabs.forEach(function (tab) {
        tab.addEventListener("click", function (event) {
            event.preventDefault();

            // Удаляем класс "active" у всех табов
            tabs.forEach(function (innerTab) {
                innerTab.classList.remove("active");
            });

            // Добавляем класс "active" к выбранному табу
            tab.classList.add("active");

            // Получаем индекс выбранного табу
            const tabIndex = Array.from(tabs).indexOf(tab);

            // Скрываем все продукты и отображаем продукты для выбранного табу
            allProducts.forEach(function (product, index) {
                if (tabIndex === 0 || (index >= (tabIndex - 1) * 3 && index < tabIndex * 3)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });

    // Функция активации для размеров и цветов товаров
    function activate(el, activeClass) {
        el.addEventListener("click", function () {
            // Удаляем класс "active"
            el.parentElement.querySelectorAll("." + activeClass).forEach(function (otherEl) {
                otherEl.classList.remove(activeClass);
            });

            // Добавляем класс "active" к выбранному элементу
            el.classList.add(activeClass);
        });
    }

    // Для каждого элемента класса sweatshirt__size активируем выбранный элемент
    sizeTabs.forEach(function (sizeTab) {
        activate(sizeTab, "active");
    });

    // Для каждого элемента класса sweatshirt__colour активируем выбранный элемент
    colorTabs.forEach(function (colorTab) {
        activate(colorTab, "active");
    });
});
