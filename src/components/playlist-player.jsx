import { useRef } from "react"
import usePlaylist from "./useplaylist"
import Draggable from "react-draggable"

const PlaylistPlayer = () => {
    const { isPlaylistVisible, currentMood, playlistUrl, setIsPlaylistVisible } = usePlaylist()
    const nodeRef = useRef(null)

    // فقط برای دسکتاپ نشون بده
    if (window.innerWidth < 1024) return null
    if (!isPlaylistVisible || !currentMood || !playlistUrl) return null

    const handleClose = () => {
        setIsPlaylistVisible(false)
    }

    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="fixed w-[400px] top-4 right-4 bg-[#FFF3DD] dark:bg-[#251D16] dark:border-2 dark:border-[#FFF3DD] shadow-2xl dark:shadow-amber-100 rounded-[20px] p-6 text-right z-50 lg:flex flex-col cursor-move">
                <iframe src={`${playlistUrl}?autoplay=1`} width="100%" height="100" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className="rounded-lg mt-2" title={`Playlist for ${currentMood}`} />
                <button onClick={handleClose} className="text-[#ED8F44] hover:text-red-700 mt-2 self-end px-3 py-1 rounded-lg border border-[#ED8F44] hover:border-red-700">
                    بستن
                </button>
            </div>
        </Draggable>
    )
}

export default PlaylistPlayer
