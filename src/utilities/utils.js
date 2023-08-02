export const esFechaExpirada = (timestamp) => {
  const oneday = 60 * 60 * 24 * 1000
  const now = Date.now();
  return now - timestamp > oneday;
}

export const formatearFecha = (fecha = "") => {
  const fechaActual = new Date(fecha);
  const opciones = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return fechaActual.toLocaleDateString('es-ES', opciones).toString()
}

export const padToTwoDigits = (num) => {
  return num.toString().padStart(2, '0')
}

export const formatearMilisegundos = (ms) => {
  if (ms === undefined || ms === null || ms === "") { return "" }

  let seconds = Math.floor(ms / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  seconds = seconds % 60
  minutes = minutes % 60
  hours = hours % 24

  seconds = padToTwoDigits(seconds)
  minutes = padToTwoDigits(minutes)
  hours = padToTwoDigits(hours)

  return `${hours}:${minutes}:${seconds}`
}

export const filtrarPodcast = (texto = '', registro) => {
  if (texto.length === 0) return registro;
  texto = texto.toLocaleLowerCase().trim();


  return registro.filter((item) =>
    (item.name.toLocaleLowerCase().includes(texto) || item.name.toLocaleLowerCase() === texto) ||
    (item.author.toLocaleLowerCase().includes(texto) || item.author.toLocaleLowerCase() === texto)
  )
}

export const guardarRegistros = (keyLocal, registros) => {

  if (registros === undefined || registros === null) {
    console.log("No se encontraron los registros")
  } else {
    let objeto = { value: registros, timestamp: new Date().getTime() };
    try {
      localStorage.setItem(keyLocal, JSON.stringify(objeto));
    } catch (e) {
      console.log("Local Storage esta lleno: " + e)
    }
  }
}


export const obtenerRegistrosLocal = (keyLocal) => {
  let hayRegistros = true
  let registros = []

  if (localStorage.getItem(keyLocal) === null || esFechaExpirada(JSON.parse(localStorage.getItem(keyLocal)).timestamp)) {
    hayRegistros = false
  } else {
    registros = JSON.parse(localStorage.getItem(keyLocal)).value;
  }

  return { hayRegistros: hayRegistros, registros: registros }

}

export const obtnerIdPathname = (pathname) => {
  let lista = pathname.split("/")
  let resultado = lista[lista.length - 1]
  return resultado === undefined ? 0 : resultado
}

export const obtnerIdPodcast = (pathname = "") => {
  let idPodcast = pathname.split("/")[2]

  return idPodcast
}

export const modelarDetallePodcast = (results) => {
  const { trackId, artworkUrl600, trackName, feedUrl, artistName, trackCount } = results[0]
  results.shift()

  let podcast = {
    id: trackId,
    artwork: artworkUrl600,
    name: trackName,
    feedUrl: feedUrl,
    artistName: artistName,
    trackCount: trackCount,
    episodes: results.map((episode) => {
      const { episodeGuid, trackName, releaseDate, trackTimeMillis, description, episodeUrl } = episode
      return {
        id: episodeGuid,
        title: trackName,
        date: releaseDate,
        duration: trackTimeMillis,
        content: description,
        url: episodeUrl
      }

    })
  }

  return podcast
}

export const modelarPodcast = (registros = []) => {

  let podcast = registros.map((item) => {
    return {
      id: item.id.attributes["im:id"],
      img: item["im:image"][2].label,
      name: item["im:name"].label,
      author: item["im:artist"].label,
      summary: item.summary ? item.summary.label : "No description"
    }
  })
  return podcast
}
