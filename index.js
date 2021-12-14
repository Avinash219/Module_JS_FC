import { age, name } from './employee.js';
import * as _spouse from './spouse.js';
import techStack from './stream.js';

let eName = name('ABC');
let sName = _spouse.name('XYZ');
console.log(`My name is ${eName} and age is ${age}`);
console.log(`My Tech stack is ${techStack()}`);
console.log(`My Spouse Name is ${sName} and age is ${_spouse.age}`);

document.querySelector('button').addEventListener('click', handleClick);
function handleClick() {
  import('./workArena.js').then((module) => {
    console.log(`My Work arena is ${module.workArena()}`);
  });
}
