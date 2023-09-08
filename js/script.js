function Show(file) {
    //Pega o ID da imagem grande
    var ShowPhoto = document.getElementById('photo');
    //"assets/"+file
    newPhoto = "assets/" + file;
    //Troca a imagem grande
    ShowPhoto.src = newPhoto;
    console.log(file);
    //Transforma o nome do arquivo no texto
    var fullName = file.replace("-", " ");
    theName = fullName.replace("-", " ");
    console.log(theName);

    var name = theName.replace(".gif", "");
    console.log(name);
    document.getElementById('thetitle').innerHTML = name;

}

function Hide() {
    var ShowPhoto = document.getElementById('photo');
    ShowPhoto.src = "assets/gif3.gif";
    document.getElementById('thetitle').innerHTML = "The Avengers";
}