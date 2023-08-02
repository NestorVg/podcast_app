import React, { useContext, useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom";
import { getDetailsPodcast } from "../services/requests";
import { Card } from "../components/Card";
import { LoadingContext } from "../contexts/LoadingContext";
import { guardarRegistros, obtenerRegistrosLocal } from "../utilities/utils"
import '../css/details_podcast.css'


export const Details = () => {
    const [details, setDetails] = useState({})
    const [infoPodcast, setInfoPodcast] = useState({
        img: "",
        name: "",
        summary: "",
        author: ""
    })
    const { isLoading, setIsLoading } = useContext(LoadingContext)
    const { state, pathname } = useLocation()
    const idPodcast = pathname.split("/")[2]


    const buscarPodcast = (state,idPodcast) => {
        let podcast = {}
        if (state === null) {
            const { hayRegistros, registros } = obtenerRegistrosLocal("podcasts")
            podcast = hayRegistros ? registros.find((item) => item.id === idPodcast) : null
        } else {
            podcast = state.podcast
        }
        setInfoPodcast({ ...infoPodcast, ...podcast })
    }

    const detailsPodcast = async (podcastId) => {
        setIsLoading(true)
        const { hayRegistros, registros } = obtenerRegistrosLocal(podcastId)
        let podcasts = registros
        if (!hayRegistros) {
            let registrosAPI = await getDetailsPodcast(podcastId, 20)
            podcasts = registrosAPI
            guardarRegistros(podcastId, podcasts)
        }

        setIsLoading(false)
        setDetails(podcasts)
    }

    useEffect(() => {
        buscarPodcast(state,idPodcast)
        detailsPodcast(idPodcast)
    }, [idPodcast,state])

    return (
        isLoading ?
            <div className="container_message">
                <h2>Loading....</h2>
            </div>
            :
            details === null ?
                <div className="container_message">
                    <h2>No se encontraron registros</h2>
                </div>
                :
                <div className="container_details">
                    <div className="details_info">
                        <Card>
                            <div className="img_detail" >
                                <img alt={infoPodcast.name} loading="lazy" src={`${infoPodcast.img}`}></img>
                            </div>
                            <hr />
                            <div className="detalle_autor">
                                <h2>{infoPodcast.name}</h2>
                                <span>{`by ${infoPodcast.author}`}</span>
                            </div>
                            <hr />

                            <small>
                                <b>Description:</b>
                                <p >
                                    {infoPodcast.summary}
                                </p>
                            </small>
                        </Card>
                    </div>

                    <div className="details_table">
                        <Outlet
                            context={{ details: details }}
                        ></Outlet>
                    </div>
                </div>

    );
}
