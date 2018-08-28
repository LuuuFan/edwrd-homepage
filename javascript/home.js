

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

document.querySelector('#home form').addEventListener('submit', (e) => {
	e.preventDefault();
	const email = document.querySelectorAll('#home form input')[0];
	const zipcode = document.querySelectorAll('#home form input')[1];
	if (!validateEmail(email.value)) {
		$('.email-error').fadeIn(800);
	} else if (!validateZipcode(zipcode.value)) {
		$('.zipcode-error').fadeIn(800);
	} else {
		// !!!!!!!!IMPORT!!!!!!!!! Do API call then run the following code!!!!!!!!!!!!!!!!!
		// $.ajax({

		// }).then(res => {
			// run the code below~~~~
		// })

		// Run the following code after successful api call
		toggleLoginPage(e);
	}
})

const validateEmail = (email) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateZipcode = (zipcode) => {
	return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode);
}

// For Log in Page

let login = false;
const toggleLoginPage = (e) => {
	e.preventDefault();
	const homePage = document.querySelector('.home-page');
	const loginPage = document.querySelector('.login-page');
	login = !login;
	if (login) {
		$(loginPage).fadeIn(1000);
		$(homePage).fadeOut(1000);
	} else {
		$(homePage).fadeIn(1000);
		$(loginPage).fadeOut(1000);
	}
	// if (homePage.className.includes('modal')) {
	// 	homePage.classList.remove('modal');
	// 	loginPage.classList.remove('is-open');
	// 	loginPage.classList.add('modal');
	// } else {
	// 	homePage.classList.add('modal');
	// 	loginPage.classList.add('is-open');
	// 	loginPage.classList.remove('modal');
	// }
};

document.querySelector('.login-button').addEventListener('click', toggleLoginPage);

document.querySelector('.login-page .header span').addEventListener('click', toggleLoginPage);

// For Facebook login button render
const facebookLoginButtonRender = (d, s, id) => {
	let js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); 
	js.id = id;
	js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=402039176947729&autoLogAppEvents=1';
	fjs.parentNode.insertBefore(js, fjs);
};

facebookLoginButtonRender(document, 'script', 'facebook-jssdk');

// instagram login 