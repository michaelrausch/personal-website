interface Props {
    playlistId: string;
}

const SpotifyWidget: React.FC<Props> = ({ playlistId }) => {
    return (
        <iframe src={'https://open.spotify.com/embed/playlist/' + playlistId} width="100%" height="380" frameBorder="0" allow="encrypted-media" className="rounded-md"></iframe>
    )
}

export default SpotifyWidget;