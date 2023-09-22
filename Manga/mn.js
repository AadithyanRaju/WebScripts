// ==UserScript==
// @name        MangaNato
// @namespace   Azure
// @match       *://manganato.com/*
// @grant       none
// @version     1.0
// @author      Azure Dragon
// @description MangaNato Loader
// @icon        https://manganato.com/favicon-96x96.png
// ==/UserScript==

// create an array with URLs from a hrefs of class 'chapter-name text-nowrap'
var chapterLinks = [];
var chapterNames = [];

var chapterList = document.getElementsByClassName('chapter-name text-nowrap');
for (var i = 0; i < chapterList.length; i++) {
    chapterLinks.push(chapterList[i].href);
    chapterNames.push(chapterList[i].innerText);
}

window.onkeydown = function(e) {
    switch (e.key) {
        
        case "ArrowRight":
        case "End":
        case "d":
            // select the last chapter in the list
            var lastChapter = chapterLinks.length - 1;
            // open the last chapter in the list
            window.location = chapterLinks[lastChapter];
        break;
        
        default:
            break;
    }
}