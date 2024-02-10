import React, { useState } from 'react'
import Layout from '../components/Layout'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {


  const[name, setName]= useState("")
  const[email, setEmail]= useState("")
  const[password, setPassword]= useState("")
  const[phone, setPhone]= useState("")
  const[address, setAddress]= useState("")

  const navigate = useNavigate();

  const registerUser = async (e)=>{
    e.preventDefault();
    // console.log(name, email, password, phone, address)
    try {
      let res = await axios.post("http:localhost:5000/api/auth/register", {name, email, password, phone, address});
      if(res.data.success){

        toast("User has been register succesfuly...!!")
        navigate("/login")
      }else{
        toast.error("Something went wrong")
      }
    } catch (error) {
      toast.error("Error in registration")
    }
    
  }

  return (
    <Layout>
      <div className="container h-100 w-75">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2 text-primary">Registation Form</h1>
                {/* <p className="lead">
                  Start creating the best possible user experience for you customers.
                </p> */}
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <form>
                      <div className="form-group">
                        <label>Name</label>
                        <input className="form-control form-control-lg" onChange={(e)=>setName(e.target.value)} type="text" name="name" value={name} placeholder="Enter your name" />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input className="form-control form-control-lg" onChange={(e)=>setEmail(e.target.value)} type="email" name="email" value={email} placeholder="Enter your email" />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input className="form-control form-control-lg" onChange={(e)=>setPassword(e.target.value)} type="password" name="password" value={password} placeholder="Enter password" />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input className="form-control form-control-lg" onChange={(e)=>setPhone(e.target.value)} type="text" name="phone" value={phone} placeholder="Enter your phone" />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input className="form-control form-control-lg" onChange={(e)=>setAddress(e.target.value)} type="text" name="address" value={address} placeholder="Enter your address" />
                      </div>
                      <div className="text-center mt-3">
                        <button onClick={registerUser} className="btn btn-lg btn-primary">Sign up</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Register

