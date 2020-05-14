export default function events() {
    document.body.addEventListener('click', event => {
        const {target} = event;
        console.log(target);
        const clubSelectUl = document.querySelector('.clubs-list ul');
        const forms = document.querySelectorAll('.popup');
        const popupMenu = document.querySelector('.popup-menu');
        const toggleForm = (id) => {
            document.getElementById(id.slice(1)).classList.toggle('active');
        }
        if (target.closest('.clubs-list')) {
            clubSelectUl.classList.toggle('active');
        }
        if (target.dataset.popup === '#callback_form' || target.dataset.popup === '#free_visit_form') {
            toggleForm(target.dataset.popup);
        }
        if (target.classList.contains('close_icon') || target.classList.contains('overlay')) {
            forms.forEach(item => item.classList.remove('active'));
        }
        if (target.closest('.fixed-gift')) {
            toggleForm('#gift');
            target.closest('.fixed-gift').remove();
        }
        if (target.closest('.menu-button')) {
            (getComputedStyle(popupMenu).display === 'none') ? popupMenu.style.display = 'flex' : popupMenu.style.display = 'none';
        }
        if (target.closest('.close-menu-btn') || target.closest('.scroll')) {
            console.log(1);
            popupMenu.style.display = 'none';
        }
    });
    window.addEventListener('scroll', () => {
        const headerHeight = document.querySelector('header').clientHeight;
        const arrowUp = document.getElementById('totop');
        (window.pageYOffset > headerHeight) ? arrowUp.classList.add('active') : arrowUp.classList.remove('active');
    })
}