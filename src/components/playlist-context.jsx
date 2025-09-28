import { createContext, useState } from "react"

const PlaylistContext = createContext()

export const PlaylistProvider = ({ children }) => {
    const [isPlaylistVisible, setIsPlaylistVisible] = useState(false)
    const [currentMood, setCurrentMood] = useState(null)
    const [playlistUrl, setPlaylistUrl] = useState("")

    return (
        <PlaylistContext.Provider
            value={{
                isPlaylistVisible,
                setIsPlaylistVisible,
                currentMood,
                setCurrentMood,
                playlistUrl,
                setPlaylistUrl,
            }}>
            {children}
        </PlaylistContext.Provider>
    )
}

export default PlaylistContext
