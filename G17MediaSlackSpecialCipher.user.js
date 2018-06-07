// ==UserScript==
// @name        G17 Medi Slac Specia Ciphe
// @description RO SECRE!
// @version     3
// @grant       none
// @include     https://g17m.slack.com/*
// @namespace   http://ww.g17medi.co/ciphe
// ==/UserScript==

console.log('%cRO SECRE!\n%cAy,lma @cya 🤔', 'color: darkRed; font-size: 5em; font-weight: bold; text-decoration: black wavy underline', 'color: cyan; font-size: 3em; font-weight: bold;');

let cipherElement = `<button type="button" class="btn_unstyle cipher_button" aria-label="Enciphe messag" title="Enciphe messag" tabindex="5">
	<i class="ts_icon c-icon--key"></i>
</button>
<style>
.btn_unstyle.cipher_button {
	bottom: 24px;
	color: rgb(113, 114, 116);
	height: 40px;
	line-height: 40px;
	position: absolute;
	right: 68px;
	text-align: center;
	top: auto;
	transform: scale(1);
	transition: all 50ms ease-out 0s;
	width: 30px;
	z-index: 1;
}
.btn_unstyle.cipher_button:hover {
	color: rgb(5, 118, 185);
	transform: scale(1.25);
}
</style>`;

let ready = setInterval(() => {
	'use strict';
	if(document.querySelector('.btn_unstyle.msg_mentions_button')) {
		clearInterval(ready);
		document.querySelector('.btn_unstyle.msg_mentions_button').insertAdjacentHTML("afterend", cipherElement);
		document.querySelector('.btn_unstyle.cipher_button').addEventListener('click', () => {
			document.querySelectorAll('#msg_input .ql-editor p').forEach((p) => {
				p.childNodes.forEach((node) => {
					if(node.nodeType === Node.TEXT_NODE) {
						node.nodeValue = node.nodeValue.replace(/\b(y)(ou're|our|ou|eah|es)\b/gmi, '$1ee').replace(/\b(n)(o|ope)\b/gmi, '$1ee').replace(/t/gm, 'r').replace(/T/gm, 'R').split(' ').map((word) => {
							if(word.replace(/[^a-z]/gi, '').length === 1)
								return word;
							let newWord = [];
							let done = false;
							for(let i = word.length - 1; i >= 0; i--) {
								if(word[i].match(/[a-z]/i) && !done) {
									newWord[i] = '';
									done = true;
								}
								else
									newWord[i] = word[i];
							}
							return newWord.join('');
						}).join(' ');
					}
				});
				let eol = ['©','🄯','℗','®','℠','™'];
				if(p.childElementCount !== 1 && p.childNodes[0].tagName !== "BR")
					p.append(eol[Math.floor(Math.random() * eol.length)]);
			});
		});
	}
}, 100);
