// ==UserScript==
// @name         Filter Problems on Leetcode
// @namespace    http://www.janosgyerik.com/
// @version      0.2
// @description  Add buttons on the problem listing page to apply various filters
// @author       janos
// @match        https://leetcode.com/problemset/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('.mytoolbar button { margin-right: 1em; }');

$(document).ready(function() {
    var toolbar = $('<div class="mytoolbar"/>');
    toolbar.append(
        $('<button/>').append('Hide Locked').click(x =>
            $('.question-list-base .fa-lock').parent().parent().parent()
                .filter((i, x) => x.className.indexOf("frequency") == -1)
                .parent().parent().hide()
        ),
        $('<button/>').append('Hard').click(x => document.location.href = '?difficulty=Hard&status=Todo'),
        $('<button/>').append('Easy').click(x => document.location.href = '?difficulty=Easy&status=Todo'),
        $('<button/>').append('Hide Easy').click(function() { $('td:contains("Easy")').parent('tr').hide(); }),
        $('<button/>').append('Hide Medium').click(function() { $('td:contains("Medium")').parent('tr').hide(); }),
        $('<button/>').append('Hide Completed').click(function() { $('.fa-check').parent('td').parent('tr').hide(); })
    );
    $('.assess-bar').prepend(toolbar);
});
