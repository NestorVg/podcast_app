import { modelarPodcast, modelarDetallePodcast } from "../utilities/utils";
const CORS_PROXY = "https://api.allorigins.win/get?url=";

export const getAllPodcast = async () => {
    let url = `${'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'}`
    let podcasts = null;
    try {
        let respuesta = await fetch(url, { mode: 'cors' }, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let res = await respuesta.json()
        if (res !== undefined) {
            podcasts = modelarPodcast(res.feed.entry)
        }
    } catch (error) {
        console.error("getAllPodcast", error)
    }
    return podcasts
}


export const getDetailsPodcast = async (podcastId, limitEpisode = 20) => {
    let url = `${CORS_PROXY}${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=${limitEpisode}`)}`
    let podcast = null;
    try {
        let respuesta = await fetch(url, { mode: 'cors' }, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        let res = await respuesta.json()
        if (res !== undefined) {
            const { results, errorMessage = "" } = JSON.parse(res.contents)
            if (results === undefined || results === null || results.length === 0) {
                console.log(errorMessage);
            } else {
                podcast = modelarDetallePodcast(results)
            }

            return podcast;
        }
    } catch (error) {
        console.error("getDetailsPodcast", error)
    }
    return podcast
}
