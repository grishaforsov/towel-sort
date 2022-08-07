
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if(Array.isArray(matrix)) {
    matrix.map((elem, index) => {
      index % 2 === 0
      return elem.flat();
    });
  } else {
    return elem.reverse().flat();
  }

  return [];
}

