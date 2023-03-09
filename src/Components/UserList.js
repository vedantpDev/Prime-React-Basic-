import React, { useEffect, useState } from "react";
import { UserService } from "../service/UserService";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const UserList = () => {
  const [state, setState] = useState({
    loading: false,
    users: [],
    errorMessage: null,
  });

  useEffect(() => {
    const asyncFun = async () => {
      try {
        setState({ ...state, loading: true });
        let response = await UserService.getAllUsers();
        let { results } = response.data;
        setState({ ...state, loading: false, users: results });
      } catch (error) {
        setState({ ...state, errorMessage: error });
      }
    };
    asyncFun();
  }, []);

  const displayName = (rowData) => {
    return (
      <span>
        {rowData.name.title}. {rowData.name.first}
      </span>
    );
  };

  const displayImg = (rowData) => {
    return <img src={rowData.picture.thumbnail} />;
  };
  return (
    <div>
      UserList
      <div className="grid">
        <div className="col">
          <DataTable value={state.users}>
            <Column sortable header="SNO" field="login.uuid"></Column>
            <Column
              field="picture.thumbnail"
              header="img"
              body={displayImg}
            ></Column>
            <Column field="name" header="Name" body={displayName}></Column>
            <Column header={"Email"} field="email"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default UserList;
