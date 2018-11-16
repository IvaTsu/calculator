const validateInput = (x, y) => {
	if (Number.isNaN(x) || Number.isNaN(y)) {
		return false;
	}
	if (!parseInt(x, 10) || !parseInt(y, 10)) {
		return false;
	}
	return true;
};

module.exports = validateInput;
