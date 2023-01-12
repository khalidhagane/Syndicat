import { Link } from "react-router-dom"
import { useState,useEffect } from 'react'
import { api } from '../../helpers/api'
// import { Navigate } from 'react-router-dom'

function Client() {
  

              const [client, setClient] = useState([])
                const getClients = async()=>{
                    await api.get('/client/getallclient').then((Response)=>{
                    setClient(Response.data);
                    // console.log('data',Response.data)
                    // console.log('Appartement',appartements)
                  }).catch((error)=>{
                    console.log(error);
                  })
                }
                
                useEffect(() => {
                    getClients()
                  },[]);

                  const deleteClient = async (id) =>{
                    await  api.delete(`/client/deleteclient/${id}`)
                    .then((response)=>{
                    getClients()
                    }).catch((error)=>{
                      console.log(error);
                    })
                  }

                //   const removeAppartment = (id) => {
                //     api.delete(`/appartement/deleteappartement/${id}`, {
                //         // headers: { Authorization: `Bearer ${token}` },
                //     })
                //         .then((response) => {
                //             let result = data.filter((appa) => appa._id !== id)
                //             setData(result)
                //         })
                //         .catch((error) => {
                //             console.log(error)
                //         })
                // }

    return (
        <>
       
            <div className="mt-4 mx-4">
                <div className="flex items-center justify-between p-2 my-2 bg-gray-800 rounded">
               
                    <h1 className="text-2xl  text-gray-300">
                        Clients
                    </h1>
                    <Link
                        to="/clients/create"
                        className="text-white bg-gray-600 font-medium rounded text-sm p-2.5 text-center"
                    >
                        Create New Client
                    </Link>
                </div>
                <div className="w-full overflow-hidden rounded shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-700 text-gray-400 bg-gray-800">
                                    <th className="px-4 py-3">
                                        Name
                                    </th>
                                    <th className="px-4 py-3 text-center">
                                        CIN
                                    </th>
                                    <th className="px-4 py-3 text-center">
                                        tele
                                    </th>
                                    <th className="px-4 py-3 text-center">
                                        Appartement
                                    </th>
                                    <th className="px-4 ml-2 text-center py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700 bg-gray-800">
                            {client.map((item)=>{
                        return(
                        
                         <tr className="bg-gray-800 hover:bg-gray-100 hover:bg-gray-900 text-gray-400">
                         <td className="px-4 py-3">
                             <div className="flex items-center text-sm">
                                 <div>
                                     <p className="font-semibold">
                                     {item.name}
                                     </p>
                                 </div>
                             </div>
                         </td>
                         <td className="px-4 py-3 text-sm text-center">
                         {item.cin}
                         </td>
                         <td className="px-4 py-3 text-sm text-center">
                         {item.tele}
                         </td>
                         <td className="px-4 py-3 text-sm text-center">
                         {item.id_appartement.appartement}
                         </td>
                         <td className="px-4 py-3 text-sm text-center">
                             <Link
                                 className=" text-white bg-gray-700 font-medium rounded text-sm px-3 py-2"
                                 to={`/clients/edit/${item._id}`}
                             >
                                 Update
                             </Link>

                             <Link 
                            onClick={() => deleteClient(item._id)}
                             className="mx-2 text-white bg-red-700 font-medium rounded text-sm px-3 py-2 text-center">
                                 Delete
                             </Link>
                         </td>
                     </tr>
                        )
                    })}
                               
                            </tbody>
                        </table>
                    </div>

                    {/* start pagination */}
                    {/* <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t border-gray-700 sm:grid-cols-9 text-gray-400 bg-gray-800">
                        <span className="flex items-center col-span-3">
                            Showing 21-30 of 100
                        </span>
                        <span className="col-span-2"></span>
                        <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                            <nav aria-label="Table navigation">
                                <ul className="inline-flex items-center">
                                    <li>
                                        <button
                                            className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                            aria-label="Previous"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="w-4 h-4 fill-current"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                    fill-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            1
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            2
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 text-white text-gray-800 transition-colors duration-150 bg-blue-600 bg-gray-100 border border-r-0 border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            3
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            4
                                        </button>
                                    </li>
                                    <li>
                                        <span className="px-3 py-1">...</span>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            8
                                        </button>
                                    </li>
                                    <li>
                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                            9
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                            aria-label="Next"
                                        >
                                            <svg
                                                className="w-4 h-4 fill-current"
                                                aria-hidden="true"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                    clip-rule="evenodd"
                                                    fill-rule="evenodd"
                                                ></path>
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </span>
                    </div> */}
                    {/* end pagination */}
                </div>
            </div>
        </>
    )
}

export default Client