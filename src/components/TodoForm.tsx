import { title } from "process";
import React, { FormEvent, useState } from "react";

const TodoForm: React.FC = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default TodoForm;
