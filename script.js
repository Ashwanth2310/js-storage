const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};
// Challenge 1: Store user data in localStorage
const userData = {
  firstName: 'Rajat',
  lastName: 'Ash', // Add the last name here
  age: 25,
  country: 'Australia', // Add the country here
  state: 'Victoria', // Add the state here
};

localStorage.setItem('userData', JSON.stringify(userData));
console.log('localStorage after storing user data:', localStorage);

// Challenge 2: Get user data from localStorage
const retrievedUserData = JSON.parse(localStorage.getItem('userData'));
console.log('Retrieved user data from localStorage:', retrievedUserData);

// Challenge 3: Remove "state" from localStorage
localStorage.removeItem('userData');
console.log('localStorage after removing "state":', localStorage);

// Challenge 4: Clear all data from localStorage
localStorage.clear();
console.log('localStorage after clearing all data:', localStorage);

// Challenge 5: Convert object to string using JSON.stringify()
const jsonString = JSON.stringify(user);
console.log('Stringified user object:', jsonString);
