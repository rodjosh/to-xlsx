const xlsx = require('xlsx');

const myObject = [{
	"name": "Joshua",
	"lastname": "Rodriguez",
	"country": "El Salvador",
	"age": 18
}];

const myData = [];

function setProfile(name, lastname, country, age) {
	myData.push({
		name: name,
		lastname: lastname,
		country: country,
		age: age
	});
}

setProfile("Joshua", "Rodriguez", "El Salvador", 18);
setProfile("Laura", "Carter", "United States", 54);
setProfile("Kyle", "Tosh", "Canada", 42);

const workbook = xlsx.utils.book_new();
const worksheet = xlsx.utils.json_to_sheet(myData);

xlsx.utils.book_append_sheet(workbook, worksheet, 'Profiles');
console.log(workbook);

xlsx.writeFile(workbook, 'example.xlsx');