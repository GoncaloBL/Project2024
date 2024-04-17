//Change display type
const iconBtn = document.getElementById('iconsButton');
const detailsBtn = document.getElementById('detailsButton');
const carrouselBtn = document.getElementById('carouselButton');

iconBtn.addEventListener('click', setDisplaytoIcons);

function setDisplaytoIcons() {
    console.log('changing display to icons')
    let list = document.getElementById('itemsList');
    list.classList.add("hidden");
    list.classList.remove("show");

    let icons = document.getElementById('itemsIcons');
    icons.classList.add("show");
    icons.classList.remove("hidden");
}


detailsBtn.addEventListener('click', setDisplaytoList);

function setDisplaytoList() {
    let list = document.getElementById('itemsList');
    list.classList.add("show");
    list.classList.remove("hidden");

    let icons = document.getElementById('itemsIcons');
    icons.classList.add("hidden");
    icons.classList.remove("show");
}

carrouselBtn.addEventListener('click', function () {
    let icons = document.getElementById('carouselMain');
    let arrowdown = document.getElementById('arrowdown');
    icons.classList.add('hidden');
    arrowdown.classList.add('hidden');

})


//search field
const search = document.getElementById('searchForm')
const searchInput = document.getElementById('searchInput')

const scriptTag = document.querySelector('script[src="./javascripts/index.js"]');
const data = JSON.parse(scriptTag.getAttribute('data-data'));


search.addEventListener('submit', function (e) {
    e.preventDefault();


    //find matches with query
    const searchQuery = searchInput.value
    const matches = []
    data.forEach((item, index) => {
        if (item.title.toLowerCase().includes(searchQuery.toLowerCase())  || item.location.toLowerCase().includes(searchQuery.toLowerCase())) {
            matches.push(index)
        }
    });

    //show only cards that match
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
        if (searchQuery == '') {
            card.classList.add('show')
            card.classList.remove('hidden')
        }
        else if (!matches.includes(i)) {
            card.classList.add('hidden')
            card.classList.remove('show')
        } else {
            card.classList.add('show')
            card.classList.remove('hidden')
        }


    })
})

