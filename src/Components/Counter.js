import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const Counter = () => {
  const [state, setState] = useState(0);

  const increment = () => {
    setState(state + 1);
  };

  const decrement = () => {
    setState(state - 1);
  };
  return (
    <div>
      <div className="grid">
        <div className="col-4">
          <Card className="mt-2 shadow-4 bg-purple-400">
            <h3 className="text-2xl mt-0">{state}</h3>
            <Button
              onClick={increment}
              label="Increment"
              className="p-button-success"
            />
            <Button
              onClick={decrement}
              label="Increment"
              className="p-button-warning ml-2"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Counter;
