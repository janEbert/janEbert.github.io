class MonospaceToggle {
	static init() {
		const checkbox = document.getElementById("monospace-toggle");
		checkbox.addEventListener("change", MonospaceToggle.toggle);
	}

	static toggle(changeEvent) {
		const checkbox = changeEvent.target;
		const styleId = "deactivate-monospace";
		if (checkbox.checked) {
			MonospaceToggle.deactivate(styleId);
		} else {
			removeElementById(styleId);
		}
	}

	static deactivate(styleId) {
		const deactivateMonospaceStyle = document.createElement("style");
		deactivateMonospaceStyle.id = styleId;
		deactivateMonospaceStyle.innerText = `#theme-togglers, article, address {
			font-family: var(--sans-fonts);
		}`;
		document.head.appendChild(deactivateMonospaceStyle);
	}
}


class BrightnessModeToggle {
	static init() {
		const checkbox = document.getElementById("brightness-mode-toggle");
		checkbox.addEventListener("change", BrightnessModeToggle.toggle);
	}

	static toggle(changeEvent) {
		const checkbox = changeEvent.target;
		const enableLightMode = window
			  .matchMedia("(prefers-color-scheme: dark)")
			  .matches;
		const styleId = "other-brightness-mode";

		if (checkbox.checked) {
			BrightnessModeToggle.activateOther(enableLightMode, styleId);
		} else {
			BrightnessModeToggle.toggleTransitions();
			removeElementById(styleId);
			BrightnessModeToggle.toggleTransitions();
		}
	}

	static activateOther(enableLightMode, styleId) {
		const otherBrightnessModeStyle = document.createElement("style");
		otherBrightnessModeStyle.id = styleId;

		const brightnessMode = enableLightMode ? "light" : "dark";
		otherBrightnessModeStyle.innerText = `body {
			color: var(--text-color-${brightnessMode});
			background-color: var(--background-color-${brightnessMode});
		}`;

		BrightnessModeToggle.toggleTransitions();
		document.head.appendChild(otherBrightnessModeStyle);
		BrightnessModeToggle.toggleTransitions();
	}

	static toggleTransitions() {
		const titleNameStyle = document.getElementById("title-name").style;
		if (titleNameStyle.transitionDuration === "0s") {
			sleep(100).then(() =>
				titleNameStyle.transitionDuration = "var(--title-name-transition-duration)"
			);
		} else {
			titleNameStyle.transitionDuration = "0s";
		}
	}
}


function removeElementById(id) {
	const element = document.getElementById(id);
	element && element.remove();
}


function sleep(ms) {
	return new Promise((resolve) => window.setTimeout(resolve, ms));
}


window.addEventListener("load", (event) => {
	MonospaceToggle.init();
	BrightnessModeToggle.init();
});
