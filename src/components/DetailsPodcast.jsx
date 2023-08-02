import React from "react"
import { Table } from "./Table"
import { Card } from "./Card";
import { useOutletContext, useNavigate, useLocation } from "react-router-dom";
import { formatearFecha, formatearMilisegundos } from "../utilities/utils";

export const DetailsPodcast = () => {
    const { details } = useOutletContext()
    const { episodes = [], trackCount = "" } = details
    const { state } = useLocation()
    const navigate = useNavigate()

    return (
        <>
            <Card>
                <b className="txt_count">{`Episodes: ${trackCount}`}</b>
            </Card>

            <Card className={"altura_tabla"}>
                {
                    episodes !== null &&
                    (<Table
                        HEADER={
                            <tr>
                                <th style={{ textAlign: "left" }}>Title</th>
                                <th style={{ width: '100px', textAlign: "left" }}>Date</th>
                                <th style={{ width: '100px', textAlign: "left" }}>Duration</th>
                            </tr>
                        }
                        BODY={
                            episodes.map((episode, i) =>
                                <tr key={i} >
                                    <td className="titulo_episodio"
                                        onClick={() => {
                                            if (state !== null) {
                                                state.episode = episode;
                                            }
                                            navigate(`episode/${episode.id}`, { state: state });
                                        }}
                                    >{episode.title}</td>
                                    <td>{formatearFecha(episode.date)}</td>
                                    <td>{formatearMilisegundos(episode.duration)}</td>
                                </tr>
                            )}
                    >
                    </Table>)
                }
            </Card>
        </>
    );
}