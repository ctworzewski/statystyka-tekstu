const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
const arr = [];
const characeterTest = document.querySelector('.characeterTest');
const wordsTest = document.querySelector('.wordssTest');

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

    function connectWords() {
        const connectCharacters = arr.join(',');
        console.log(connectCharacters);
    }
    connectWords();

    const allCharacters = arr.reduce( (acc,val) => {
        let sum = acc + val;
        return sum;
    })
    console.log('suma znaków to: ', allCharacters);

    let ileZnakow = addSigns.length;
    characeterTest.innerHTML = ileZnakow;

    function howWords() {
        if (textarea.value == ' ') {
            console.log('to jest pojedyncze słowo')
            wordsTest.innerHTML;
        }
    }
    howWords();
    
});
