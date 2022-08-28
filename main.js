import 'bootstrap/dist/js/bootstrap.bundle';
import './style.scss';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
	let current = '';
	sections.forEach((section) => {
		let sectionTop = section.offsetTop;
		let sectionHeight = section.clientHeight;

		if (window.pageYOffset > sectionTop - sectionHeight / 2) {
			current = section.getAttribute('id');
		}
	});

	navLinks.forEach((a) => {
		a.classList.remove('active');
		if (a.classList.contains(current)) {
			a.classList.add('active');
		}
	});
});

var options = {
	strings: ['Food ....', 'Drink ....'],
	typeSpeed: 60,
	backSpeed: 20,
	backDelay: 1300,
	loop: true,
};

new Typed('.element', options);

var slideDown = {
	distance: '50px',
	duration: '1000',
	origin: 'top',
	interval: '200',
};

ScrollReveal().reveal('.slide-down', slideDown);

var slideInRight = {
	distance: '50px',
	duration: '1000',
	origin: 'left',
	interval: '200',
};

ScrollReveal().reveal('.slide-right', slideInRight);

var sldieInLeft = {
	distance: '50px',
	duration: '1000',
	origin: 'right',
	interval: '200',
};

ScrollReveal().reveal('.slide-left', sldieInLeft);

let menuLists = [
	{
		id: 1,
		title: 'Barbecue Salad',
		description: 'Special Delicious Dish',
		img: 'public/img/plate1.png',
		price: 22.2,
		currency: '$',
	},
	{
		id: 2,
		title: 'Salad with fish',
		description: 'Special Delicious Dish',
		img: 'public/img/plate2.png',
		price: 30.5,
		currency: '$',
	},
	{
		id: 3,
		title: 'Spinach Salad',
		description: 'Special Delicious Dish',
		img: 'public/img/plate3.png',
		price: 42.2,
		currency: '$',
	},
];

let menuRow = document.querySelector('.menu-row');
menuLists.forEach((menu) => {
	let div = document.createElement('div');
	div.classList.add('col-8', 'col-md-4', 'col-lg-3');
	div.innerHTML = `
		<div class="card dish rounded-3 mb-4 slide-down">
			<img class="img mx-auto mt-4 mb-3" src="${menu.img}" width="160px" alt="" />
			<div class="card-body">
				<p class="card-title fw-semibold fs-5 mb-0">${menu.title}</p>
				<p class="card-text small">${menu.description}</p>
				<div class="d-flex justify-content-between align-items-center">
					<p class="mb-0 fw-bold">${menu.currency} ${menu.price}</p>
					<button class="btn btn-primary"><i class="bi bi-cart-plus"></i></button>
				</div>
			</div>
		</div>
	`;

	menuRow.append(div);
});
