import { playSound } from './playSound';

export const generateElement = (keyword) => {
	const newElement = document.createElement('card-element');
	newElement.setType(keyword);
	return newElement;
}; // Generate

export const setFeedback = (element, mood) => {
	const MOODS = {
		positive: 'new',
		negative: 'bad',
		duplicated: 'bad',
	};

	const resetElement = (element) => element.classList.remove(MOODS[mood]);

	playSound(mood);
	element.classList.add(MOODS[mood]);
	setTimeout(() => resetElement(element), 500);
};
