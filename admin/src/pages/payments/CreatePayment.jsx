import { useState, useEffect } from 'react'
import { api } from '../../helpers/api'
import { useNavigate } from 'react-router-dom';

function CreatePayment() {

    const [message,setMessage] = useState(false);
    const navigate = useNavigate();
    const [data, setData] = useState({})

    const inputHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

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

    const addPaiement = async(e)=>{
        // console.log('paiemantrrr',data);
        e.preventDefault();
        api.post('/paiement/addpaiement',data)
        .then((response)=>{
        navigate('/payments');
        }).catch((error)=>{
          console.log('errror',error);
          setMessage(error.response.data.message);
        })
      }

      useEffect(() => {
        getAppartements()
        getClients()
      },[]);


    return (
        <>
            <div className="p-6 rounded bg-gray-700 w-2/4 mx-auto mt-5 bg-gray-800">
                <h1 className="text-2xl font-medium text-gray-300 text-center py-2">
                    Create New Payment
                </h1>
                <form className="w-full">
                {message && <div className=' alert alert-danger mt-5 w-100 py-1 text-center border border-0 border-darck text-white'> {message}</div>}
                    <div className="form-group mb-6">
                        <label htmlFor="">Prix</label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-white focus:outline-none bg-gray-600"
                            placeholder="prix"
                            name='prix'
                            onChange={ inputHandler }
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="">Date</label>
                        <input
                            type="date"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-whitebg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-white focus:outline-none bg-gray-600"
                            placeholder="date"
                            name='date'
                            onChange={ inputHandler }
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
                        onClick={addPaiement}
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

export default CreatePayment
