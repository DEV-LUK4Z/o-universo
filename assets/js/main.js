const h1 = document.getElementById('h1');
const banner = document.getElementById('banner');

const onScroll = (event) => {
        const scrollPosition = event.target.scrollingElement.scrollTop;

        if (scrollPosition > 150) {
                banner.style.backgroundSize = '130%';
                
                h1.style.opacity = 0;
                h1.style.translate = '0 -50px';
                h1.style.scale = '0.9';
        } else {
                banner.style.backgroundSize = '180%';

                h1.style.opacity = 1;
                h1.style.translate = 0;
                h1.style.scale = 1;
        }
};

document.addEventListener("scroll", onScroll);