document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('message').style.display = 'block';
    document.querySelector('.mcqueen').style.display = 'block';
});

document.getElementById('noButton').addEventListener('click', function() {
    var button = document.getElementById('noButton');
    var container = document.querySelector('.container');
    var containerRect = container.getBoundingClientRect();
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;
    
    var randomX = Math.random() * (containerRect.width - buttonWidth);
    var randomY = Math.random() * (containerRect.height - buttonHeight);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});
