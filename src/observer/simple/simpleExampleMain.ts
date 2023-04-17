import { SimpleObserver } from "./SimpleObserver";
import SimpleSubject from "./SimpleSubject";

const simpleSubject = new SimpleSubject();
const simpleObserver = new SimpleObserver(simpleSubject);

simpleSubject.setValue(80);

console.log(simpleSubject);

simpleSubject.removeObserver(simpleObserver);

console.log(simpleSubject);

simpleSubject.setValue(90);

console.log(simpleSubject);
