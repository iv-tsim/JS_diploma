export default function events() {
    document.body.addEventListener('click', event => {
        console.log(event.target);
    })
}