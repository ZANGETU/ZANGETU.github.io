//ドラックとか右クリック禁止にするぞい！
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

document.addEventListener('dragstart', function(e) {
    e.preventDefault();
}, false);


