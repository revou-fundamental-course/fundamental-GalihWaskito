// Validasi Form

function validateForm() {
    let fullName = document.getElementById('fullname').value;
    let date = document.getElementById('date').value;
    let message = document.getElementById('message').value;

    console.log(fullName);
    console.log(date);
    console.log(message);

    if (fullName != '' && date != '' && message != '') {
        document.getElementById('result').innerHTML = fullName + ' ' + date + ' ' + message;
    } else {
        alert('Form cannot be blank');
    }

}
 
let indexSlide = 1; //[0, 1, 2]
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
    console.log('IndexSlide kita tambah ' + n);
    console.log(indexSlide + ' Ini ShowSlide');
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('banner-container');
    if (n > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }
    
    console.log(indexSlide - 1 + ' Ini ShowSlide');
    listImage[indexSlide - 1].style.display = 'block';
    
}
   
