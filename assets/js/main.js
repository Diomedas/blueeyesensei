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

		// Discord Mesajlarını Çeken Fonksiyon
		async function loadDiscordFeed() {
		    const container = document.getElementById('discord-messages');
		    if (!container) return;
		
		    try {
		        // Pipeline'dan gelen veriyi çek (Cache-busting ile)
		        const response = await fetch('messages.json?v=' + new Date().getTime());
		        if (!response.ok) throw new Error('Veri çekilemedi');
		        
		        const data = await response.json();
		        
		        // İçeriği temizle
		        container.innerHTML = ''; 
		
		        // Verileri güvenli bir şekilde bas
		        data.forEach(msg => {
		            const messageDiv = document.createElement('div');
		            messageDiv.className = 'message-item';
		            
		            messageDiv.innerHTML = `
		                <div>
		                    <span class="message-user">${msg.user}</span>
		                    <span class="message-time">${msg.time || ''}</span>
		                </div>
		                <span class="message-content">${msg.content}</span>
		            `;
		            container.appendChild(messageDiv);
		        });
		
		    } catch (error) {
		        console.error('Discord Hatası:', error);
		        container.innerHTML = '<div style="text-align:center; padding:10px;">Mesajlar şu an yüklenemedi.</div>';
		    }
		}
		
		// Sayfa yüklendiğinde çalıştır
		loadDiscordFeed();

})(jQuery);
