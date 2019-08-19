$('document').ready(function(){
	$('li').css('color', 'red');
});

$('document').ready(function(){
	$('li').eq(1).css('color', 'blue');
});

$('document').ready(function(){
	$('li').not('li:eq(2)').css('color', 'green');
});

$('document').ready(function(){
	$('li').slice(2,5).css('color', 'deeppink');
});

$('document').ready(function(){
	$('li').add('.span').css('color', 'deeppink');
});

$('document').ready(function(){
	$('ul').children().slice(2,5).css('color', 'deeppink');
	$('.remove').on('click', ()=> {
		let active = event.target;
		$(active).closeest('form').children('.hidden').val();
	});


	$('.list').append('<li>Fulcon</li>');
	$('.list').prepend('<li>IKARUS</li>');
	$('<li>Trolabus</li>').appendTo('.list');
	$('<li>Trolabus1</li>').prependTo('.list');
});