$('.mouse-parallax').on('mousemove', (e) => {
	const x = e.pageX / $(window).width();
	const y = e.pageY / $(window).height();

	$('.mouse-parallax__background').css(
		'transform',
		'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
		);
});