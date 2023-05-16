import { SimpleObserver } from "./simpleObserver";
import SimpleSubject from "./simpleSubject";

const simpleObserverMain = () => {
  const simpleSubject = new SimpleSubject();
  const simpleObserver = new SimpleObserver(simpleSubject);
  const simpleSimpleObserver = new SimpleObserver(simpleSubject);

  simpleSubject.setValue(80);

  console.log(simpleSubject);

  simpleSubject.removeObserver(simpleObserver);

  console.log(simpleSubject);

  simpleSubject.setValue(90);

  console.log(simpleSubject);

  simpleSubject.removeObserver(simpleSimpleObserver);

  console.log(simpleSubject);

  function lengthOfLongestSubstring(s: string): number {
    const data = s.split("");
    const notDuplication = data.reduce((prev, current) => {
      if (prev.charAt(current.length - 1) === current) {
        return prev;
      }

      return prev + current;
    }, "");

    console.log(notDuplication);

    return 0;
  }

  console.log(lengthOfLongestSubstring("abcabcbb"));
};

export default simpleObserverMain;
