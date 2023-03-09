import { Card } from "primereact/card";
import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

const Greet = () => {
  const toast = useRef(null);

  const [state, setState] = useState({
    msg: "",
  });

  const greet = (e) => {
    e.preventDefault();
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: `${state.msg}`,
      life: 3000,
    });
  };

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="grid">
      <div className="col-4">
        <Card className="bg-black-alpha-20 m-4">
          <form>
            <InputText
              placeholder="Message"
              value={state.msg}
              name="msg"
              onChange={changeHandler}
            />
            <Button
              label="Greet"
              className="p-button-success"
              onClick={greet}
            />
          </form>
        </Card>
        <Toast ref={toast} />
      </div>
    </div>
  );
};

export default Greet;
