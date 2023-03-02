const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

{//Début sous-bloc question 1
let output = entrepreneurs.filter(entrepreneurs => entrepreneurs.year >= 1970 && entrepreneurs.year <1980 );
for(var i=0; i<output.length; i++){
  console.log(output[i].first, output[i].last, output[i].year)
};
}//Fin sous-bloc 1

{//Début sous-bloc question 2
let first_last_name = entrepreneurs.map((entrepreneurs) => entrepreneurs.first + " " + entrepreneurs.last);
console.log(first_last_name);
}//Fin sous-bloc 2

{//Début sous-bloc question 3
const today = new Date();
let current_year = today.getFullYear();

const ages = entrepreneurs.map(entrepreneur => ({ first: entrepreneur.first, last: entrepreneur.last, age: current_year - entrepreneur.year }));
for(var i=0; i<ages.length; i++){
  console.log(ages[i].first, ages[i].last, ages[i].age +" ans")
};
}//Fin sous-bloc 3

{//Début sous-bloc question 4
  let first_last_name = entrepreneurs.map((entrepreneurs) => entrepreneurs.last + " " + entrepreneurs.first);
  first_last_name.sort();
  console.log(first_last_name);
}//Fin sous-bloc 4

