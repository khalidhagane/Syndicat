import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { api } from '../../helpers/api'
import { useNavigate } from 'react-router-dom';
 
function UpdatePayments() {
    const navigate = useNavigate();
    const params = useParams()
    const [data, setData] = useState({})

    const [appartements, setAppartement] = useState([])
    const [clients, setClient] = useState([])

    const getAppartements = async()=>{
        await api.get('/appartement/getallappartement').then((Response)=>{
        setAppartement(Response.data);
      }).catch((error)=>{
        console.log(error);
      })
    }
    
    const getClient = async()=>{
        await api.get('/client/getallclient').then((Response)=>{
        setClient(Response.data);
      }).catch((error)=>{
        console.log(error);
      })
    }

    // get the specific appartment data
    const getOnePaiement = (id) => {
        api.get(`/paiement/getonepaiement/${id}`, {
            // headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getOnePaiement(params.id)
        getClient()
        getAppartements()
        console.log('clients',clients);
    }, [params.id])

 // update appartment
 const updatePaiement = (e) => {
    e.preventDefault()
    api.put(`/paiement/updatepaiement/${params.id}`, data, {
        // headers: { Authorization: `Bearer ${token}` },
    })
        .then((response) => {
            navigate('/payments');
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
                    Update Client
                </h1>
                <form onSubmit={updatePaiement} className="w-full">
                    <div className="form-group mb-6">
                        <label htmlFor="">Prix</label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-white focus:outline-none bg-gray-600"
                            placeholder="prix"
                            name='prix'
                            value={data.prix}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="">Date</label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-whitebg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-white focus:outline-none bg-gray-600"
                            placeholder="date"
                            name='date'
                            value={data.date}
                            onChange={inputHandler}
                        />
                    </div>
                    {/* <div className="form-group mb-6">
                        <label htmlFor="">Appartement</label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-whitebg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-white focus:outline-none bg-gray-600"
                            placeholder="tele"
                            name='tele'
                            value={data.tele}
                            onChange={inputHandler}
                        />
                    </div> */}
                    <div className="form-group mb-6">
                        <label
                            for="countries"
                            class="block mb-2 text-sm font-medium text-white"
                        >
                            Appartment 
                        </label>
                        <select
                            id="countries"
                            class="outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            name='id_appartement'
                            value={data.id_appartement}
                            onChange={ inputHandler }
                        >
                           
                            <option selected disabled>
                                Appartment 
                            </option> 
                            {appartements.map((item)=>{
                        return(
                            <option value={item._id} >{item.appartement}</option>
                            
                            )
                        })}
                        </select>
                    </div>
                    <div className="form-group mb-6">
                        <label
                            for="countries"
                            class="block mb-2 text-sm font-medium text-white"
                        >
                            Client 
                        </label>
                        <select
                            id="countries"
                            class="outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            name='id_client'
                            value={data.id_client}
                            onChange={ inputHandler }
                        >
                           
                            <option selected disabled>
                                Client 
                            </option> 
                            {clients.map((item)=>{
                        return(
                            <option value={item._id} >{item.name}</option>
                            
                            )
                        })}
                        </select>
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

export default UpdatePayments
