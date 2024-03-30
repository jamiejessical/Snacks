document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

toggleContent()

function toggleContent() {
  var contentSection = document.getElementById("content");
    if (contentSection.style.display === "none") {
        contentSection.style.display = "block";
        } else {
        contentSection.style.display = "none";
        }
}

function toggleContent2() {
  var contentSection = document.getElementById("content");
  var coverDiv = document.getElementById("cover");
    if (contentSection.style.display === "block") {
        contentSection.style.display = "block";
        } else {
        contentSection.style.display = "block";
        }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function () {
    // Attach click event listener to the filterButtons div
    document.getElementById('filterButtons').addEventListener('click', function() {
        playAudio2();
    });
});


function filterData(year) {
    document.getElementById('gridContainer').innerHTML = '';
    const filteredData = year === '' ? data : data.filter(item => item.year === year);
    filteredData.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.innerHTML = `
            <img src="./img/${item.image}" alt="${item.name}"/>
            <hr>
            <div class="priceButton">${item.price}</div>
        `;
        gridItem.querySelector('.priceButton').addEventListener('click', () => {
            showItemDescription(item);
            scrollvendingMachineBottom();
        });

        document.getElementById('gridContainer').appendChild(gridItem);
    });
}

function filterByTaste(taste) {
    document.getElementById('gridContainer').innerHTML = '';
    const filteredData = taste === '' ? data : data.filter(item => item.taste.includes(taste));
    filteredData.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.innerHTML = `
            <img src="./img/${item.image}" alt="${item.name}"/>
            <hr>
            <div class="priceButton">${item.price}</div>
        `;
        gridItem.querySelector('.priceButton').addEventListener('click', () => {
            showItemDescription(item);
            scrollvendingMachineBottom();
        });

        document.getElementById('gridContainer').appendChild(gridItem);
    });
}

function showItemDescription(item) {
    const descriptionContainer = document.querySelector('.descriptionContainer');
    descriptionContainer.innerHTML = `
        <h5>${item.name}</h5>
        <br>
        <h6><strong>Origin:</strong> ${item.origin}</h6>
        <h7>${item.description}</h7>
    `;
    const fallenImage = document.querySelector('.fallenImage');
    fallenImage.style.backgroundImage = `url(./img/${item.image2})`;
    fallenImage.style.backgroundSize = 'cover';

    const audio = document.getElementById('audio');
    audio.play();

    const cover = document.querySelector('.cover');
    if (cover.style.height === '100%') {
        cover.style.height = '10%';
    } else {
        cover.classList.add('animate-height');
        setTimeout(() => {
            cover.style.height = '10%';
            cover.classList.remove('animate-height');
        }, 2000);
    }
}

function scrollvendingMachineBottom() {
    const vendingMachineBottom = document.querySelector('.vendingMachineBottom');
    vendingMachineBottom.scrollIntoView({ behavior: 'smooth' });
}

function playAudio2() {
    const audio = document.getElementById('audio2');
    audio.play();
}


const data = [
    {
        "name": "Dahfa Dried Fish Fillet", "taste": "salty", "year": "1970s", "origin": "malaysia", "price": "$3.97", "description": "Chewy and slightly savoury, this dried fish snack is a favourite childhood nostalgia snack made from codfish and is rich in protein.", "image": "Dahfa.png", "image2": "Dahfa2.png"
    },
    {
        "name": "Eyeglass/Bangle Chocolate", "taste": "sweet", "year": "1990s", "origin": "singapore", "price": "$0.50", "description": "Nostalgic chocolate candy, popular among kids, that comes in a tin foil packaging shaped like eyeglasses or bangles.", "image": "EyeglassChocolate.png", "image2": "EyeglassChocolate2.png"
    },
    {
        "name": "Mamee Monster", "taste": "salty", "year": "1970s", "origin": "malaysia", "price": "$2.75", "description": "Mamee Monster is a popular crunchy, fried noodle snack which typically come in various flavors such as curry, chicken and Tom Yam.", "image": "Mamee.png", "image2": "Mamee2.png"
    },
    {
        "name": "Ice Pops", "taste": "sweet", "year": "1990s", "origin": "singapore", "price": "$0.50", "description": "The colourful and iconic dessert is a retro snack and a good way to triumph the muggy singapore weather.", "image": "IcePops.png", "image2": "IcePops2.png"
    },
    {
        "name": "Fish Ball Cracker", "taste": "salty", "year": "1980s", "origin": "singapore", "price": "$4.90", "description": "Deep-fried, crunchy fishballs that can be found in old-school convenience stores in singapore.", "image": "FishBallCracker.png", "image2": "FishBallCracker2.png"
    },
    {
        "name": "Milo", "taste": "sweet", "year": "< 1970", "origin": "australia", "price": "$1.00", "description": "Milo is a brand of chocolate and malt powder beverage enjoyed worldwide, especially in singapore, where kids are often treated to 'milo vans' in school.", "image": "Milo.png", "image2": "Milo2.png"
    },
    {
        "name": "Houten Chilli Tapioca Chips", "taste": "spicy", "year": "1970s", "origin": "singapore", "price": "$6.50", "description": "This chewy snack provides a yummy balance between sweet and spicy, and is made out of tapioca.", "image": "Houten.png", "image2": "Houten2.png"
    },
    {
        "name": "Gem Biscuit", "taste": "sweet", "year": "< 1970", "origin": "singapore", "price": "$2.99", "description": "Gem Biscuits are iconic, petite biscuits with a swirl of colored sugar icing on top that brings many fond memories for people in singapore.", "image": "GemBiscuit.png", "image2": "GemBiscuit2.png"
    },
    {
        "name": "Love Letters (Kueh Kapit)", "taste": "salty", "year": "< 1970", "origin": "malaysia", "price": "$9.90", "description": "They are made with 100% pure coconut milk and natural ingredients, and look just like a rolled up letter, hence its name.", "image": "LoveLetters.png", "image2": "LoveLetters2.png"
    },
    {
        "name": "Apollo Chocolate Wafer", "taste": "sweet", "year": "1980s", "origin": "malaysia", "price": "$2.50", "description": "Nolstalgic chocolate wafer biscuit that comes in a iconic red wrapper and is very affordable.", "image": "Milo.png", "image": "ApolloWafer.png", "image2": "ApolloWafer2.png"
    },
    {
        "name": "White Rabbit", "taste": "sweet", "year": "< 1970", "origin": "china", "price": "$3.34", "description": "These White Rabbit candies are a milk-based white candy with a soft and chewy texture, and are extremely popular everywhere besides singapore.", "image": "WhitRabbit.png", "image2": "WhitRabbit2.png"
    },
    {
        "name": "Kueh Piring", "taste": "salty", "year": "< 1970", "origin": "singapore", "price": "$0.50", "description": "Pastel coloured circular thin wafers found in old-school bakeries and convenience stores in singapore.", "image": "Piring.png", "image2": "Piring2.png"
    },
    {
        "name": "Haw Flakes", "taste": "sweet", "year": "1970s", "origin": "china", "price": "$0.20", "description": "This Iconic snack is made from the fruit of the chinese hawthorn, which is dried, mashed, and then formed into small, round discs.", "image": "HawFlakes.png", "image2": "HawFlakes2.png"
    },
    {
        "name": "Anything & Whatever", "taste": "sweet", "year": "2000s", "origin": "singapore", "price": "$1.00", "description": "Anything was the fizzy version of Whatever, and both mystery drinks had a range of possible flavours like Cloudy Lemon and White Grape Tea.", "image": "Anything.png", "image2": "Anything2.png"
    },
    {
        "name": "PoPo Muruku", "taste": "salty", "year": "< 1970", "origin": "malaysia", "price": "$2.84", "description": "PoPo Muruku is known for its distinct shape, which often resembles a spiral or a flower. The most memorable thing about this entry-level muruku is the minimal design of the wrapper.", "image": "PoPoMuruku.png", "image2": "PoPoMuruku2.png"
    },
    {
        "name": "Super Ring", "taste": "cheesy", "year": "1970s", "origin": "malaysia", "price": "$1.31", "description": "Super Ring is an all-time favourite snack with a mouth-watering cheesy flavour, shaped like rings.", "image": "SuperRing.png", "image2": "SuperRing2.png"
    },
    {
        "name": "Vitagen", "taste": "sweet", "year": "1970s", "origin": "singapore", "price": "$3.25", "description": "Vitagen is the first and only cultured milk drink in singapore that contains both probiotics and prebiotics.", "image": "Vitagen.png", "image2": "Vitagen2.png"
    },
    {
        "name": "Amazin' Graze Nuts", "taste": "salty, spicy", "year": "2000s", "origin": "singapore", "price": "$10.00", "description": "Amazin' Graze nuts are a brand of healthy snack products originating from singapore and have since been very popular.", "image": "AmazinGraze.png", "image2": "AmazinGraze2.png"
    },
    {
        "name": "Couch Potato Wheel Crackers", "taste": "salty", "year": "1980s", "origin": "malaysia", "price": "$4.90", "description": "Classic old school wheel-shaped crackers made from potatoes and are known for their crispy texture and savory flavor.", "image": "Wheel.png", "image2": "Wheel2.png"
    },
    {
        "name": "Ooh Mala Snacks", "taste": "spicy", "year": "2000s", "origin": "singapore", "price": "$3.50", "description": "Ooh is a brand of spicy mala flavoured snacks ranging from green peas to crackers and peanuts.", "image": "Mala.png", "image2": "Mala2.png"
    },
    {
        "name": "Keropok", "taste": "salty", "year": "1980s", "origin": "malaysia", "price": "$2.00", "description": "A traditional malay fish cracker snack made from fish and sago flour and seasoned with salt and sugar.", "image": "Keropok.png", "image2": "Keropok2.png"
    },
    {
        "name": "Pola Snack", "taste": "salty", "year": "1980s", "origin": "indonesia", "price": "$2.90", "description": "The pola snack is a tasty wheat-based snack that comes in animal forms and are baked, not fried.", "image": "Pola.png", "image2": "Pola2.png"
    },
    {
        "name": "Whistle Candy", "taste": "sweet", "year": "1980s", "origin": "japan", "price": "$2.00", "description": "The donut-shaped treats make a whistling noise when you blow through the hole in the middle.", "image": "WhistleSweet.png", "image2": "WhistleSweet2.png"
    },
    {
        "name": "Bee Bee", "taste": "salty", "year": "1990s", "origin": "singapore", "price": "$0.50", "description": "Short orange sticks with a crunchy texture and slighty spicy taste.", "image": "BeeBee.png", "image2": "BeeBee2.png"
    },
    {
        "name": "Chocolate Gold Coin", "taste": "sweet", "year": "1990s", "origin": "singapore", "price": "$0.50", "description": "Coin shaped golden chocolate candies that usually come in bag or a chest, and is a fun novelty snack for many kids.", "image": "ChocolateCoin.png", "image2": "ChocolateCoin2.png"
    },
    {
        "name": "Seasoned Seaweed", "taste": "salty", "year": "1990s", "origin": "singapore", "price": "$8.83", "description": "The seaweed snack is very affordable, and comes in a convenient string of packets that you can fold up and carry everywhere.", "image": "Seaweed.png", "image2": "Seaweed2.png"
    },
    {
        "name": "Uncle Saba's Poppadoms", "taste": "salty", "year": "2000s", "origin": "singapore", "price": "$2.00", "description": "Poppadoms originated from India, but Uncle Saba’s was the first to produce ready-to-eat poppadom lentil chips in a can.", "image": "SabaPappadom.png", "image2": "SabaPappadom2.png"
    },
    {
        "name": "Pink Dolphin Drink", "taste": "sweet", "year": "1990s", "origin": "singapore", "price": "$1.50", "description": "A peach flavoured drink infused with Vitamin C, B6 & B12 that was a popular go to drink for students.", "image": "pinkDolphin.png", "image2": "pinkDolphin2.png"
    },
    {
        "name": "Irvin's Fish Skin Snack", "taste": "salty, spicy", "year": "2000s", "origin": "singapore", "price": "$18.00", "description": "The crisps of fried fish skin mixed with real salted egg, aromatic curry leaves, and vibrant red chili peppers creates an all-rounded multi-sensory snacking experience.", "image": "Irvins.png", "image2": "Irvins2.png"
    },
    {
        "name": "Sticky Candy", "taste": "sweet", "year": "2000s", "origin": "singapore", "price": "$5.00", "description": "Sticky is Singapore's first brand specialising in  rock candy and was extremely popular among teens in the early 2000s. They use only sugar and water to create customised intricate designs.", "image": "Sticky.png", "image2": "Sticky2.png"
    },
];



filterData('');

