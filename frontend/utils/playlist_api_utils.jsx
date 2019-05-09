export const fetchPlaylists = () => {
    return (
    $.ajax({
        method: "GET" ,
        url: "api/playlists"
    })
)};

export const fetchPlaylist = (id) => (
    $.ajax({
        method: "GET",
        url: `api/playlists/${id}`
    })
);

export const createPlaylist = (playlist) => (
    $.ajax({
        method: "POST", 
        url: "api/playlists",
        playlist
    })
);

export const updatePlaylist = (playlist) => (
    $.ajax({
        method: "PATCH",
        url: `api/playlists/${playlist.id}`,
        playlist
    })
);

export const deletePlaylist = (id) => (
    $.ajax({
        method: "DELETE",
        url: `api/playlists/${id}`
    })
);