import { type FormEvent } from "react";

export default function NewGoal() {

  function handleSubmit(event: FormEvent){
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" />
      </p>
      <p>
        <label htmlFor="summary">Summary</label>
        <input type="text" id="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
