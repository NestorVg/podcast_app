import { createBrowserRouter } from "react-router-dom"
import { Home } from "../pages/Home"
import { Details } from "../pages/Details"
import { DetailsEpisode } from "../components/DetailsEpisode"
import { Layout } from "../pages/Layout"
import { DetailsPodcast } from "../components/DetailsPodcast"
export const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "podcast/:podcastId",
                element: <Details></Details>,
                children: [
                    {
                        index: true,
                        element: <DetailsPodcast></DetailsPodcast>
                    },
                    {
                        path: "episode/:episodeId",
                        element: <DetailsEpisode></DetailsEpisode>
                    }
                ]
            },
            {
                path: "*",
                element: <div className="container_message"><h2>Not Found</h2> </div>
            }
        ]
    },
])