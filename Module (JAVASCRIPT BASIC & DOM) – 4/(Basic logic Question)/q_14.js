function getFileExtension(filename) {
    return filename.slice(filename.lastIndexOf('.') + 1);
}

var file = 'example.docx';
var extension = getFileExtension(file);
console.log('File extension:', extension);
