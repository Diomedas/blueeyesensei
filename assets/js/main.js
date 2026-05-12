/*
	Strongly Typed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			hoverDelay: 150,
			hideDelay: 350
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

	// --- Dinamik Form Alanları (Global Scope) ---

	window.toggleContactInput = function() {
		const method = document.getElementById('contact_method').value;
		const wrapper = document.getElementById('contact_details_wrapper');
		const input = document.getElementById('contact_details');
		
		const placeholders = {
			'Email': 'john@example.com',
			'LINE': 'john123',
			'WhatsApp': '+81 90-0000-0000',
			'Discord': 'username'
		};

		if (method && placeholders[method]) {
			wrapper.style.display = 'block';
			input.placeholder = placeholders[method];
			input.required = true;
		} else {
			wrapper.style.display = 'none';
			input.required = false;
			input.value = ''; // Kutu gizlendiğinde içeriği temizle
		}
	};

	window.toggleOtherGoalInput = function() {
		const goal = document.getElementById('goal_location').value;
		const wrapper = document.getElementById('other_goal_wrapper');
		const input = document.getElementById('other_goal_details');

		if (goal === 'Other') {
			wrapper.style.display = 'block';
			input.required = true;
		} else {
			wrapper.style.display = 'none';
			input.required = false;
			input.value = '';
		}
	};
