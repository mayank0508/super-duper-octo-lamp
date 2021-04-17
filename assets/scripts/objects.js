const movielist = document.getElementById('movie-list');
movielist.style['background-color'] ='red';
movielist.style.display = 'block';

// const advi = 'mayank1'
const key = 'mayank'

const person = {
  'first-name': 'John',
  sex: 'M',
  [key]: 'mm',
  hobbies: ['football', 'cricket'],
  greet: function() {
    alert('Hello')
  }
};

person.isAdmin = true;

delete person.sex;
// person.greet();

console.log(person);
console.log(person['mayank']);
console.log(person["first-name"]);