function downloadPdf(){
    var link = document.createElement('a');
    link.href = "../resources/cv/Kovidha Subasinghe Resume.pdf";
    link.download;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}