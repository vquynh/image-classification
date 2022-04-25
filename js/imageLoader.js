function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function chooseImage(event, element){
    const choosenImage = document.getElementById("choosen_image");
    choosenImage.src = element.getElementsByTagName('img')[0].src;
    document.getElementsByClassName("choosen_preview")[0].setAttribute("class", "card-img preview");
    event.target.setAttribute("class", "card-img preview choosen_preview");
}

function addImage(file){
    const imageGroup = document.getElementById("user-images");
    const id = uuidv4();
    const newItem = document.createElement("div");
    newItem.setAttribute("id", id);
    newItem.setAttribute("class", "card");
    newItem.setAttribute("onclick", `getElementById('choosen_image').src=\"${URL.createObjectURL(file)}\"`);
    const itemImage = document.createElement("img");
    document.getElementsByClassName("choosen_preview")[0].setAttribute("class", "card-img preview");
    itemImage.setAttribute("class", "card-img preview choosen_preview");
    itemImage.setAttribute("style", "max-width: 18rem;");
    itemImage.src = URL.createObjectURL(file);
    itemImage.alt = "image";
    newItem.appendChild(itemImage);
    imageGroup.appendChild(newItem);
    document.getElementById("choosen_image").src = URL.createObjectURL(file);
}

function addAlert(format){
    const alert = document.createElement('div');
    alert.setAttribute("class","alert alert-warning alert-dismissible fade show");
    alert.setAttribute("role","alert");
    alert.innerText = `File of format: ${format} is not supported. Please choose only image files!`;
    const closeButton = document.createElement("button");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("class", "close");
    closeButton.setAttribute("data-dismiss", "alert");
    closeButton.setAttribute("aria-label", "Close");
    const buttonLabel = document.createElement('span');
    buttonLabel.setAttribute("aria-hidden", "true");
    buttonLabel.innerText="x"
    closeButton.appendChild(buttonLabel);
    alert.appendChild(closeButton);
    document.getElementById('select_image').append(alert);
}

function dropHandler(event) {
    console.log('File(s) dropped');

    // Prevent default behavior (Prevent file from being opened)
    event.preventDefault();

    if (event.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (var i = 0; i < event.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (event.dataTransfer.items[i].kind === 'file') {
            var file = event.dataTransfer.items[i].getAsFile();
            console.log("type: " + file.type);
            if(file.type.match('image.*')){
                addImage(file);
            }else{
                addAlert(file.type);
            }
        }
        }
    } 
}

function dragOverHandler(event) {
console.log('File(s) in drop zone');

// Prevent default behavior (Prevent file from being opened)
event.preventDefault();

}
    
choose_file.onchange = () => {
    const [file] = choose_file.files
    if (file) {
        addImage(file);
    }
}

