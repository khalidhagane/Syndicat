import { Link } from "react-router-dom"
import { useState,useEffect } from 'react'
import { useParams } from "react-router-dom"
import { api } from '../../helpers/api'
import { useNavigate } from 'react-router-dom';


function UpdatePayment() {

    const navigate = useNavigate();
    const [data, setData] = useState({})
    
    
    // const createAppartment = (e) => {
    //     e.preventDefault()

    //     api.post("/appartements", data, {
    //         // headers: { Authorization: `Bearer ${token}` },
    //     })
    //         .then((response) => {
    //             setSucc(response.data.message)
    //             // console.log(response)
    //         })
    //         .catch((err) => {
    //             setErr(err.response?.data)
    //             console.log(err)
    //         })
    // }

    const [clients, setClient] = useState([])
    const getClients = async()=>{
        await api.get('/client/getallclient').then((Response)=>{
        setClient(Response.data);
      }).catch((error)=>{
        console.log(error);
      })
    }

    const [appartements, setAppartement] = useState([])
                const getAppartements = async()=>{
                    await api.get('/appartement/getallappartement').then((Response)=>{
                    setAppartement(Response.data);
                  }).catch((error)=>{
                    console.log(error);
                  })
                }
                
               

                  const params = useParams()
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
                    getAppartements()
                    getClients()
                    getOnePaiement(params.id)
                }, [params.id])
            



                  const updatePaiement = (e) => {
                    console.log('updatttttid',params.id);

                    console.log('updattttt',data);
                    
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
                    Update Payment
                </h1>
                <form onSubmit={updatePaiement} className="w-full">
                    <div className="form-group mb-6">
                        <label htmlFor="">Prix</label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-white focus:outline-none bg-gray-600"
                            name="prix"
                            value={data.prix}
                            placeholder="prix"
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="">Date</label>
                        <input
                            type="date"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-whitebg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-white focus:outline-none bg-gray-600"
                            name="date"
                            value={data.date}
                            placeholder="date"
                        />
                    </div>
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
                            Appartment 
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

export default UpdatePayment
