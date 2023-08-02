import { esFechaExpirada, modelarDetallePodcast, modelarPodcast, obtnerIdPodcast, filtrarPodcast } from "../../src/utilities/utils";

describe("Pruebas en utils", () => {

    test('esFechaExpirada debe retonar un Boolean indicando si expiro la fecha', () => {
        const timestamp = 1690484404427
        const expirada = esFechaExpirada(timestamp);
        expect(expirada).toEqual(expect.any(Boolean))
    })

    test("modelarDetallePodcast debe retorna un objeto", () => {
        const registros = [
            {
                "country": "USA",
                "episodeFileExtension": "mp3",
                "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/5b/91/b3/5b91b38a-e174-0b2f-4580-1479daabb5b5/mza_5860275461259138834.jpg/600x600bb.jpg",
                "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/5b/91/b3/5b91b38a-e174-0b2f-4580-1479daabb5b5/mza_5860275461259138834.jpg/160x160bb.jpg",
                "episodeContentType": "audio",
                "closedCaptioning": "none",
                "collectionId": 1592180670,
                "collectionName": "The Prince Mixtape",
                "artistIds": [],
                "trackTimeMillis": 2764000,
                "contentAdvisoryRating": "Clean",
                "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/5b/91/b3/5b91b38a-e174-0b2f-4580-1479daabb5b5/mza_5860275461259138834.jpg/60x60bb.jpg",
                "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-prince-mixtape/id1592180670?mt=2&uo=4",
                "trackViewUrl": "https://podcasts.apple.com/us/podcast/minneapolis-always-been-the-bomb/id1592180670?i=1000609612006&uo=4",
                "shortDescription": "",
                "description": "How did Prince Rogers Nelson become an international superstar? The story begins in Minneapolis in the 1970s. We speak to Prince’s first producer, Chris Moon, about helping Prince find his voice in the studio.\nTo learn more about how CNN protects listener privacy, visit cnn.com/privacy",
                "releaseDate": "2023-04-19T09:00:00Z",
                "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/3519c7d3-3896-4b61-8ce2-afd4011dbf99/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "feedUrl": "https://www.omnycontent.com/d/playlist/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/b6d74169-ebad-4850-ac43-adcd01357ca1/podcast.rss",
                "previewUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/3519c7d3-3896-4b61-8ce2-afd4011dbf99/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "episodeGuid": "3519c7d3-3896-4b61-8ce2-afd4011dbf99",
                "trackId": 1000609612006,
                "trackName": "Minneapolis Always Been the Bomb",
                "genres": [
                    {
                        "name": "Music",
                        "id": "1310"
                    }
                ],
                "kind": "podcast-episode",
                "wrapperType": "podcastEpisode"
            },
            {
                "country": "USA",
                "episodeFileExtension": "mp3",
                "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/56/d4/43/56d44354-c88f-85a4-5015-6a3fab7330f9/mza_15935211541652089132.jpg/600x600bb.jpg",
                "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/56/d4/43/56d44354-c88f-85a4-5015-6a3fab7330f9/mza_15935211541652089132.jpg/160x160bb.jpg",
                "episodeContentType": "audio",
                "closedCaptioning": "none",
                "collectionId": 1592180670,
                "collectionName": "The Prince Mixtape",
                "artistIds": [],
                "trackTimeMillis": 2152000,
                "contentAdvisoryRating": "Clean",
                "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/56/d4/43/56d44354-c88f-85a4-5015-6a3fab7330f9/mza_15935211541652089132.jpg/60x60bb.jpg",
                "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-prince-mixtape/id1592180670?mt=2&uo=4",
                "trackViewUrl": "https://podcasts.apple.com/us/podcast/shes-doing-what-with-a-magazine/id1592180670?i=1000610683681&uo=4",
                "shortDescription": "",
                "description": "How did Prince’s music end up being debated in the halls of Congress? Susan Rogers, the recording engineer on Prince’s Purple Rain album, shares what it was like making songs like “Darling Nikki” in Prince’s basement home studio. And scholar Lynnée Denise shares a personal story of how “Darling Nikki” impacted her life. \nTo learn more about how CNN protects listener privacy, visit cnn.com/privacy",
                "releaseDate": "2023-04-26T09:00:00Z",
                "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/e2dec915-ed75-42f7-9880-afd4011ed345/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "feedUrl": "https://www.omnycontent.com/d/playlist/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/b6d74169-ebad-4850-ac43-adcd01357ca1/podcast.rss",
                "previewUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/e2dec915-ed75-42f7-9880-afd4011ed345/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "episodeGuid": "e2dec915-ed75-42f7-9880-afd4011ed345",
                "trackId": 1000610683681,
                "trackName": "She’s Doing What with a Magazine?!",
                "genres": [
                    {
                        "name": "Music",
                        "id": "1310"
                    }
                ],
                "kind": "podcast-episode",
                "wrapperType": "podcastEpisode"
            },
            {
                "country": "USA",
                "episodeFileExtension": "mp3",
                "artworkUrl600": "https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/79/98/c1/7998c198-2695-e014-4928-a57e54dc955a/mza_16499428922791221903.jpg/600x600bb.jpg",
                "artworkUrl160": "https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/79/98/c1/7998c198-2695-e014-4928-a57e54dc955a/mza_16499428922791221903.jpg/160x160bb.jpg",
                "episodeContentType": "audio",
                "closedCaptioning": "none",
                "collectionId": 1592180670,
                "collectionName": "The Prince Mixtape",
                "artistIds": [],
                "trackTimeMillis": 3541000,
                "contentAdvisoryRating": "Clean",
                "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/79/98/c1/7998c198-2695-e014-4928-a57e54dc955a/mza_16499428922791221903.jpg/60x60bb.jpg",
                "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-prince-mixtape/id1592180670?mt=2&uo=4",
                "trackViewUrl": "https://podcasts.apple.com/us/podcast/barbarella-meets-the-godfather/id1592180670?i=1000611564763&uo=4",
                "shortDescription": "",
                "description": "How did Prince become synonymous with ruffled shirts and peekaboo lace? The women behind his most iconic looks lift the veil on what it was like to dress and design for a style superstar. We’ll meet Marie France, Prince’s costume designer during the Purple Rain and Under the Cherry Moon eras, and Stacia Lang, Prince’s costume designer responsible for his infamous booty cutout pantsuit. \nTo learn more about how CNN protects listener privacy, visit cnn.com/privacy",
                "releaseDate": "2023-05-03T09:00:00Z",
                "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/12898fc1-5d71-45e3-a339-afd4011fa99d/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "feedUrl": "https://www.omnycontent.com/d/playlist/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/b6d74169-ebad-4850-ac43-adcd01357ca1/podcast.rss",
                "previewUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/12898fc1-5d71-45e3-a339-afd4011fa99d/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "episodeGuid": "12898fc1-5d71-45e3-a339-afd4011fa99d",
                "trackId": 1000611564763,
                "trackName": "Barbarella Meets The Godfather",
                "genres": [
                    {
                        "name": "Music",
                        "id": "1310"
                    }
                ],
                "kind": "podcast-episode",
                "wrapperType": "podcastEpisode"
            },
            {
                "country": "USA",
                "episodeFileExtension": "mp3",
                "artworkUrl600": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/9b/ff/fd/9bfffd2f-ba1f-75dd-5d35-9aaba7ae028d/mza_6375501522754248655.jpg/600x600bb.jpg",
                "artworkUrl160": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/9b/ff/fd/9bfffd2f-ba1f-75dd-5d35-9aaba7ae028d/mza_6375501522754248655.jpg/160x160bb.jpg",
                "episodeContentType": "audio",
                "closedCaptioning": "none",
                "collectionId": 1592180670,
                "collectionName": "The Prince Mixtape",
                "artistIds": [],
                "trackTimeMillis": 2082000,
                "contentAdvisoryRating": "Clean",
                "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/9b/ff/fd/9bfffd2f-ba1f-75dd-5d35-9aaba7ae028d/mza_6375501522754248655.jpg/60x60bb.jpg",
                "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-prince-mixtape/id1592180670?mt=2&uo=4",
                "trackViewUrl": "https://podcasts.apple.com/us/podcast/love-symbol-no-2/id1592180670?i=1000612462361&uo=4",
                "shortDescription": "",
                "description": "What inspired Prince to scrawl the word “slave” on his face and change his name to an unpronounceable symbol? Prince’s first manager, Owen Husney, scholar Lynnée Denise, and writer Anil Dash unpack Prince’s battle with his label to own his masters. \nTo learn more about how CNN protects listener privacy, visit cnn.com/privacy",
                "releaseDate": "2023-05-10T09:00:00Z",
                "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/c17f0456-9a5d-4b01-b138-afd40120b557/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "feedUrl": "https://www.omnycontent.com/d/playlist/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/b6d74169-ebad-4850-ac43-adcd01357ca1/podcast.rss",
                "previewUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/c17f0456-9a5d-4b01-b138-afd40120b557/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "episodeGuid": "c17f0456-9a5d-4b01-b138-afd40120b557",
                "trackId": 1000612462361,
                "trackName": "Love Symbol No. 2",
                "genres": [
                    {
                        "name": "Music",
                        "id": "1310"
                    }
                ],
                "kind": "podcast-episode",
                "wrapperType": "podcastEpisode"
            },
            {
                "country": "USA",
                "episodeFileExtension": "mp3",
                "artworkUrl600": "https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/bd/e5/7c/bde57c4a-fb99-e030-dffa-68fa7a456e10/mza_4590719572441653817.jpg/600x600bb.jpg",
                "artworkUrl160": "https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/bd/e5/7c/bde57c4a-fb99-e030-dffa-68fa7a456e10/mza_4590719572441653817.jpg/160x160bb.jpg",
                "episodeContentType": "audio",
                "closedCaptioning": "none",
                "collectionId": 1592180670,
                "collectionName": "The Prince Mixtape",
                "artistIds": [],
                "trackTimeMillis": 2107000,
                "contentAdvisoryRating": "Clean",
                "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/bd/e5/7c/bde57c4a-fb99-e030-dffa-68fa7a456e10/mza_4590719572441653817.jpg/60x60bb.jpg",
                "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-prince-mixtape/id1592180670?mt=2&uo=4",
                "trackViewUrl": "https://podcasts.apple.com/us/podcast/nothing-but-the-funk/id1592180670?i=1000613352660&uo=4",
                "shortDescription": "",
                "description": "What made Prince such a unique performer? Musician and Prince muse Patrice Rushen, professor Kat Okedeyi, and writer Anil Dash explore how funk infused Prince’s performance style, including his Super Bowl Halftime Show and one of his last concerts ever.  \nTo learn more about how CNN protects listener privacy, visit cnn.com/privacy",
                "releaseDate": "2023-05-17T09:00:00Z",
                "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/3572f4b2-304d-4a21-9a58-afd401217d8b/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "feedUrl": "https://www.omnycontent.com/d/playlist/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/b6d74169-ebad-4850-ac43-adcd01357ca1/podcast.rss",
                "previewUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/3572f4b2-304d-4a21-9a58-afd401217d8b/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "episodeGuid": "3572f4b2-304d-4a21-9a58-afd401217d8b",
                "trackId": 1000613352660,
                "trackName": "Nothing But The Funk",
                "genres": [
                    {
                        "name": "Music",
                        "id": "1310"
                    }
                ],
                "kind": "podcast-episode",
                "wrapperType": "podcastEpisode"
            },
            {
                "country": "USA",
                "episodeFileExtension": "mp3",
                "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/5f/e2/6d/5fe26db0-dd4b-38fd-2a44-df33765ffbde/mza_98716434989736261.jpg/600x600bb.jpg",
                "artworkUrl160": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/5f/e2/6d/5fe26db0-dd4b-38fd-2a44-df33765ffbde/mza_98716434989736261.jpg/160x160bb.jpg",
                "episodeContentType": "audio",
                "closedCaptioning": "none",
                "collectionId": 1592180670,
                "collectionName": "The Prince Mixtape",
                "artistIds": [],
                "trackTimeMillis": 2252000,
                "contentAdvisoryRating": "Clean",
                "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/5f/e2/6d/5fe26db0-dd4b-38fd-2a44-df33765ffbde/mza_98716434989736261.jpg/60x60bb.jpg",
                "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-prince-mixtape/id1592180670?mt=2&uo=4",
                "trackViewUrl": "https://podcasts.apple.com/us/podcast/beyond-the-lace/id1592180670?i=1000614279500&uo=4",
                "shortDescription": "",
                "description": "How did Prince engage with the world? Prince was a quiet activist and some say a feminist. We talk to Black Lives Matter co-founder Alicia Garza about Prince’s activism. And professor Lynnée Denise helps us makes sense of Prince’s complicated relationship with women. \n\n  \nTo learn more about how CNN protects listener privacy, visit cnn.com/privacy",
                "releaseDate": "2023-05-24T09:00:00Z",
                "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/49248eb3-6cb0-4561-be86-afd401222ac7/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "feedUrl": "https://www.omnycontent.com/d/playlist/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/b6d74169-ebad-4850-ac43-adcd01357ca1/podcast.rss",
                "previewUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/49248eb3-6cb0-4561-be86-afd401222ac7/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "episodeGuid": "49248eb3-6cb0-4561-be86-afd401222ac7",
                "trackId": 1000614279500,
                "trackName": "Beyond The Lace",
                "genres": [
                    {
                        "name": "Music",
                        "id": "1310"
                    }
                ],
                "kind": "podcast-episode",
                "wrapperType": "podcastEpisode"
            },
            {
                "country": "USA",
                "episodeFileExtension": "mp3",
                "artworkUrl600": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/89/e7/51/89e75145-ad19-1fab-008c-a8077afed680/mza_1547040587727964259.jpg/600x600bb.jpg",
                "artworkUrl160": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/89/e7/51/89e75145-ad19-1fab-008c-a8077afed680/mza_1547040587727964259.jpg/160x160bb.jpg",
                "episodeContentType": "audio",
                "closedCaptioning": "none",
                "collectionId": 1592180670,
                "collectionName": "The Prince Mixtape",
                "artistIds": [],
                "trackTimeMillis": 2372000,
                "contentAdvisoryRating": "Clean",
                "artworkUrl60": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/89/e7/51/89e75145-ad19-1fab-008c-a8077afed680/mza_1547040587727964259.jpg/60x60bb.jpg",
                "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-prince-mixtape/id1592180670?mt=2&uo=4",
                "trackViewUrl": "https://podcasts.apple.com/us/podcast/god-prince-and-chocolate/id1592180670?i=1000615130398&uo=4",
                "shortDescription": "",
                "description": "What makes Prince fans so intensely passionate? Our superfan host Nichole sits down with some other superfans to unpack their collective and individual love of Prince, and how he contributed to their sexual awakenings. Also, Nichole and Prince expert Anil Dash reflect on the surprising ways Prince connected with fans.\nTo learn more about how CNN protects listener privacy, visit cnn.com/privacy",
                "releaseDate": "2023-05-31T09:00:00Z",
                "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/651c7393-7e9b-4b00-8ae3-afd40122b66e/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "feedUrl": "https://www.omnycontent.com/d/playlist/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/b6d74169-ebad-4850-ac43-adcd01357ca1/podcast.rss",
                "previewUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/651c7393-7e9b-4b00-8ae3-afd40122b66e/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "episodeGuid": "651c7393-7e9b-4b00-8ae3-afd40122b66e",
                "trackId": 1000615130398,
                "trackName": "God, Prince, and Chocolate",
                "genres": [
                    {
                        "name": "Music",
                        "id": "1310"
                    }
                ],
                "kind": "podcast-episode",
                "wrapperType": "podcastEpisode"
            },
            {
                "country": "USA",
                "episodeFileExtension": "mp3",
                "artworkUrl600": "https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/44/5f/19/445f19fb-d383-16f6-c560-b68698d05e67/mza_1922997243978069733.jpg/600x600bb.jpg",
                "artworkUrl160": "https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/44/5f/19/445f19fb-d383-16f6-c560-b68698d05e67/mza_1922997243978069733.jpg/160x160bb.jpg",
                "episodeContentType": "audio",
                "closedCaptioning": "none",
                "collectionId": 1592180670,
                "collectionName": "The Prince Mixtape",
                "artistIds": [],
                "trackTimeMillis": 1626000,
                "contentAdvisoryRating": "Clean",
                "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/44/5f/19/445f19fb-d383-16f6-c560-b68698d05e67/mza_1922997243978069733.jpg/60x60bb.jpg",
                "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-prince-mixtape/id1592180670?mt=2&uo=4",
                "trackViewUrl": "https://podcasts.apple.com/us/podcast/u-r-with-me/id1592180670?i=1000615983525&uo=4",
                "shortDescription": "",
                "description": "For our season finale, Nichole sits down with her good friends Mickey and Rashad to share how they continue to process their grief over Prince’s death and celebrate his unforgettable legacy. And we hear from several guests featured this season with their answers to the question “If you had five more minutes with Prince, what would you say or do?” \nTo learn more about how CNN protects listener privacy, visit cnn.com/privacy",
                "releaseDate": "2023-06-07T09:00:00Z",
                "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/6c7e9868-7746-4621-a662-afd401234e0e/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "feedUrl": "https://www.omnycontent.com/d/playlist/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/b6d74169-ebad-4850-ac43-adcd01357ca1/podcast.rss",
                "previewUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/6c7e9868-7746-4621-a662-afd401234e0e/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "episodeGuid": "6c7e9868-7746-4621-a662-afd401234e0e",
                "trackId": 1000615983525,
                "trackName": "U R With Me",
                "genres": [
                    {
                        "name": "Music",
                        "id": "1310"
                    }
                ],
                "kind": "podcast-episode",
                "wrapperType": "podcastEpisode"
            },
            {
                "country": "USA",
                "episodeFileExtension": "mp3",
                "artworkUrl600": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/26/24/80/2624809f-cc29-2147-8335-d32495faba14/mza_12940328819323126125.jpg/600x600bb.jpg",
                "artworkUrl160": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/26/24/80/2624809f-cc29-2147-8335-d32495faba14/mza_12940328819323126125.jpg/160x160bb.jpg",
                "episodeContentType": "audio",
                "closedCaptioning": "none",
                "collectionId": 1592180670,
                "collectionName": "The Prince Mixtape",
                "artistIds": [],
                "trackTimeMillis": 151000,
                "contentAdvisoryRating": "Clean",
                "artworkUrl60": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/26/24/80/2624809f-cc29-2147-8335-d32495faba14/mza_12940328819323126125.jpg/60x60bb.jpg",
                "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-prince-mixtape/id1592180670?mt=2&uo=4",
                "trackViewUrl": "https://podcasts.apple.com/us/podcast/introducing-the-prince-mixtape/id1592180670?i=1000591510655&uo=4",
                "shortDescription": "",
                "description": "The Prince Mixtape takes listeners inside the life of one of the greatest American music icons of all time through the people who knew him, worked with him or simply loved him from afar. Host Nichole Perkins digs deep into key moments of his life like when his sexually liberated lyrics gave birth to the Parental Advisory sticker, when he fought to own his masters, and when he rocked that infamous booty cut-out pantsuit. Just like a treasured mixtape from your favorite crush, this show is a reflection of the moments, the thrill and the passion, that made up Prince’s life.\nTo learn more about how CNN protects listener privacy, visit cnn.com/privacy",
                "releaseDate": "2022-12-28T17:00:00Z",
                "episodeUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/4bae4666-2fb6-4819-8f1f-af7900fc5b4c/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "feedUrl": "https://www.omnycontent.com/d/playlist/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/b6d74169-ebad-4850-ac43-adcd01357ca1/podcast.rss",
                "previewUrl": "https://dts.podtrac.com/redirect.mp3/chtbl.com/track/E31CC9/traffic.omny.fm/d/clips/d83f52e4-2455-47f4-982e-ab790120b954/72c05255-6856-409d-bd0d-adcd0134cd7b/4bae4666-2fb6-4819-8f1f-af7900fc5b4c/audio.mp3?utm_source=Podcast&in_playlist=b6d74169-ebad-4850-ac43-adcd01357ca1",
                "episodeGuid": "4bae4666-2fb6-4819-8f1f-af7900fc5b4c",
                "trackId": 1000591510655,
                "trackName": "Introducing The Prince Mixtape",
                "genres": [
                    {
                        "name": "Music",
                        "id": "1310"
                    }
                ],
                "kind": "podcast-episode",
                "wrapperType": "podcastEpisode"
            }
        ]
        const modelo = modelarDetallePodcast(registros)
        expect(modelo).toMatchObject({})
    })

    test("modelarPodcast debe retorna un array", () => {
        const lista = [
            {
                "im:name": {
                    "label": "Million Dollaz Worth Of Game"
                },
                "im:image": [
                    {
                        "label": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/55x55bb.png",
                        "attributes": {
                            "height": "55"
                        }
                    },
                    {
                        "label": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/60x60bb.png",
                        "attributes": {
                            "height": "60"
                        }
                    },
                    {
                        "label": "https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png",
                        "attributes": {
                            "height": "170"
                        }
                    }
                ],
                "summary": {
                    "label": "The Million Dollaz Worth of Game show, a weekly podcast with rapper/actor @GillieDaKing and social media influencer and disruptor @Wallo267 - The perfect blend of discussing music, real life issues, personal experiences, honest advice and comedy\n\nYou can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit barstool.link/mworthofgame"
                },
                "im:price": {
                    "label": "Get",
                    "attributes": {
                        "amount": "0",
                        "currency": "USD"
                    }
                },
                "im:contentType": {
                    "attributes": {
                        "term": "Podcast",
                        "label": "Podcast"
                    }
                },
                "rights": {
                    "label": "© 2023 Barstool Sports, Inc."
                },
                "title": {
                    "label": "Million Dollaz Worth Of Game - Barstool Sports"
                },
                "link": {
                    "attributes": {
                        "rel": "alternate",
                        "type": "text/html",
                        "href": "https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2"
                    }
                },
                "id": {
                    "label": "https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002?uo=2",
                    "attributes": {
                        "im:id": "1460157002"
                    }
                },
                "im:artist": {
                    "label": "Barstool Sports",
                    "attributes": {
                        "href": "https://podcasts.apple.com/us/artist/barstool-sports/1524874689?uo=2"
                    }
                },
                "category": {
                    "attributes": {
                        "im:id": "1523",
                        "term": "Music Commentary",
                        "scheme": "https://podcasts.apple.com/us/genre/podcasts-music-music-commentary/id1523?uo=2",
                        "label": "Music Commentary"
                    }
                },
                "im:releaseDate": {
                    "label": "2023-07-16T16:30:00-07:00",
                    "attributes": {
                        "label": "July 16, 2023"
                    }
                }
            },
            {
                "im:name": {
                    "label": "Drink Champs"
                },
                "im:image": [
                    {
                        "label": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/55x55bb.png",
                        "attributes": {
                            "height": "55"
                        }
                    },
                    {
                        "label": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/60x60bb.png",
                        "attributes": {
                            "height": "60"
                        }
                    },
                    {
                        "label": "https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/170x170bb.png",
                        "attributes": {
                            "height": "170"
                        }
                    }
                ],
                "summary": {
                    "label": "Legendary Queens rapper-turned show host N.O.R.E. teams up with Miami hip-hop pioneer DJ EFN for a night of boozy conversation and boisterous storytelling. The hosts and guests engage together in fun, light-hearted conversation - looking back at their paths to success, highlighting their lives, friendships, and iconic moments within their career. In this unfiltered series, drinks are flowing and jokes are rolling - take a seat at the table with N.O.R.E & EFN. You Gotta Relax!"
                },
                "im:price": {
                    "label": "Get",
                    "attributes": {
                        "amount": "0",
                        "currency": "USD"
                    }
                },
                "im:contentType": {
                    "attributes": {
                        "term": "Podcast",
                        "label": "Podcast"
                    }
                },
                "rights": {
                    "label": "© 2023 Interval Presents"
                },
                "title": {
                    "label": "Drink Champs - Interval Presents"
                },
                "link": {
                    "attributes": {
                        "rel": "alternate",
                        "type": "text/html",
                        "href": "https://podcasts.apple.com/us/podcast/drink-champs/id1096830182?uo=2"
                    }
                },
                "id": {
                    "label": "https://podcasts.apple.com/us/podcast/drink-champs/id1096830182?uo=2",
                    "attributes": {
                        "im:id": "1096830182"
                    }
                },
                "im:artist": {
                    "label": "Interval Presents",
                    "attributes": {
                        "href": "https://podcasts.apple.com/us/artist/iheartradio/284341002?uo=2"
                    }
                },
                "category": {
                    "attributes": {
                        "im:id": "1310",
                        "term": "Music",
                        "scheme": "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
                        "label": "Music"
                    }
                },
                "im:releaseDate": {
                    "label": "2023-07-21T00:01:00-07:00",
                    "attributes": {
                        "label": "July 21, 2023"
                    }
                }
            }
        ]
        const podcast = modelarPodcast(lista)
        expect(podcast).toEqual(expect.any(Array))
    })

    test("obtnerIdPodcast debe retornar un id a partir de un pathname", () => {
        let pathname = "podcast/1096830182/"
        const id = obtnerIdPodcast(pathname)
        expect(id).toEqual(expect.any(String))
    })

    test("filtrarPodcast filtra una lista de podcast por nombre o autor y retorna un array", () => {
        let registros = [
            {
                id: '1460157002',
                img: 'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png',
                name: 'Million Dollaz Worth Of Game',
                author: 'Barstool Sports',
                summary: 'The Million Dollaz Worth of Game show, a weekly podcast with rapper/actor @GillieDaKing and social media influencer and disruptor @Wallo267 - The perfect blend of discussing music, real life issues, personal experiences, honest advice and comedy\n' +
                    '\n' +
                    'You can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit barstool.link/mworthofgame'
            },
            {
                id: '1096830182',
                img: 'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/1f/ad/c7/1fadc7d4-1e22-beaa-720a-2e2988dc1521/mza_16091018887573148747.jpg/170x170bb.png',
                name: 'Drink Champs',
                author: 'Interval Presents',
                summary: 'Legendary Queens rapper-turned show host N.O.R.E. teams up with Miami hip-hop pioneer DJ EFN for a night of boozy conversation and boisterous storytelling. The hosts and guests engage together in fun, light-hearted conversation - looking back at their paths to success, highlighting their lives, friendships, and iconic moments within their career. In this unfiltered series, drinks are flowing and jokes are rolling - take a seat at the table with N.O.R.E & EFN. You Gotta Relax!'
            }
        ]

        let resultado = filtrarPodcast("inter", registros)
        expect(resultado.length).toBe(1)

    })
})