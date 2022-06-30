
// You should implement your task here.

module.exports = function towelSort(matrix) {
	if (matrix && matrix.length) {
		return matrix[0]
			.concat(
				...matrix
					.slice(1)
					.map((item, index) => (index % 2) ? item : item.reverse())
			);
	} else {
		return [];
	}
}
