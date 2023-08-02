import React, { useContext, useEffect, useState } from "react"
import { filtrarPodcast, guardarRegistros, obtenerRegistrosLocal } from "../utilities/utils"
import { getAllPodcast } from "../services/requests";
import { InputFilter } from "../components/InputFilter";
import { useForm } from "../hooks/useForm";
import { LoadingContext } from "../contexts/LoadingContext";
import { ListPodcasts } from "../components/ListPodcasts";

export const Home = () => {
    const [register, setRegister] = useState([])

    const { setIsLoading } = useContext(LoadingContext)
    const { searchText, onInputChange } = useForm({ searchText: '' })
    const registrosFiltrados = filtrarPodcast(searchText, register)
    const PodcastKey = "podcasts"


    const obtenerPodcast = async (PodcastKey) => {
        setIsLoading(true)
        const { hayRegistros, registros } = obtenerRegistrosLocal(PodcastKey)
        let podcasts = registros

        if (!hayRegistros) {
            let registrosAPI = await getAllPodcast()
            guardarRegistros(PodcastKey, registrosAPI)
            podcasts = registrosAPI !== null ? registrosAPI : []   
        }
        
        setIsLoading(false)
        setRegister(podcasts)
    }


    useEffect(() => {
        obtenerPodcast(PodcastKey);
    }, [])

    return (
        <>
            <InputFilter
                value={searchText}
                onInputChange={onInputChange}
            >
                <div className="info_register">{registrosFiltrados.length}</div>
            </InputFilter>

            <ListPodcasts registros={registrosFiltrados}/>
        </>
    );
}
