import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { api } from '../../helpers/api'
import { useNavigate } from 'react-router-dom';
 
function UpdateAppartment() {
    const [message,setMessage] = useState(false);
    const navigate = useNavigate();
    const params = useParams()
    const [data, setData] = useState({})

    const inputHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    // get the specific appartment data
    const getOneAppartement = (id) => {
    api.get(`/appartement/getoneappartement/${id}`, {
    })
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

 // update appartment
    const updateAppartement = (e) => {
    e.preventDefault()
    api.put(`/appartement/updateappartement/${params.id}`, data, {
        // headers: { Authorization: `Bearer ${token}` },
    })
        .then((response) => {
            navigate('/appartments');
        })
        .catch((error) => {
            console.log(error)
            setMessage(error.response.data.message);
        })
    }
        
        useEffect(() => {
            getOneAppartement(params.id)
        }, [params.id])

    return (
        <>
            <div className="p-6 rounded bg-gray-700 w-2/4 mx-auto mt-5 bg-gray-800">
                <h1 className="text-2xl font-medium text-gray-300 text-center py-2">
                    Update Appartment
                </h1>
                <form onSubmit={updateAppartement} className="w-full">
                {message && <div className=' alert alert-danger mt-5 w-100 py-1 text-center border border-0 border-darck text-white'> {message}</div>}
                    <div className="form-group mb-6">
                        <label htmlFor="">Imueble</label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-white focus:outline-none bg-gray-600"
                            placeholder="imeuble"
                            name='imeuble'
                            value={data.imeuble}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="">Etage</label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-whitebg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-white focus:outline-none bg-gray-600"
                            placeholder="etage"
                            name='etage'
                            value={data.etage}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="">Appartement</label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-whitebg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-white focus:outline-none bg-gray-600"
                            placeholder="appartement"
                            name='appartement'
                            value={data.appartement}
                            onChange={inputHandler}
                        />
                    </div>
                 
                    <div className="text-center">
                    <button
                        type="submit"
                        className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs rounded shadow-md hover:bg-blue-700 hover:shadow-lg foc:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out bx-4"
                    >
                        Submit
                    </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UpdateAppartment
