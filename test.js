const textarea = document.querySelector('.textarea');



textarea.addEventListener('input', onChnage);

function onChnage(e) {
    
    const tekst = textarea.value;
    const ileZnakow = tekst.length;
    const ileSlow = tekst.replace(/[\r\n]/g, ' ').split(' ').length;
    const ileZdan = tekst.split('.').length;

    document.getElementById('ileZnakow').innerHTML = ileZnakow;
    document.getElementById('ileSlow').innerHTML = ileSlow;
    document.getElementById('ileZdan').innerHTML = ileZdan;
}