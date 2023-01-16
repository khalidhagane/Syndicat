import './home.css'
import { useState } from 'react'
import { api } from '../helpers/api'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'


function Home() {

    const {setAuth} = useContext(UserContext)
    const [user, setUser] = useState({})

    const [noErr, setNoErr] = useState(false)
    const [message,setMessage] = useState(false);
    
    const inputHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    
    const login = (e) => {
    
        e.preventDefault()
    
        api.post('/auth/login', user, { withCredentials: true })
            .then((response) => {
                setAuth(response.data)
                localStorage.setItem('token', response.data.token)

                setNoErr(true)
                // console.log(response)

            })
            .catch(err => {
                // console.log(err.response.data);
                setNoErr(false)
                setMessage(err.response.data.message);
              })
    }

    return (
        <>
        {/*  bg-gray-900*/}
            <section className="flex justify-center items-center h-screen ">
                <div className="max-w-md w-full  rounded p-6 space-y-4">
                    <div className="mb-4">  
                        <h2 className="text-xl font-bold text-white text-center">Sign In</h2>
                    </div>
                    <form onSubmit={ login }>
                    {message && <div className=' alert alert-danger mt-5 w-100 py-1 text-center border border-0 border-darck text-white'> {message}</div>}
                        <div className="mb-3" >
                        <label className='text-white'>Email address</label>
                            <input className="w-full p-3 my-3 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="email" placeholder="Email" name='email' onChange={ inputHandler } />
                        </div>
                        <div className="mb-3">
                        <label className='text-white'>Password</label>
                            <input className="w-full p-3 mb-3 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="password" placeholder="Password" name='password' onChange={ inputHandler }/>
                        </div>
                        <div>
                            <button type='submit' className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
                        </div>
                        
                    </form>
                </div>
                { noErr && <Navigate to='/dashboard' /> }
            </section>
        </>
    )
}

export default Home