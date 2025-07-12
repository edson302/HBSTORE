



const circle = document.querySelector('.circle');
const btnprev = document.getElementById('prevbtn');
const btnnext = document.getElementById('nextbtn');
const indicators = document.getElementById('indicators');
const items = document.querySelectorAll('.item');
const numbersIndicators = document.querySelector('.numbers');
const dots = document.querySelectorAll('.dot');

let ativo = 0;
let timer;
const total= items.length;



btnnext.addEventListener('click', () => {

    updateCarousel(1);
   
});

btnprev.addEventListener('click', () => {
 

     updateCarousel(-1);
  
});


 function updateCarousel( direction){
    // Remove ativo atual
    document.querySelector('.item.active')?.classList.remove('active');
    document.querySelector('.dot.active')?.classList.remove('active');

if (direction > 0) {
        ativo = (ativo + 1)  // Próximo item

        if (ativo===total) {
            ativo = 0; // Volta ao primeiro item
            
        }
    }
    else if( direction < 0) {
        ativo = (ativo - 1 )  // Item anterior

        if (ativo < 0) {
            ativo = total - 1; // Volta ao último item
            
        }

    }


    

    items[ativo].classList.add('active');
    dots[ativo].classList.add('active');
numbersIndicators.textContent=`0${ativo + 1}`; // Atualiza o número do indicador
        
 }
 
 
 setInterval(() => {updateCarousel (1)}, 5000); // Reinicia o timer