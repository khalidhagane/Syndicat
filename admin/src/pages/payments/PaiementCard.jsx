import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { api } from '../../helpers/api'
// import { useNavigate } from 'react-router-dom';
import jspdf from'jspdf'
 
function PaiementCard() {
    // const navigate = useNavigate();
    const params = useParams()
    const [data, setData] = useState({})

    // get the specific appartment data
    const getOnePaiement = (id) => {
        api.get(`/paiement/getonepaiement/${id}`, {
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
    }, [])

    const generatePDF = () => {
    // console.log('lllllll');
        const doc = new jspdf('p', 'pt', 'a4')
        doc.html(document.querySelector('#paiment'), {
          callback: function (pdf) {
            pdf.save('paiment.pdf')
          }
        })
    }

    return (
        <>
        <div className="p-6 rounded bg-gray-700 w-3/4 mx-auto mt-5 bg-gray-800" >
            <div   className="p-6 rounded bg-gray-700  mx-auto mt-5 bg-gray-800"  id='paiment'>
                <h1 className="text-2xl font-medium text-gray-300 text-center py-2">
                    paiement
                </h1>
                <div  className="w-full">
                    <div className="form-group mb-6">
                        <label htmlFor=""
                         for="countries"
                         class=" mb-2 text-sm font-medium text-white "
                        >Prix : </label>
                       
                        <span className='px-4 text-white '> {data.prix} DH</span>
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor=""
                         for="countries"
                         class=" mb-2 text-sm font-medium text-white"
                        >Date : </label>
                       
                         <span className='px-4 text-white '> {data.date}</span>
                    </div>
                    
                    <div className="form-group mb-6 ">
                        <label
                            for="countries"
                            class=" mb-2 text-sm font-medium text-white "
                        >
                           Appartement :
                        </label>
                        <span className='px-4 text-white '>{data.id_appartement?.appartement}</span>
                        
                    </div>
                    <div className="form-group mb-6">
                        <label
                            for="countries"
                            class=" mb-2 text-sm font-medium text-white"
                        >
                            Client :
                        </label>
                      <span className='px-4 text-white '>{data.id_client?.name}</span>
                        
                    </div>
                    <div className="text-center">
                    
                    </div>
                </div>
            </div>
            <div className='text-center'>
            <button
                        type= 'button'
                        onClick={generatePDF}
                        className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs rounded shadow-md hover:bg-blue-700 hover:shadow-lg foc:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out bx-4"
                    >
                        telechager pdf
                    </button>
            </div>
            </div>
        </>
    )
}

export default PaiementCard
