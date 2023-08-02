import React from "react"
import { Card } from "./Card";
import { useLocation } from "react-router-dom";
import '../css/details_episode.css'
import { obtenerRegistrosLocal, obtnerIdPathname } from "../utilities/utils";

export const DetailsEpisode = () => {
    const { state, pathname } = useLocation()
    const ID_PODCAST = pathname.split("/")[2]
    const ID_EPISODIO = obtnerIdPathname(pathname)

    const buscarEpisodio = (idPodcast, idEpisodio) => {
        const { hayRegistros, registros } = obtenerRegistrosLocal(idPodcast)
        let episode = null

        if (hayRegistros) {
            const { episodes } = registros
            let verificarEpisodio = episodes.find((item) => item.id === idEpisodio)

            if (verificarEpisodio !== undefined) {
                episode = verificarEpisodio
            }
        }
        return episode
    }

    const episode = state === null ? buscarEpisodio(ID_PODCAST, ID_EPISODIO) : state.episode

    return (
        episode === undefined || episode === null ?
            <div className="container_message" style={{ height: '0px' }}>
                <h2>No se encontraron registros</h2>
            </div>
            :
            <Card>
                <h2>{episode.title}</h2>
                <div
                    dangerouslySetInnerHTML={{
                        __html: episode.content
                    }}
                />
                <div className="container_audio">
                    <audio controls>
                        <source src={episode.url} type="audio/ogg" />
                        <source src={episode.url} type="audio/mpeg" />
                        <source src={episode.url} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </Card>
    );
}
