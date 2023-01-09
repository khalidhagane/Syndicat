import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { api } from '../../helpers/api'
// import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

 
function UpdateAppartment() {
    const navigate = useNavigate();
    const params = useParams()
    console.log("params",params);

    const [data, setData] = useState({})
    // const [floors, setFloors] = useState([])
    // const [succ, setSucc] = useState()

    // get the specific appartment data
    const getOneAppartement = (id) => {
        // const id = params.id
        // console.log("kkkkkk id",params.id)
        api.get(`/appartement/getoneappartement/${id}`, {
            // headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                setData(response.data)
                // console.log('bbbbbb',response.data)
                // console.log('datrrr',data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        // get the specific appartment data
        getOneAppartement(params.id)
        // get all floors
        
    }, [params.id])


 // update appartment
 const updateAppartement = (e) => {
    
    console.log("dataaaaaa",data)
    console.log("params._id",params.id)

    e.preventDefault()

    api.put(`/appartement/updateappartement/${params.id}`, data, {
        
        // headers: { Authorization: `Bearer ${token}` },
    })
        .then((response) => {
            
            navigate('/appartments');
            
        })
        .catch((error) => {
            console.log(error)
        })
}

const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
}

    return (
        <>
            <div className="p-6 rounded bg-gray-700 w-2/4 mx-auto mt-5 bg-gray-800">
                <h1 className="text-2xl font-medium text-gray-300 text-center py-2">
                    Update Appartment
                </h1>
                <form onSubmit={updateAppartement} className="w-full">
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
                    {/* <div className="form-group mb-6">
                        <label
                            for="countries"
                            class="block mb-2 text-sm font-medium text-white"
                        >
                            Appartement
                        </label>
                        <select
                            id="countries"
                            class="outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option selected disabled>
                                Floor Number
                            </option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div> */}

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
