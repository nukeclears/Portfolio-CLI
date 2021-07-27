export function overviewblock(blockelement) {
    const title = blockelement.getAttribute('data-title');
    const text = blockelement.getAttribute('data-text');
    const image = blockelement.getAttribute('data-image');

    blockelement.innerHTML = " \
    <a class=\"flex flex-col justify-between h-96 border-2 rounded-xl transform hover:scale-105 transition-transform group border-red-500 dark:border-cyan-500\" href=\"#\"> \
        <div class=\"overflow-hidden rounded-t-xl bg-red-500 dark:bg-cyan-500\"> \
            <div class=\"opacity-90 lg:opacity-80 transition-opacity duration-200 object-cover h-full w-full group-hover:opacity-100\"> \
                <img src=" + image + " alt=\"overview image\" loading=\"lazy\"> \
            </div> \
        </div> \
        <div class=\"flex flex-col gap-4 rounded-b-xl px-8 lg:px-12 py-6 lg:py-8 bg-gray-100 dark:bg-gray-800\"> \
            <p class=\"select-all text-lg lg:text-xl font-display font-bold uppercase text-red-500 dark:text-cyan-500\"> \
                " + title + " \
            </p> \
            <p class=\"select-all text-base lg:text-lg font-body dark:text-white text-black\"> \
                " + text + " \
            </p> \
        </div> \
    </a>\"  \
    ";
}