"use client"

import {useState} from "react"
import AddUserButton from "./buttons/AddUserButton.js"
import UserForm from "./UserForm.js"


const TopActionModal = () => {
    const [show, setShow] = useState(false)
    const handleShowUserModal = ()=>{
        setShow(!show)
    }
  return (
    <>
        <h1 className="text-2xl">Wellcome to Home Page</h1>
        <div className="mt-5">
          <AddUserButton handleShow={handleShowUserModal}/>
          {show && <UserForm handleShow = {handleShowUserModal} setShow = {setShow}/>}
        </div>
    </>
  )
}

export default TopActionModal