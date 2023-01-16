import { Link } from "react-router-dom"
import { useState,useEffect } from 'react'
import { api } from '../../helpers/api'

function Payment() {

    const [paiements, setPaiement] = useState([])

                const getPaiements = async()=>{
                    await api.get('/paiement/getallpaiement').then((Response)=>{
                    setPaiement(Response.data);
                    // console.log('data',Response.data)
                    // console.log('Appartement',paiements)
                  }).catch((error)=>{
                    console.log(error);
                  })
                }

                useEffect(() => {
                    getPaiements()
                  },[]);

                const deletePaiement = async (id) =>{
                    // console.log("lllll",id);
                    await  api.delete(`/paiement/deletepaiement/${id}`)
                    .then((response)=>{
                    getPaiements()
                    }).catch((error)=>{
                      console.log(error);
                    })
                }



    return (
        <>
            <div className="mt-4 mx-4">
                <div className="flex items-center justify-between p-2 my-2 bg-gray-800 rounded">
                    <h1 className="text-2xl  text-gray-300">
                        Paiements
                    </h1>
                    <Link
                        to="/payments/create"
                        className="text-white bg-gray-600 font-medium rounded text-sm p-2.5 text-center"
                    >
                        Create New Payment
                    </Link>
                </div>
                <div className="w-full overflow-hidden rounded shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-700 text-gray-400 bg-gray-800">
                                    <th className="px-4 py-3">Prix DH</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">
                                        Appartement
                                    </th>
                                    <th className="px-4 py-3">Client</th>
                                    <th className="px-4 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700 bg-gray-800">
                            {paiements.map((item)=>{
                        return(
                                <tr className="bg-gray-800 hover:bg-gray-100 hover:bg-gray-900 text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            <div>
                                                <p className="font-semibold">
                                                {item.prix} 
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                    {item.date}
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                    {item.id_appartement?.appartement}
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                    {item.id_client?.name}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-center">
                                    <Link
                                        className=" text-white bg-gray-700 font-medium rounded text-sm px-3 py-2"
                                        to={`/payments/card/${item._id}`}
                                    >
                                        Voir
                                    </Link>
                                    <Link
                                        className=" text-white bg-gray-700 font-medium rounded text-sm px-3 py-2"
                                        to={`/payments/edit/${item._id}`}
                                    >
                                        Update
                                    </Link>

                                    <Link 
                                    onClick={() => deletePaiement(item._id)}
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
                </div>
            </div>
        </>
    )
}

export default Payment
