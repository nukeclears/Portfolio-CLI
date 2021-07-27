export function detailblock(detailelement) {
    const text1 = detailelement.getAttribute('data-text-1');
    const text2 = detailelement.getAttribute('data-text-2');
    const text3 = detailelement.getAttribute('data-text-3');
    const imagetop = detailelement.getAttribute('data-image-top');

    detailelement.innerHTML = " \
    <div class=\"flex flex-col gap-24\"> \
        <div class=\"flex text-white gap-24 h-48 bg-red-500 dark:bg-cyan-500 rounded-xl transform hover:scale-105 transition-transform duration-200\"> \
            <div class=\"w-full overflow-hidden opacity-90 lg:opacity-80 hover:opacity-100 transition-all duration-500 rounded-xl cursor-pointer border-2 border-red-500 dark:border-cyan-500\"> \
                <img src=" + imagetop + " alt=\"banner image\" loading=\"lazy\"> \
            </div> \
        </div> \
        <div class=\"flex flex-col lg:flex-row justify-between container self-center text-white gap-8 lg:gap-24\"> \
            <div class=\"flex lg:w-2/5 gap-4 -ml-4\"> \
                <div class=\"w-2 dark:bg-cyan-500 bg-red-500\"></div> \
                    <div class=\"flex flex-col gap-10 text-base lg:text-lg dark:text-white text-black\"> \
                    <p> \
                        " + text1 + " \
                    </p> \
                    <p> \
                        " + text2 + " \
                    </p> \
                    <p> \
                        " + text3 + " \
                    </p> \
                </div> \
            </div> \
            <div class=\"lg:w-3/5 h-48 lg:h-auto bg-red-500 dark:bg-cyan-500 rounded-xl transform hover:scale-105 transition-transform duration-200 border-2 border-red-500 dark:border-cyan-500\"> \
                <div class=\"bg-header-background h-full w-full opacity-90 lg:opacity-80 hover:opacity-100 transition-all duration-500 rounded-xl cursor-pointer\"> \
                </div> \
            </div> \
        </div> \
    </div> \
    ";
}