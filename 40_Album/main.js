function make_album(artise_name, album_title, tracks) {
    var album = {
        artise: artise_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Afridi", "Album title 1");
var album2 = make_album("Zeeshan", "Album title 2");
var album3 = make_album("Hamza", "AlbumArtise 3", 420);
console.log(album1);
console.log(album2);
console.log(album3);
