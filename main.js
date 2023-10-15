const buttonQ1 = document.querySelector('.answer-show1');
const buttonQ2 = document.querySelector('.answer-show2');
const buttonQ3 = document.querySelector('.answer-show3');

buttonQ1.addEventListener('click', () => showAnswer('.answer1','.answer-show1'));
buttonQ2.addEventListener('click', () => showAnswer('.answer2','.answer-show2'));
buttonQ3.addEventListener('click', () => showAnswer('.answer3','.answer-show3'));

function showAnswer(id,id2){
    document.querySelector(id).classList.toggle('show'); // akan menambahkan class show
    document.querySelector(id2).classList.toggle('min'); // akan menambahkan class min karena di awal tidak tersedia class min
    document.querySelector(id2).classList.toggle('plus'); // akan menghapus class plus yang dari awal sudah ada
}

