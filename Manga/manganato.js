// ==UserScript==
// @name        MangaNato
// @namespace   Azure
// @match       *://readmanganato.com/*/*
// @match       *://chapmanganato.com/*/*
// @grant       none
// @version     1.0
// @author      Azure Dragon
// @description MangaNato Manager
// @icon        https://manganato.com/favicon-96x96.png
// ==/UserScript==
var chapterImages = ['.container-chapter-reader img'];
var chapterButtons = ['.navi-change-chapter-btn-prev', '.navi-change-chapter-btn-next'];
var widthPercent = 100;
resize('30');
function resize(inp) {
	widthPercent = inp.valueOf().toLowerCase();
    var i = 0;
    var pageWidth = document.body.clientWidth;
    if (widthPercent === "w")
    {
        for (i = 0; i < document.querySelectorAll(chapterImages).length; i++){document.querySelectorAll(chapterImages)[i].style.width = pageWidth / document.querySelectorAll(chapterImages)[i].width * 100 + '%';}
    }
    else if (widthPercent === "h")
    {
        var pageHeight = window.height;
        for (i = 0; i < document.querySelectorAll(chapterImages).length; i++)
        {
            document.querySelectorAll(chapterImages)[i].style.width = pageWidth / document.querySelectorAll(chapterImages)[i].width * 100 + '%';
            document.querySelectorAll(chapterImages)[i].style.width = pageHeight / document.querySelectorAll(chapterImages)[i].height * 100 + '%';
        }
    }
    else if (widthPercent === 0){return;}
    else{for (i = 0; i < document.querySelectorAll(chapterImages).length; i++){document.querySelectorAll(chapterImages)[i].style.width=widthPercent+'%';}}
}
window.onkeydown = function(e) {
    switch (e.key) {
        //Previous Chapter
        case "ArrowLeft":
        case "Home":
        case "a":
           document.querySelectorAll(chapterButtons[0]).length > 0 ? document.location = document.querySelectorAll(chapterButtons[0])[0].href : window.location=document.getElementsByClassName('a-h')[1].getAttribute('href');
           break;
        //Next Chapter
        case "ArrowRight":
        case "End":
        case "d":
           document.querySelectorAll(chapterButtons[1]).length > 0 ? document.location = document.querySelectorAll(chapterButtons[1])[0].href : window.location=document.getElementsByClassName('a-h')[1].getAttribute('href');
           break;
        //Back to Manga details.
        case "Pause":
            window.location=document.getElementsByClassName('a-h')[1].getAttribute('href');
            break;
        //Resize
        case "x":
            var x = prompt('Image Width in %\n\'h\' to fit images to page height,\n\'w\' to fit images to page width.');
        	resize(x);
            break;
        default:
            break;
    }
}