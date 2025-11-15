(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('body').addClass('page-loaded');
			$('.preloader').delay(1000).fadeOut(300);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var headerUpper = $('.header-upper');
			var headerTop = $('.header-top');
			var scrollLink = $('.scroll-to-top');
			
			// Cek jika scroll lebih dari 100px
			if (windowpos > 136) {
				// Menambahkan kelas sticky pada header-upper
				headerUpper.addClass('sticky');
				// Menyembunyikan header-top
				headerTop.fadeOut(300);
				// Menampilkan scroll-to-top
				scrollLink.fadeIn(1000);
			} else {
				// Menghapus kelas sticky pada header-upper
				headerUpper.removeClass('sticky');
				// Menampilkan kembali header-top
				headerTop.fadeIn(300);
				// Menyembunyikan scroll-to-top
				scrollLink.fadeOut(300);
			}
		}
	}
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
	
	headerStyle();

	$(window).on('scroll', function() {
		headerStyle();
	});

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
		
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	// Loading masuk page akan di gantikan dengan fungsi berikut
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);


// VISI
document.addEventListener("DOMContentLoaded", function () {
    const visiCard = document.getElementById('visiCard');
    const visiButton = document.getElementById('visiButton');
    const visiText = document.getElementById('visiText');
    const h1 = document.getElementById('visiTitle');
    const logo = document.getElementById('visiLogo');

    // Fungsi untuk menangani expand dan collapse
    function toggleCard() {
        const isExpanding = !visiCard.classList.contains('expanded');

        visiCard.classList.toggle('expanded');

        if (isExpanding) {
            // Expand
            visiText.style.height = visiText.scrollHeight + "px";
            visiText.style.opacity = "1";
            h1.style.transform = "translateX(50px) translateY(-250px)";
            logo.style.transform = "scale(0.4) translateX(-80px) translateY(-270px)";
        } else {
        	// Collapse
			visiText.style.height = visiText.scrollHeight + "px"; // set current height
			requestAnimationFrame(() => {
				visiText.style.height = "0px";
				visiText.style.opacity = "0";
        	});
            h1.style.transform = "translateX(0px) translateY(0px)";
            logo.style.transform = "scale(1) translateY(0px)";
        }

        // Ganti teks tombol
        const buttonText = visiButton.querySelector('span');
        buttonText.textContent = isExpanding ? 'Tutup' : 'Lihat Selengkapnya';
    }

    // Event listener untuk tombol
    visiButton.addEventListener('click', function(event) {
        event.stopPropagation();  // Mencegah event bubbling ke visiCard
        toggleCard();
    });

    // Event listener untuk card
    visiCard.addEventListener('click', toggleCard);
});

// Misi
document.addEventListener("DOMContentLoaded", function () {
    const misiCard = document.getElementById('misiCard');
    const misiButton = document.getElementById('misiButton');
    const misiText = document.getElementById('misiText');
    const h1 = document.getElementById('misiTitle');
    const logo = document.getElementById('misiLogo');

    // Fungsi untuk menangani expand dan collapse
    function toggleCard() {
        const isExpanding = !misiCard.classList.contains('expanded');

        misiCard.classList.toggle('expanded');

        if (isExpanding) {
            // Expand
            misiText.style.transition = 'height 0.6s ease, opacity 0.3s ease 0.3s'; // Set transition for expand
            misiText.style.height = misiText.scrollHeight + "px";
            misiText.style.opacity = "1";
            logo.style.transform = "scale(0.4) translateX(-80px) translateY(-20px)";
        } else {
            // Collapse without animation
            misiText.style.transition = 'none'; // Remove transition for instant collapse
            misiText.style.height = "0px";  // langsung atur height ke 0
            misiText.style.opacity = "0";   // langsung atur opacity ke 0
            logo.style.transform = "scale(1) translateY(0px)";

            // After collapse, restore transition for future expansion
            setTimeout(() => {
                misiText.style.transition = 'height 0.6s ease, opacity 0.3s ease 0.3s';
            }, 100);
        }

        // Ganti teks tombol
        const buttonText = misiButton.querySelector('span');
		buttonText.textContent = isExpanding ? 'Tutup' : 'Lihat Selengkapnya';
    }

    // Tambahkan event listener untuk tombol dan card
    misiButton.addEventListener('click', toggleCard);
    misiCard.addEventListener('click', toggleCard);
});
