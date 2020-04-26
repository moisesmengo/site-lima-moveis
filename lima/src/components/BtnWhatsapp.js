import React from 'react'
import wa from '../assets/whatsapp.png'

const BtnWhatsapp =  () => {
    return(
        <div className="bg-pink-100
                        hadow rounded
                        px-5 py-2 mt-6 sm:mt-0
                        flex flex-col sm:flex-row
                        items-center">
            <img src={wa}/>
            <div className="ml-2">
                <h3 className="font-bold text-2xl">Orçar seu projeto!</h3>
                <p className="text-xs">Projeto e orçamento sem compromisso.</p>
                <p className="font-bold">(84) 98843-2080</p>
            </div>
        </div>
    )
}

export default BtnWhatsapp