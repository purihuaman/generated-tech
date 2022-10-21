const ALL_ELEMENTS = import.meta.glob('../../../public/assets/icons/*.svg');
const INITIAL_ELEMENTS = {
	'../../../public/assets/icons/html.svg': null,
	'../../../public/assets/icons/css.svg': null,
	'../../../public/assets/icons/javascript.svg': null,
	'../../../public/assets/icons/web components.svg': null,
	'../../../public/assets/icons/terminal.svg': null,
};

const removePathAndExtension = (elements) => {
	const FILES = Object.keys(elements);
	return FILES.map((element) =>
		element.replace('../../../public/assets/icons/', '').replace('.svg', '')
	);
};

export const initialElements = removePathAndExtension(INITIAL_ELEMENTS);
export const allElementsFromImages = removePathAndExtension(ALL_ELEMENTS);
