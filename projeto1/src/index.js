const checkBox = document.querySelector('.checkAM');
const annualy = document.querySelectorAll('.priceA');
const monthly = document.querySelectorAll('.priceM');


checkBox.onclick = function() {
    if (checkBox.checked === true) {
        for (let i=0; i< annualy.length; i++) {
            annualy[i].style.display = "none";
            monthly[i].style.display = "block";
        }
    } else {
        for (let i=0; i< annualy.length; i++) {
        annualy[i].style.display = "block";
        monthly[i].style.display = "none";
        }
    }
}