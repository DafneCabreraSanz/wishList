import { useState, useEffect } from "react";

function WishItem({ wish, onCompletedChange }) {

    const [age, setAge] = useState(0);

    useEffect(() => {
        //efunction body executed every time the porp wish.completed of the component changes
        let ageInterval;

        if (wish.completed) {
            clearInterval(ageInterval);
        } else {
            ageInterval = setInterval(() => {
                setAge((currentAge) => currentAge + 1);
            }, 1000);
        }
        return () => clearInterval(ageInterval);
    }, [wish.completed]);

  return (
    <li
      className={`wish-list__item 
              ${wish.completed && "wish-list__item--done"}
              ${age >= 5 && age < 10 && "wish-list__item--warn"}
              ${age >= 10 && "wish-list__item--danger"}
              `}
    >
      <input
        type="checkbox"
        checked={wish.completed}
        id={wish.id}
        onChange={(e) => onCompletedChange(e.target.checked)}
      />
      <label htmlFor={wish.id}>{wish.text}</label>
    </li>
  );
}

export default WishItem;