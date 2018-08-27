window.addEventListener('scroll', () => {
	if (window.pageYOffset > 360) {
		document.querySelector('.home-nav-dot').classList.add('black');		
	} else {
		document.querySelector('.home-nav-dot').classList.remove('black');		
	}

	const currentBold = document.querySelector('.home-nav-dot').querySelector('.bold');
	let el;
	if (window.pageYOffset < 660) {
		el = document.querySelector('a[data-link="#home"]');
		if (document.querySelector('.home-nav-dot').querySelector) {
			if (currentBold && currentBold !== el) currentBold.classList.remove('bold');
			el.classList.add('bold');
		}
	} else if (window.pageYOffset > 660 && window.pageYOffset <= 1600) {
		el = document.querySelector('a[data-link="#work"]');
		if (document.querySelector('.home-nav-dot').querySelector) {
			if (currentBold && currentBold !== el) currentBold.classList.remove('bold');
			el.classList.add('bold');
		}
	} else if (window.pageYOffset > 1600 && window.pageYOffset <= 1920) {
		el = document.querySelector('a[data-link="#business"]');
		if (document.querySelector('.home-nav-dot').querySelector) {
			if (currentBold && currentBold !== el) currentBold.classList.remove('bold');
			el.classList.add('bold');
		}
	} else if (window.pageYOffset > 1920) {
		el = document.querySelector('a[data-link="#footer"]');
		if (document.querySelector('.home-nav-dot').querySelector) {
			if (currentBold && currentBold !== el) currentBold.classList.remove('bold');
			el.classList.add('bold');
		}
	}
})



document.querySelector('.home-nav-dot').querySelectorAll('a').forEach(a => {
	a.addEventListener('click', (e) => {
		e.preventDefault;
		const bold = e.currentTarget.parentNode.querySelector('.bold');
		if(bold) bold.classList.remove('bold');
		e.currentTarget.classList.add('bold');
		const top = $(`${e.currentTarget.dataset.link}`).offset().top;
		$('html, body').animate({
			scrollTop: `${top - 200}px`
		}, 800);
	})
})