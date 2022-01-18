import getClasses from './getClasses';

console.log('ran from index.js');

getClasses();

const obj = {a: 'alpha', b: 'bravo'};
const newObj = {...obj, c: 'charlie'};
console.log(newObj);

// It will not transpiled by babel because this method is new javascript feature so we need polyfill.
// When you looked at bundle.js, you will find includes method is not transpiled. 
// You will see this code return true in the console because we are using modern browser.
// If we use old version browser, we will not get this boolean result.
// Babel helps us backward backward compatibility. 
console.log(['a', 'b', 'c'].includes('b'))
