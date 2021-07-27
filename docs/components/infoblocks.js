export function infoblock(infoelement) {
    const text1 = infoelement.getAttribute('data-text-1');
    const text2 = infoelement.getAttribute('data-text-1');
    const text3 = infoelement.getAttribute('data-text-1');

    infoelement.innerHTML = " \
    <div class=\"flex flex-col lg:flex-row justify-center gap-12 lg:gap-24\"> \
        <div class=\"flex gap-4 -ml-4\"> \
            <div class=\"w-1 dark:bg-cyan-500 bg-red-500\"></div> \
                <div class=\"flex flex-col text-base lg:text-lg gap-6 lg:w-96 dark:text-white text-black font-body\"> \
                <p> \
                    " + text1 + " \
                </p> \
                    " + text2 + " \
                <p> \
                    " + text3 + " \
                </p> \
                </div> \
            </div> \
            <div class=\"h-48 lg:h-auto lg:w-full bg-red-500 dark:bg-cyan-500 rounded-xl transform hover:scale-105 transition-transform duration-200 border-2 border-red-500 dark:border-cyan-500\"> \
                <div class=\"bg-header-background h-full w-full opacity-90 lg:opacity-80 hover:opacity-100 transition-all duration-500 rounded-xl cursor-pointer\"> \
                </div> \
            </div> \
        </div> \
    ";
}