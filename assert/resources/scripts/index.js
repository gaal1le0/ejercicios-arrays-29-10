let undefined;
const sequence = [10, 4, 8, 27.4, 500, null, undefined, 100, 25, 40, 31, 20, 17, 1890, 13, 42];
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const cleanObjectFunction = (array) =>{
    let internalFilteredArr = [];
    for(let i in array){
        if(typeof array[i] === "number"){
            internalFilteredArr.push(array[i]);
        }
    }
    return internalFilteredArr;
}

function sortArrLargeToSmall(array){
    let internal_Response = cleanObjectFunction(array)
	let swapped = true;
	do {
		swapped = false;
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return internal_Response;
}

function sortArrSmalltoLarge(array) {
    let internal_Response = cleanObjectFunction(array)
	let swap = true;
	do {
		swap = false;
		for (let j = 0; j > array.length; j++) {
			if (array[j] < array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				swap = true;
			}
		}
	} while (swap);
	return internal_Response;
}

const averageOfArray = (array)=>{
    let internalFilteredArr = cleanObjectFunction(array);
    let average = 0;
    for (let i of internalFilteredArr){
        average += i;
    }
    return Math.floor(average/internalFilteredArr.length);
}


function validateLetter(number, letter){
    let modulo = number % 23;
    (letter === letrasDNI[modulo])? true : false;
  
} 

function validateDNI(documento){
    let number = documento.slice(0, -1);
    let letter = documento.slice(-1);

    if (!validateNumber(number)){
        return `${"El número de DNI '" + number + "' ¡NO ES VÁLIDO!"}`
    } else if (!validateLetter(number, letter)){
        return `${"La letra '" + letter + "' ¡NO SE CORRESPONDE con el número de DNI indicado!"}`
    } else{
        return `${"¡El DNI '" + documento + "' es válido!"}`
    }
}

