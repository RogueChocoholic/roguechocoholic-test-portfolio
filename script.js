function downloadPdf(){
    var link = document.createElement('a');
    link.href = "../resources/cv/Chanuths' CV (1) (1).pdf";
    link.download;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}