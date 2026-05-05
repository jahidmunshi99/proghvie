"use client"

import {useState} from "react"
import AddUserButton from "../components/AddUserButton"
import UserForm from "../components/forms/UserForm.js"


const TopActionModal = () => {
    const [show, setShow] = useState(false)
    const handleShowUserModal = ()=>{
        setShow(!show)
    }
  return (
    <>
        <h1 className="text-2xl">Wellcome to Home Page</h1>
        <div className="mt-5">
          <AddUserButton handleShow = {handleShowUserModal}/>
          {show && <UserForm handleShow = {handleShowUserModal}/>}
        </div>
    </>
  )
}

export default TopActionModal