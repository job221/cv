

function sortBB(arreglo) {
	for (let val1 = 0; val1 < arreglo.length; i++) {
		for (let val2 = 0; val2 < arreglo.length; val2++) {
			if (arreglo[val2] > arreglo[val2 + 1]) {
				let temp = arreglo[val2];
				arreglo[val2] = arreglo[val2 + 1];
				arreglo[val2 + 1] = temp;
			}
		}
	}	return arreglo;
}

list = [3, 7, 2, 0, 6, 1, 5, 8, 4];
console.log(sortBB(arreglo));