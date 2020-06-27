// ==UserScript==
// @name         Codementor common messages
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Easily add common messages in chat conversations
// @author       Janos Gyerik <info@janosgyerik.com>
// @match        https://www.codementor.io/m/dashboard/open-requests*
// @grant        none
// ==/UserScript==

const presets = [
    {
        label: 'shell-regex',
        text: 'Hi! I use Bash, regex, awk, sed extensively, and can surely help. What do you need?'
    },
    {
        label: 'python',
        text: 'Hi! I use Python daily in various contexts. I can probably help with this. What exactly do you need?'
    },
    {
        label: 'familiar',
        text: "Hi! This looks like an interesting request, and I'm quite familiar in this area. Tell me more! (Do you have detailed specs?)"
    },
    {
        label: 'code-review',
        text: 'Hi! Code review is my specialty. I can provide you with recommendations to make your code better in many ways: design, logic, correctness, performance, good practices, and readability.'
    },
    {
        label: 'guru',
        text: "Hi! This is one of my favorite areas, so I'm interested to work with you on this. Do you have a detailed description of the task?"
    },
    {
        label: 'kind-of-help',
        text: "Hi! I'm quite familiar in this area, so I can probably help. Please share more details about what you're trying to do, and what kind of help you need!"
    },
    {
        label: 'late-help',
        text: "Hi! I can probably help with this, but I see many other mentors have expressed interest. Let me know if you still need help!"
    }
];

const appendPresets = () => {
    console.log('appending presets ...');

    const para = document.createElement('p');
    document.querySelector('form p').append(para);

    const textarea = document.querySelector('textarea');

    presets.forEach(preset => {
        console.log(preset);
        const b = document.createElement('button');
        //b.setAttribute('data-text', preset.text);
        b.textContent = preset.label + ' (' + preset.text.length + ')';
        b.onclick = function() {
            textarea.focus();
            textarea.value = preset.text;
        }
        para.append(b);
    });

    console.log('appending presets done!');
};

(function() {
    setTimeout(appendPresets, 1000);
})();
