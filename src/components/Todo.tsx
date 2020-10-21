import React from "react";

type Props = {
  id: number;
  message: string;
};

const Todo: React.FC<Props> = ({ id, message }) => (
  <div>
    <p>
      <span>{id} - </span>
      {message}
    </p>
  </div>
);

export default Todo;
