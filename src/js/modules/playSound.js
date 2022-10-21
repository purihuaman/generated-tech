const SOUNDS = {
	plop: new Audio('/assets/sounds/plop.mp3'),
	negative: new Audio('/assets/sounds/negative.mp3'),
	positive: new Audio('/assets/sounds/positive.mp3'),
	bsod: new Audio('/assets/sounds/bsod.mp3'),
	duplicated: new Audio('/assets/sounds/duplicated.mp3'),
};

export const playSound = (name) => {
	const sound = SOUNDS[name];

	sound.currentTime = 0;
	sound.play();
};
