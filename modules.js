function setElement(cntParent, strElement, strID, strType, strValue, strClass, blnCreateText, blnIsPicture) {
	// Create a templated element with an ID
	let tmpElement = document.createElement(strElement);

	// If the element needs a text
	if (blnCreateText) {
		// Create a text node and add to the element
		let tmpText = document.createTextNode(strValue);
		tmpElement.append(tmpText);
	} // End if

	// If the element needs a picture
	if (blnIsPicture) {
		// Set its source based on the given value
		tmpElement.src = strValue;
	}
	else {
		if (strValue != '' && blnCreateText == false) {
			// Set an attribute to place the strValue
			tmpElement.setAttribute('value', strValue);
		}
	} // End if

	// Give the tempalted element to the parent
	cntParent.append(tmpElement);

	// Finish with additional specifiec attributes
	tmpElement.setAttribute('id', strID);

	if (strType != '') {
		tmpElement.setAttribute('type', strType);
	}
	if (strClass != '') {
		tmpElement.setAttribute('class', strClass);
	}

	return tmpElement;
} // End of setElement function

function removeContent(cntParent) {
	while (cntParent.firstChild) {
		cntParent.removeChild(cntParent.firstChild);
	} // End while
}

function setFade(blnFadeIn) {

	if (blnFadeIn) {
		setElement(document.body, 'div', 'cntFadeIn', '', '', '', false, false);

		setTimeout(function () { cntFadeIn.remove(); }, 480);
	} else {
		setElement(document.body, 'div', 'cntFadeOut', '', '', '', false, false);

		setTimeout(function () { removeContent(document.body); }, 480);
	}
}

function parseCookies() {
	// Get cookies
	objCookies = Cookies.get();

	// For each key in objCookies
	for (let objKey in objCookies) {

		// If the value in key consists of only digits
		if (!isNaN(objCookies[objKey])) {

			// Convert the string value to integer
			objCookies[objKey] = parseInt(objCookies[objKey]);
		}
	}
}

function setCookies() {

	// Populate the cookies
	Cookies.set('energy', 100, {sameSite: 'strict', expires: 7 });
	Cookies.set('hunger', 100, {sameSite: 'strict', expires: 7 });
	Cookies.set('social', 100, {sameSite: 'strict', expires: 7 });

	// Retract the populated cookies
	parseCookies();
}

function addCookies(strName, strValue) {
	// Populate the cookie
	Cookies.set(strName, strValue, {sameSite: 'strict', expires: 7});

	// Set the key and value to objCookies
	objCookies[strName] = strValue;


	// Do a loop hole to check if the cookie is a number
	for (let objKey in objCookies) {
		
		// If the value in key consists of only digits
		if (!isNaN(objCookies[objKey])) {

			// Convert the string value to integer
			objCookies[objKey] = parseInt(objCookies[objKey]);
		}
	}
}

function getPremadeContainer(intSelection) {
	switch (intSelection) {
		case 0: // Main
			setElement(document.body, 'img', 'imgBackground', 'image/png', 'img/menu/background.png', '', false, true);
            setElement(document.body, 'img', 'imgBaseboard', 'image/png', 'img/menu/baseboard.png', 'aniBaseboard', false, true);
			setElement(document.body, 'img', 'imgStreetPole', 'image/png', 'img/menu/streetPole.png', '', false, true);
			setElement(document.body, 'img', 'imgStreetSignExit', 'image/png', 'img/menu/streetSignExit.png', '', false, true);
			setElement(document.body, 'img', 'imgStreetSignLoadGame', 'image/png', 'img/menu/streetSignLoadGame.png', '', false, true);
			setElement(document.body, 'img', 'imgStreetSignNewGame', 'image/png', 'img/menu/streetSignNewGame.png', '', false, true);
			setElement(document.body, 'img', 'imgMaria', 'image/png', 'img/menu/maria.png', '', false, true);
			setElement(document.body, 'img', 'imgGila', 'image/png', 'img/menu/gila.png', '', false, true);
			setElement(document.body, 'img', 'imgMelissa', 'image/png', 'img/menu/melissa.png', '', false, true);
			
			imgStreetSignExit.onclick = function () {
				location.href = 'https://abanoy.github.io/';
			};

			imgStreetSignLoadGame.onclick = function () {
				// If there are cookies present, load them
				if (document.cookie != '') {
					alert("TODO: Parse Cookies");
				} else {
					alert("No save file detected.");
				}
			}

			imgStreetSignNewGame.onclick = function () {
				// If there are cookies present, alert them of overwrite
				if (document.cookie != '') {
					alert("TODO: Alert of overwritting it")
				} else {
					alert("TODO: Start new game.");
				}
			}

			// Animation Sequence -
			// 0ms-50ms 	[50ms]: 	aniBaseboard
			// 50ms-130ms 	[80ms]: 	aniStreetPole
			// 130ms-200ms	[70ms]: 	aniStreetSignNewGame
			// 200ms-270ms	[70ms]: 	aniStreetSignLoadGame
			// 270ms-340ms	[70ms]: 	aniStreetSignExit
			// 450ms-510ms	[60ms]: 	aniMaria
			// 510ms-570ms	[60ms]: 	aniGila
			// 570ms-630ms	[60ms]: 	aniMelissa

			imgStreetPole.style.top = "100vh";
			imgStreetSignNewGame.style.top = "100vh";
			imgStreetSignLoadGame.style.top = "100vh";
			imgStreetSignExit.style.top = "100vh";
			imgMaria.style.top = "100vh";
			imgGila.style.top = "100vh";
			imgMelissa.style.top = "100vh";

			setTimeout( function () {
				imgStreetPole.classList.add('aniStreetPole');
			}, 50);

			setTimeout( function () {
				imgStreetPole.style.top = "22vh";
				imgStreetSignNewGame.classList.add('aniStreetSignNewGame');
			}, 130);

			setTimeout( function () {
				imgStreetSignNewGame.style.top = "45vh";
				imgStreetSignLoadGame.classList.add('aniStreetSignLoadGame');
			}, 200);

			setTimeout( function () {
				imgStreetSignLoadGame.style.top = "53vh";
				imgStreetSignExit.classList.add('aniStreetSignExit');
			}, 270);

			setTimeout( function () {
				imgStreetSignExit.style.top = "60vh";
				imgMaria.classList.add('aniMaria');
			}, 450);

			setTimeout( function () {
				imgMaria.style.top = "45vh";
				imgGila.classList.add('aniGila');
			}, 510);

			setTimeout( function () {
				imgGila.style.top = "40vh";
				imgMelissa.classList.add('aniMelissa');
			}, 570);

			setTimeout( function () {
				imgBackground.classList = "";
				imgStreetPole.classList = "";
				imgStreetSignNewGame.classList = "";
				imgStreetSignLoadGame.classList = "";
				imgStreetSignExit.classList = "";
				imgMaria.classList = "";
				imgGila.classList = "";
				imgGila.classList = "";
				imgMelissa.classList = "";

				
				
				
				imgMelissa.style.top = "55vh";
			}, 1500);

            break;
		default: // First time prompt
			setElement(document.body, 'div', 'cntFirstTimePopup', '', '', '', false, false);
			setElement(cntFirstTimePopup, 'label', 'lblHeader', '', 'INFORMATION', 'label', true, false);
			setElement(cntFirstTimePopup, 'label', 'lblInformation00', '', 'This website uses cookies to autosave progress.', 'label', true, false);
			setElement(cntFirstTimePopup, 'label', 'lblInformation01', '', 'To avoid loss of progress, ensure that your browser does not delete cookies upon close for this website.', 'label', true, false);
			setElement(cntFirstTimePopup, 'label', 'lblInformation01', '', 'Nevertheless, enjoy the experience!', 'label', true, false);
			setElement(cntFirstTimePopup, 'input', 'btnOK', 'button', 'OK', 'button', false, false);
			setElement(document.body, 'audio', 'audFirstClick', 'audio/ogg', 'aud/firstClick.ogg', '', false, true);
	}
}