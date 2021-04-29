const container = document.querySelector('.seating');
const selectedSeats = document.getElementById("selected-seats");
const seats = document.querySelectorAll('.rows .seat:not(.occupied)');
const totalPrice = document.getElementById('total');
const currentMovie = document.getElementById('movies');
let ticketPrice = +currentMovie.value;

populateUI();
update();
function setSeatIndex() {
    const selectedSeats = document.querySelectorAll('.rows .seat.selected');

    const sSeatIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    console.log(sSeatIndex);
    localStorage.setItem('selectedSeatIndex', JSON.stringify(sSeatIndex));
}

function saveMovieIP(movieIndex, moviePrice){
    localStorage.setItem('currentMovieIndex', movieIndex);
    localStorage.setItem('currentMoviePrice', moviePrice);
}
function update(){
    const numOfSelectedSeats = document.querySelectorAll('.rows .seat.selected').length;
    selectedSeats.innerText = numOfSelectedSeats;
    totalPrice.innerText = ticketPrice * numOfSelectedSeats;
}

function populateUI() {
    const seatIndex = JSON.parse(localStorage.getItem('selectedSeatIndex'));
    seatIndex.forEach(element => seats[element].classList.add('selected'));
    currentMovie.selectedIndex = [localStorage.getItem('currentMovieIndex')];
}

currentMovie.addEventListener('change', e=> {
    ticketPrice = e.target.value;
    update();
    saveMovieIP(e.target.selectedIndex,e.target.value);
})
// Could use toggle instead of updating each class and removing 'selected' class.
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied'))
    {
        e.target.classList.toggle('selected');
        update();
        setSeatIndex();
    }
})
