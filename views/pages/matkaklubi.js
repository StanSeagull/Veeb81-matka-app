console.log("test")

const matk1 = {
    nimetus: "The overnight hike",
    pildiUrl: "./pildid/night.jpg",
    kohti: 12,
    kirjeldus: "Day hikes are usually simple affairs that start and end at the door of your vehicle at a trailhead, or maybe at your own front door. ",
    registreerunud: ['Mati', 'Kati', 'Rebase Rein', "Jänku Juta"],
}
const matk2 = {
    nimetus: "Distance hike",
    pildiUrl: "./pildid/distance.jpeg",
    kohti: 6,
    kirjeldus: "A long-distance trail is a longer recreational trail mainly through rural areas used for hiking.",
    registreerunud: ['Rebase Rein', "Jأ¤nku Juta"],
}

const matk3 = {
    nimetus: "Hike-a-Bike",
    pildiUrl: "./pildid/bike.jpg",
    kohti: 10,
    kirjeldus: "In this week's skills blog we are looking at how to “hike-a-bike”, when the terrain gets too steep or technical, you have to resort to hiking with the bike on your back.",
    registreerunud: ['Rebase Rein', "Jänku Juta"],
}

const matk4 = {
    nimetus: "Nordic walking around Tartu",
    pildiUrl: "./pildid/kepid.jpg",
    kohti: 10,
    kirjeldus: "Trekking poles act as another set of limbs to give you more stability when tackling tricky terrain. ",
    registreerunud: ['Rebase Rein', "Jänku Juta"],
}

const matkad = [matk1, matk2, matk3, matk4]

function naitaMatkaAndmeid(matk) {
    const valjundElement = document.getElementById("matkade_valjund")
    const vabadKohad = matk.kohti - matk.registreerunud.length
    let valjundHtml = `
        <div class="col-md-4 card">
            <img class="card-img-top" src="${matk.pildiUrl}" alt="">
            <div class="card-body">
                <h4 class="card-title">${matk.nimetus}</h4>
                <p class="card-text">
                    ${matk.kirjeldus}
                </p>
                <p class="card-text">
                    Vacancies: ${vabadKohad}
                </p>
                <a href="#" class="btn btn-success" >Register</a>
            </div>
        </div>    
    `
    valjundElement.innerHTML += valjundHtml
}

for (const matk of matkad) {
    naitaMatkaAndmeid(matk)
}