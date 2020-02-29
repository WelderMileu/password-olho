(function() {

	const $ = event => document.querySelector(event);

	const toggle = () => {
		$('.icons').classList.toggle('false');

		if ($('.password').type == 'password') {
			$('.password').type = 'text';
		} else {
			$('.password').type ='password';
		}
	}

	$('.icons').addEventListener('click', toggle);

})();