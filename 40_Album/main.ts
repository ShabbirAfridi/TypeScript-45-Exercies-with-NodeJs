function make_album(artise_name:string, album_title :string, tracks?:number){
    let album: {artise:string, title:string, tracks?:number} ={
    artise: artise_name,
    title:album_title,
    }
    if (tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}
// calling three Funcation and Creating 3 Varibles with Diffrent Values
let album1 = make_album("Afridi","Album title 1")
let album2 = make_album ("Zeeshan","Album title 2")
let album3 = make_album("Hamza","AlbumArtise 3", 420)

// print Value of our object Created my funcation
console.log(album1)
console.log(album2)
console.log(album3)