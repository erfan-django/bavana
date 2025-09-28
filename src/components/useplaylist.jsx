import { useContext } from "react"
import PlaylistContext from "./playlist-context"

const usePlaylist = () => {
    return useContext(PlaylistContext)
}

export default usePlaylist
