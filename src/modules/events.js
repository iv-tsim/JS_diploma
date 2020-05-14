export default function events() {
    document.body.addEventListener('click', event => {
        const {target} = event;
        const clubSelectUl = document.querySelector('.clubs-list ul');
        const toggleDisplay = element => {getComputedStyle(element).display === 'none' ? element.style.display = 'block' : element.style.display = 'none';};
        if (target.closest('.clubs-list')) {
            toggleDisplay(clubSelectUl);
        }
    });
}