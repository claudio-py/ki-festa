const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle ')
const showMenu = document.querySelector('nav.show .menu')
const iconMenu = document.querySelector('nav .icon-menu ')
for (const element of toggle) {
	element.addEventListener('click', () => {
		nav.classList.toggle('show')
		iconMenu.classList.toggle('hide')
	})
}

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
	link.addEventListener('click', () => {
		nav.classList.remove('show')
		iconMenu.classList.remove('hide')
	})
}

// ============HEADER SHADOW=====
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
	if (window.scrollY >= navHeight / 3) {
		header.classList.add('scroll')
		nav.style.height = '5rem'
		showMenu.style.top = '5rem'
	} else {
		header.classList.remove('scroll')
		nav.style.height = 'var(--header-height )'
		showMenu.style.top = 'var(--header-height )'
	}
}

//========== BANNER CARROSSEL===============

const swiperBanner = new Swiper('.swiper-banner', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 8000
	},
	speed: 1500,
	grabCursor: true,
	// If we need pagination
	pagination: {
		el: '.swiper-banner .swiper-pagination',
		clickable: true
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-banner .swiper-button-next',
		prevEl: '.swiper-banner .swiper-button-prev'
	}
})

//========== TESTIMONIALS CARROSSEL===============

const swiper = new Swiper('.swiper-container', {
	grabCursor: true,
	centeredSlides: true,
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	speed: 3000,
	autoplay: {
		delay: 1000
	},

	breakpoints: {
		767: {
			slidesPerView: 2,
			
		},
		1200: {
			slidesPerView: 3,
		}
	}
})
// ============SOCIAL=================
const swiperSobre = new Swiper('.swiper-social', {
	slidesPerView: 1,
	loop: true,
	speed: 3000,

	autoplay: {
		delay: 1000
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	breakpoints: {
		767: {
			slidesPerView: 2,
			setWrapperSize: true
		},
		1200: {
			slidesPerView: 3,

			mousewheel: true,
			keyboard: true
		}
	}
})
// ===========SCROLL REVEAL==========
const scrollReveal = ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 700,
	reset: true
})

scrollReveal.reveal(
	`
#home .image, #home .text, 
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact.text, #contact .links,
footer .brand, footer .social 
`,
	{ interval: 100 }
)
//  ============BOTÃO VOLTAR AO TOPO===========
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
	if (window.scrollY >= 2000) {
		backToTopButton.classList.add('show')
	} else {
		backToTopButton.classList.remove('show')
	}
}

// MENU SECTION ACTIVATE
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
	const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

	for (const section of sections) {
		const sectionTop = section.offsetTop
		const sectionHeight = section.offsetHeight
		const sectionId = section.getAttribute('id')
		const checkpointStart = checkpoint >= sectionTop
		const checkpointEnd = checkpoint <= sectionTop + sectionHeight
		if (checkpointStart && checkpointEnd) {
			document
				.querySelector('nav ul li a[href*=' + sectionId + ']')
				.classList.add('active')
		} else {
			document
				.querySelector('nav ul li a[href*=' + sectionId + ']')
				.classList.remove('active')
		}
	}
}

// ========WHEN SCROLL========
window.addEventListener('scroll', () => {
	changeHeaderWhenScroll()
	backToTop()
	activateMenuAtCurrentSection()
})
