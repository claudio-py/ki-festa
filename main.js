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
window.addEventListener('scroll', () => {
	if (window.scrollY >= navHeight / 3) {
		header.classList.add('scroll')
		nav.style.height = '5rem'
		showMenu.style.top = '5rem'
	} else {
		header.classList.remove('scroll')
		nav.style.height = 'var(--header-height )'
		showMenu.style.top = 'var(--header-height )'
	}
})

//========== inicio CARROSSEL===============

const swiperInicio = new Swiper('.swiper-inicio', {
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
		el: '.swiper-inicio .swiper-pagination',
		clickable: true
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-inicio .swiper-button-next',
		prevEl: '.swiper-inicio .swiper-button-prev'
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
			slidesPerView: 2
		},
		1200: {
			slidesPerView: 3
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
#inicio .swiper-inicio,
#slide2 header, #slide2 .swiper-container,
#sobre .text h2, #sobre .text h1,#sobre .text h3,#sobre .text .wpp-btn,
#social .insta img,#social .insta .text , 
#vantagens1 .group-0, #vantagens1 .group-1,#vantagens1 .group-2,#vantagens1 .group-3

`,
	{ interval: 100 }
)
//  ============BOTÃO VOLTAR AO TOPO===========
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
	if (window.scrollY >= 800) {
		backToTopButton.classList.add('show')
	} else {
		backToTopButton.classList.remove('show')
	}
})

// Function to handle the visibility change=======================

function handleVisibilityChange(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			document
				.querySelector('nav ul li a[href*=' + entry.target.id + ']')
				.classList.add('active')
			console.log(`Element with ID ${entry.target.id} is now visible.`)
		} else {
			document
				.querySelector('nav ul li a[href*=' + entry.target.id + ']')
				.classList.remove('active')
		}
	})
}

// Create a new Intersection Observer instance with custom options
let options = {
	root: null, // relative to the viewport
	rootMargin: '0px', // no margins
	threshold: 0.3 // trigger when at least half of the element is visible
}

let observer = new IntersectionObserver(handleVisibilityChange, options)

// Get all elements you want to observe
let elements = document.querySelectorAll('main *[id]')

// Start observing each element
elements.forEach(element => {
	observer.observe(element)
})
