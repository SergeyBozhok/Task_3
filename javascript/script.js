(function(selector) {
    // не дублируем код
    function save(data) {
        localStorage.setItem(selector, JSON.stringify(data));
    }
    // и не создаем тысячи функций в цикле
    // а используем одну общую
    function onChange(event) {
        var element = event.target,
            name = element.name,
            value = element.value;
        data[name] = value;
        save(data);
    }
    var elements = document.querySelectorAll(selector),
        data = localStorage.getItem(selector);
    if(data) { // если в сторадже что-то есть
        // то можем и распарсить
        data = JSON.parse(data);
    } else {
        // иначе парсить нельзя, будет ошибка
        // присвоим дефолтное значение и сохраним
        save(data = {});
    }
    // обратимся к прототипу
    Array.prototype.forEach.call(elements, function(element) {
        var name = element.name,
            value = element.value;
        if(data[name] === value) { // если текущий элемент отмечен в сторадже
            // то отметим и на странице
            element.checked = true;
        }
        // навесим созданый вне цикла хандлер на событие
        element.addEventListener("change", onChange); 
        
    });
})("input[type=radio]");



/* Индекс слайда по умолчанию */
  var slideIndex = 1;
  showSlides(slideIndex);
  
  /* Функция увеличивает индекс на 1, показывает следующй слайд*/
  function plusSlide() {
      showSlides(slideIndex += 1);
  }
  
  /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
  function minusSlide() {
      showSlides(slideIndex -= 1);  
  }
  
  /* Устанавливает текущий слайд */
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }
  
  /* Основная функция слайдера */
  function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("item");
      
      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
          slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
         slides[slideIndex - 1].style.display = "block";
  }
  
 
