let buttonElement = document.getElementById("buttonSend");
let inputElement = document.getElementById("inputId");
let paraElement = document.getElementById("paraId");
let voteElement = document.getElementById("votes");
buttonElement.onclick = function() {
    let inputValue = inputElement.value;
    if (inputValue === "") {
        paraElement.textContent = "Enter Valid Text..."
        voteElement.textContent = "";
    } else {
        paraElement.textContent = "Thank you for your valuable feedback...";
        voteElement.textContent = "4.7/5 - 23805 votes";

    }
}
document.getElementById("file_input").addEventListener("change", (e) => {
    var files = document.getElementById("file_input").files;
    var pattern = /\.([0-9a-z]+)(?:[\?#]|$)/i;
    var Extensions = [];
    for (var file in files) {
        if (files[file].name !== undefined) {
            var extension = files[file].name.match(pattern);
        } else {
            break;
        }
        Extensions.push(extension);
    }
    Extensions.forEach((element) => {
        switch (element[1]) {
            case "docx":
                console.log("Word File");
                break;
            case "pdf":
                console.log("Pdf File");
                break;
            case "jpg":
                var filterfile;
                for (file in files) {
                    if (files[file].name === element.input) {
                        filterfile = files[file];
                    }
                }
                imgToPdf(filterfile);
                break;
            case "jpeg":
                var filterfile;
                for (file in files) {
                    if (files[file].name === element.input) {
                        filterfile = files[file];
                    }
                }
                imgToPdf(filterfile);
                break;
            case "png":
                var filterfile;
                for (file in files) {
                    if (files[file].name === element.input) {
                        filterfile = files[file];
                    }
                }
                imgToPdf(filterfile);
                break;
            default:
                break;
        }
    });
});

function docxToPdf() {}

function imgToPdf(file) {
    var name = file.name.split(".").slice(0, -1).join(".");
    var newimg = document.createElement("img");
    newimg.src = URL.createObjectURL(file);
    const doc = new jsPDF();
    doc.addImage(newimg, 20, 20, 150, 250);
    doc.save(`${name}.pdf`);
}
