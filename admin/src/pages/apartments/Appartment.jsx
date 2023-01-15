import { Link } from "react-router-dom"
import { useState,useEffect } from 'react'
import { api } from '../../helpers/api'
// import { Navigate } from 'react-router-dom'

function Appartment() {

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

                  const deleteAppartement = async (id) =>{
                    await  api.delete(`/appartement/deleteappartement/${id}`)
                    .then((response)=>{
                    getAppartements()
                    }).catch((error)=>{
                      console.log(error);
                    })
                  }

                  useEffect(() => {
                    getAppartements()
                  },[]);

    return (
        <>
            <div className="mt-4 mx-4">
                <div className="flex items-center justify-between p-2 my-2 bg-gray-800 rounded">
               
                    <h1 className="text-2xl  text-gray-300">
                        Appartments
                    </h1>
                    <Link
                        to="/appartments/create"
                        className="text-white bg-gray-600 font-medium rounded text-sm p-2.5 text-center"
                    >
                        Create New Appartment
                    </Link>
                </div>
                <div className="w-full overflow-hidden rounded shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-700 text-gray-400 bg-gray-800">
                                    <th className="px-4 py-3">
                                        Imueble
                                    </th>
                                    <th className="px-4 py-3 text-center">
                                        Etage
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
                            {appartements.map((item)=>{
                        return(
                        
                         <tr className="bg-gray-800 hover:bg-gray-100 hover:bg-gray-900 text-gray-400">
                         <td className="px-4 py-3">
                             <div className="flex items-center text-sm">
                                 <div>
                                     <p className="font-semibold">
                                     {item.imeuble}
                                     </p>
                                 </div>
                             </div>
                         </td>
                         <td className="px-4 py-3 text-sm text-center">
                         {item.etage}
                         </td>
                         <td className="px-4 py-3 text-sm text-center">
                         {item.appartement}
                         </td>
                         <td className="px-4 py-3 text-sm text-center">
                             <Link
                                 className=" text-white bg-gray-700 font-medium rounded text-sm px-3 py-2"
                                 to={`/appartments/edit/${item._id}`}
                             >
                                 Update
                             </Link>

                             <Link 
                            onClick={() => deleteAppartement(item._id)}
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

export default Appartment
