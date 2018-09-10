var correct;
var score = 0;

$('.option').on('click', guess);
$('.close a').on('click', function() {
    $('.result').hide();
    $('.option').removeClass('scale');
    game();
});

game();

function guess() {
    
    var index = $('.option').index(this);
    if (index == correct) {
        console.log('correcta');
        score++;
        game();
    } else {
        console.log('incorrecta');
        $(this).addClass('scale');
        $('.result.lose').show();
        score = 0;
    };
    $('.score').find('span').text(score);
 }

function game () {
    correct = Math.floor(Math.random() * 2);

    $('.option').each(function(index) {
        if (index == correct) {
    
        }
        var color = generateColor();
        $(this).css('background-color', color);
    
        if (index == correct){
            $('.question').text(color);
        }
    });
}

function generateColor(){
    return 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
}

function random() {
    return Math.floor(Math.random() * 255);
}