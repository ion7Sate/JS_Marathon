const slides = document.querySelectorAll('.slider')

for(const slider of slides){
    slider.addEventListener('click',()=>{
        clearActiveClasses();
        slider.classList.add('active');
    })

}

function  clearActiveClasses(){
    slides.forEach((slider)=>{
       slider.classList.remove('active');
    })

}