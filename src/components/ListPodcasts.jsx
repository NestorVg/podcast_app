import React from "react"
import { Card } from "./Card"
import { useNavigate } from "react-router-dom"
import '../css/listPodcast.css'

export const ListPodcasts = ({ registros }) => {
    const navigate = useNavigate()

    return (
        <div className="container_main">
            <div className="grid_template">
                {registros.map((item) =>
                    <Card key={item.id} onClickChange={() => {
                        navigate(`podcast/${item.id}`, {
                            state: { podcast: item, episode: {} }
                        });
                    }}>
                        <div className="card_img" >
                            <img alt={item.name} loading="lazy" src={`${item.img}`}></img>
                        </div>

                        <div className="card_info">
                            <h2>{item.name}</h2>
                            <span>{`Author: ${item.author}`}</span>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    );
}