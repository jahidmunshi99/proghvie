"use client";

import { useState } from "react";
import AddButton from "../../components/buttons/AddButton.js";
import TargetFrom from "../../components/forms/TargetForm.js";
// import UserForm from "../components/forms/UserForm.js";

const TopActionModal = () => {
  const [show, setShow] = useState(false);
  const [newItem, setNewItem] = useState("");
  const handleShowUserModal = () => {
    setShow(!show);
  };
  return (
    <>
      <h1 className="text-2xl">Wellcome to Home Page</h1>
      <div className="mt-5">
        {<AddButton label={"Target"} handleShow={handleShowUserModal} />}
        {/* {show && <UserForm handleShow={handleShowUserModal} />} */}
        {show && (
          <TargetFrom
            newItem={setNewItem}
            setNewItem={setNewItem}
            handleClose={handleShowUserModal}
          />
        )}
      </div>
    </>
  );
};

export default TopActionModal;
