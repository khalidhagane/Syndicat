import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { api } from '../../helpers/api'
import { useNavigate } from 'react-router-dom';
 
function UpdateClient() {
    const navigate = useNavigate();
    const params = useParams()
    const [data, setData] = useState({})

    const [appartements, setAppartement] = useState([])
    const getAppartements = async()=>{
        await api.get('/appartement/getallappartement').then((Response)=>{
        setAppartement(Response.data);
        // console.log('data',Response.data)
        // console.log('Appartement',appartements)
      }).catch((error)=>{
        console.log(error);
      })
    }
    
    useEffect(() => {
        getAppartements()
      },[]);

    // get the specific appartment data
    const getOneClient = (id) => {
        api.get(`/client/getoneclient/${id}`, {
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
        getOneClient(params.id)
    }, [params.id])

 // update appartment
 const updateClient = (e) => {
    e.preventDefault()
    api.put(`/client/updateclient/${params.id}`, data, {
        // headers: { Authorization: `Bearer ${token}` },
    })
        .then((response) => {
            navigate('/clients');
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
                <form onSubmit={updateClient} className="w-full">
                    <div className="form-group mb-6">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-white focus:outline-none bg-gray-600"
                            placeholder="imeuble"
                            name='name'
                            value={data.name}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="">CIN</label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-whitebg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-white focus:outline-none bg-gray-600"
                            placeholder="cin"
                            name='cin'
                            value={data.cin}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="">Tele</label>
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-whitebg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-white focus:outline-none bg-gray-600"
                            placeholder="tele"
                            name='tele'
                            value={data.tele}
                            onChange={inputHandler}
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

export default UpdateClient
