function handleMenu(){
    const navMenu = document.getElementById('nav-menu');
        navMenu.classList.toggle('hidden');
}

        const menuToggle = document.getElementById('menu-toggle');
        const navDialog = document.getElementById('nav-dialog');
        const menuIcon = document.getElementById('menu-icon');
        const menuClose = document.getElementById('menu-close');

        // Toggle menu visibility for mobile
        menuToggle.addEventListener('click', () => {
            navDialog.style.display = 'block';
        });

        menuClose.addEventListener('click', () => {
            navDialog.style.display = 'none';
        });

        const initialTranslateLTR = -48*4;
        const initialTranslateRTL = 36*4;


let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
})

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
})
        
        function setupIntersectionObserver(element, isLTR, speed) {
            const intersectionCallback = (entries) => {
                const isIntersecting = entries[0].isIntersecting;
                if(isIntersecting) {
                    document.addEventListener('scroll', scrollHandler);
                } else {
                    document.removeEventListener('scroll', scrollHandler);
                }
            }
            const intersectionObserver = new IntersectionObserver(intersectionCallback);
        
            intersectionObserver.observe(element);
        
            function scrollHandler() {
                const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        
                let totalTranslate = 0;
                if(isLTR) {
                    totalTranslate = translateX + initialTranslateLTR;
                } else {
                    totalTranslate = -(translateX + initialTranslateRTL);
                }
        
                element.style.transform = `translateX(${totalTranslate}px)`;
            }
        
        }
        
        const line1 = document.getElementById('line1');
        const line2 = document.getElementById('line2');
        const line3 = document.getElementById('line3');
        
        const line4 = document.getElementById('line4');
        
        
        setupIntersectionObserver(line1, true, 0.15);
        setupIntersectionObserver(line2, false, 0.15);
       
        const dtElements = document.querySelectorAll('dt');

        dtElements.forEach(element => {
            element.addEventListener('click', () => {
                const ddId = element.getAttribute('aria-controls');
                
                // Ensure ddId is found
                if (!ddId) return;
        
                const ddElement = document.getElementById(ddId);
                const ddArrowIcon = element.querySelector('i'); // Select the first icon inside dt
        
                // Toggle visibility and icon rotation
                if (ddElement) {
                    ddElement.classList.toggle('hidden');
                }
        
                if (ddArrowIcon) {
                    ddArrowIcon.classList.toggle('-rotate-180');
                }
            });
        });
        


