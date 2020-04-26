import React from  'react'
import './styles.css'
import BtnWhatsapp from '../components/BtnWhatsapp'
import Logo from '../components/Logo'
import img from '../assets/img.png'
import selo from '../assets/selo.png'
import { Helmet } from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'

const Header = ({children}) => {
    return(
        <div className="p-4 bg-pink-900 sm:flex justify-between items-center">
            {children}
        </div>
    )
}

const Hero = () => {
    return(
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="p-8">
                <h2 className="font-bold text-2xl">Móveis Planejados</h2>
                <p className='text-xl'>Comerciais e residenciais para todos os ambientes</p>
                <p className='text-gray-700'>Atendemos Serra de São Bento e região</p>
            </div>
            <div>
                <img src={img}/>
            </div>
        </div>
    )
}

const Footer = () =>{
    return(
        <div className="p-4 bg-pink-800 sm:flex justify-between items-center">
            <div className="text-center">
                <h5 className="text-yellow-200 font-bold">Atendemos Serra de São Bento e região</h5>
                <p className="text-yellow-200">Rua Sei lá - Conju. Frei Damião</p>
                <p className="text-yellow-200">Serra de São Bento/RN</p>
                <h5 className="text-yellow-300">Atendemos das 8h às 15h</h5>
            </div>
            <BtnWhatsapp/>
        </div>
    )
}

const Index = () => {
    const {site} = useStaticQuery(graphql`
        query MyQuery{
            site{
                siteMetaData{
                    title
                }
            }
        }
    `)
    const selos = [1,2,3,4]
    const projetos = [1,2,3,4]
    return(
        <div className="bg-pink-100">
            <Helmet  defer={false}>
                <title> {site.siteMetaData.title}</title>
            </Helmet>
            <Header>
                <Logo/>
                <div>
                    <BtnWhatsapp/>
                </div>
            </Header>
            <Hero/>
            <div className="flex flex-col items-center sm:flex-row justify-around">
                {
                    selos.map(() => {
                        return <img src={selo} className="my-4"/>
                    })
                }
            </div>
            <div>
                <h2 className="px-8 py-2 text-2xl font-bold">Projetos de móveis planejados</h2>
                <div className="flex flex-wrap" >
                {
                    projetos.map(()=>{
                        return(
                            <div className="max-w-sm ">
                                <div className="m-2 rounded shadow-lg">
                                    <img src={img}/>
                                    <div className="px-6 py-4">
                                        <p className="font-bold text-xl mb-2">Projeto</p>
                                        <p>Descrição</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Index