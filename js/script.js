//burgerMenu===============================

const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
if (iconMenu) {
	iconMenu.addEventListener("click", function(){
		iconMenu.classList.toggle('_active')
		menuBody.classList.toggle('_active')
	})
}
//==Smooth navigation============================================================
const menuLinks = document.querySelectorAll(".menu__link[data-goto]")
if(menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick)
	})
	function onMenuLinkClick(e) {
		const menuLink = e.target
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			})
			e.preventDefault()
		}
	}
}