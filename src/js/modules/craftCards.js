import { elements } from '../api/elements';

const keys = Object.keys(elements);

const craftCards = (firstElement, secondElement) => {
	const [first, second] = [firstElement, secondElement].sort();

	const result = keys.find((key) =>
		elements[key].some(([left, right]) => left === first && right === second)
	);

	if (result) {
		document.querySelector('score-board').incElements();
	}

	return result ? [result] : [];
};

export { craftCards };
