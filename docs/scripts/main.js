import { overviewblock } from '../components/overviewblocks.js';
import { infoblock } from '../components/infoblocks.js';
import { detailblock } from '../components/detailblocks.js';

function overviewblock_generator() {
    const overviewblocks = document.querySelectorAll('[role=blockelement]');
    overviewblocks.forEach(singleoverviewblock => {
        new overviewblock(singleoverviewblock);
    });
}

function infoblock_generator() {
    const infoblocks = document.querySelectorAll('[role=infoelement]');
    infoblocks.forEach(singleinfoblock => {
        new infoblock(singleinfoblock);
    });
}

function detailblock_generator() {
    const detailblocks = document.querySelectorAll('[role=detailelement]');
    detailblocks.forEach(singledetailblock => {
        new detailblock(singledetailblock);
    });
}


document.addEventListener('DOMContentLoaded', function () {
    overviewblock_generator();
    infoblock_generator();
    detailblock_generator();
});

const body = document.getElementById('body')

if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    body.classList.add('dark')
} else {
    body.classList.remove('dark')
}

localStorage.theme = 'light'
localStorage.theme = 'dark'
localStorage.removeItem('theme')

document.getElementById('darktoggle').addEventListener('click', function () {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark')
    } else {
        body.classList.add('dark')
    }
})