async function uploadFile(){
    let formData = new FormData();
    formData.appendChild("file", choose_file.files[0]);
    let response = await fetch('/upload', {
        method: "POST",
        body: formData
    });
    if(response.status === 200){
        alert("File successfully uploaded!");
    }
}

function removeFile(id, file) {
    document.getElementById(id).remove();
    let files = choose_file.files;
    for( let i = 0; i < files.length; i++){

        if ( files[i].name === file.name && files[i].size === file.size) {

            files.splice(i, 1);
        }
    }
    choose_file.files = files;
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

choose_file.onchange = () => {
    const [file] = choose_file.files
    if (file) {
        const list = document
            .getElementsByClassName("file_upload_list")[0]
            .getElementsByTagName("ul")[0];
        const id = uuidv4();
        const newItem = document.createElement("li");
        newItem.setAttribute("id", id);
        const itemDiv = document.createElement("div");
        itemDiv.setAttribute("class", "file_item");
        const itemImage = document.createElement("img");
        itemImage.setAttribute("class","file_preview");
        itemImage.src = URL.createObjectURL(file);
        itemImage.alt = "image";
        itemDiv.appendChild(itemImage);
        const itemInfo = document.createElement("div");
        itemInfo.setAttribute("class", "file_info");
        const itemInfoName = document.createElement("div");
        itemInfoName.setAttribute("class", "file_name");
        itemInfoName.innerText = file.name;
        itemInfo.appendChild(itemInfoName);
        const itemInfoSizeWrap = document.createElement("div");
        itemInfoSizeWrap.setAttribute("class", "file_size_wrap");
        const itemInfoSize = document.createElement("div");
        itemInfoSize.setAttribute("class", "file_size");
        itemInfoSize.innerText = file.size + " KB";
        itemInfoSizeWrap.appendChild(itemInfoSize);
        const itemInfoSizeClose = document.createElement("div");
        itemInfoSizeClose.setAttribute("class", "file_close");
        itemInfoSizeClose.innerText = "X";
        itemInfoSizeWrap.appendChild(itemInfoSizeClose);
        itemInfo.appendChild(itemInfoSizeWrap);
        itemDiv.appendChild(itemInfo)

        newItem.appendChild(itemDiv);
        list.appendChild(newItem);
    }
}

//<li>
//         <div class="file_item">
//             <img class="file_preview" src="#" alt="image" />
//             <div class="file_info">
//               <div class="file_name" id="file_name">
//               </div>
//               <div class="file_size_wrap">
//                 <div class="file_size" id="file_size">2KB</div>
//                 <div class="file_close">X</div>
//               </div>
//           </div>
//         </div>
//       </li>