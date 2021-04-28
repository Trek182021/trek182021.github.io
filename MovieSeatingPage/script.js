const container = document.querySelector('.seating');
const selectedSeats = document.getElementById("selected-seats");
const totalPrice = document.getElementById('total');
const currentMovie = document.getElementById('movies');
let ticketPrice = +currentMovie.value;

function update(){
    const numOfSelectedSeats = document.querySelectorAll('.rows .seat.selected').length;
    selectedSeats.innerText = numOfSelectedSeats;
    totalPrice.innerText = ticketPrice * numOfSelectedSeats;
}

currentMovie.addEventListener('change', e=> {
    ticketPrice = e.target.value;
    update();
})
// Could use toggle instead of updating each class and removing 'selected' class.
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected');
        update();
    }
})