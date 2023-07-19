var slides = document.getElementsByClassName('slide');
var numSlides = slides.length;
var currentSlide = 0;

// Função para exibir o próximo slide
function exibirProximoSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % numSlides;
  slides[currentSlide].classList.add('active');
}

// Exibir o próximo slide a cada 3 segundos
setInterval(exibirProximoSlide, 3000);


const images = document.querySelectorAll('.hover-image');
    let currentImage = 0;

    function changeImage() {
      images[currentImage].style.opacity = '0';
      currentImage = (currentImage + 1) % images.length;
      images[currentImage].style.opacity = '1';
    }

    function startImageChange() {
      setInterval(changeImage, 8000); // Muda para a próxima imagem a cada 5 segundos
    }

    const imageContainer = document.querySelector('.image-container');
    imageContainer.addEventListener('mouseenter', startImageChange);

    function resetImage() {
      clearInterval(imageChangeInterval);
      images[currentImage].style.opacity = '0';
      currentImage = 0;
      images[currentImage].style.opacity = '1';
    }

    imageContainer.addEventListener('mouseleave', resetImage);