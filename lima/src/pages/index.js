import React from  'react'
import './styles.css'
import wa from '../assets/whatsapp.png'

const Logo = () => {
    return(
        <div>
            <h1 className="text-yellow-400 font-bold">Lima Móveis</h1>
            <p className="text-yellow-200 ml-2">Planejados</p>
        </div>
    )
}

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

const Header = ({children}) => {
    return(
        <div className="p-4 bg-pink-900 sm:flex justify-between items-center">
            {children}
        </div>
    )
}

const Index = () => {
    return(
        <div>
            <Header>
                <Logo/>
                <div>
                    <BtnWhatsapp/>
                </div>
            </Header>
        </div>
    )
}

export default Index