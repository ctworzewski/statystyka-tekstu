const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

const arr = [];
button.addEventListener('click', function() {
    const addSigns = textarea.value;
    //console.log('Przycisk działa');

    //console.log('wpisane znaki/słowo', znaki);

    if (addSigns.length > 0) {
        console.log('ciąg znaków nie jest puste, podane znaki to', addSigns)
    } else {
        console.log('nie wprowadziłeś żadnego słowa, podaj ponownie');
    }
    
    const newTab = arr.push(addSigns);
    textarea.value = '';
    console.log('tablica', newTab);
    console.log('tablica arr', arr);
    
});
