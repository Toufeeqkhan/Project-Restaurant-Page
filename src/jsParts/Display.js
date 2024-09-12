import { images } from "./imageLinks"
import { appetizerSS, mainDishSS, sideDishSS, dessertSS } from "./subSections"
import { createTemplate } from "./template"

const content = document.getElementById('content')

class Display {
    heroSection() {
        let hero = createTemplate(`
            <section class="hero-section">
                        <div class="hero-left">
                            <p>"Crafted with <strong>Love</strong>, Baked to <strong>Perfection</strong>."</p>
                            <button>Book A Table</button>
                        </div>
                        <img src=${images.bigPizza} alt="Hero img">
                    </section>
            `)
        content.appendChild(hero)
    }

    storySection() {
        let element = createTemplate(`
            <section class="story-section">
                <img src=${images.floatingPizza} alt="Pizza">
                <div class="text-part">
                    <h2>Discover</h2>
                    <h2>Our Story</h2>
                    <p>
                        "Get the best steakhouse experience at the Steakhouse. Whether you're joining us for a romantic
                        dinner, a business meeting, or a family night out, you'll feel right at home. Our welcoming
                        service and distinctive ambiance deliver an unforgettable dining experience."
                    </p>
                    <button>More About Us →</button>
                </div>
            </section>
            `)
        content.appendChild(element)
    }

    ingredientsSection() {
        let element = createTemplate(`
            <section class="best-ingredients">
                <div class="text-part">
                    <h1>Discover</h1>
                <h1>The Best Ingredients</h1>
                <p>We take an enormous amount of pride in sourcing ingredients carefully to ensure that the flavors we
                    find are reflected in the dining experience. It's our goal to serve the highest quality beef and
                    produce by placing an emphasis on using only ingredients that remain as authentic as found in other
                    restaurants.</p>
                </div>
                <img src=${images.ingredients} alt="Ingredients">
            </section>
            `)
        content.appendChild(element)
    }
    
    eventsSection() {
        let element = createTemplate(`
             <section class="upcoming-events">
                <img src=${images.events} alt="Events">
                <div class="text-part">
                    <h2>Discover</h2>
                    <h2>Upcoming Events</h2>
                    <p>Not only can you spend the night with us, but you can gather up with your friends while enjoying
                        the
                        food you crave.</p>
                    <p>Barbecue Party: December 25 | 8 p.m. | Join us!</p>
                    <button>More Events →</button>
                </div>
            </section>>
            `)
        content.appendChild(element)
    }

    
    reservationSection() {
        let element = createTemplate(`
            <section class="booking">
                <h1>Reservation</h1>
                <h1>Book Your Table</h1>
                <button>Online Booking</button>
            </section>
            `)
        content.appendChild(element)
    }

    menuSection() {
        let element = createTemplate(`
                <section class="menu-section">
                        <div class="text-part">
                            <div>
                                <h1>Discover</h1>
                                <h1>Our Menu</h1>
                            </div>
                            <p>Few things come close to the joy of steak and chips – cooked simply with tender, juicy care.
                                Discover the Chef's latest creations and indulge in our appetizers, entrées, and desserts, each
                                handcrafted to perfection by our steakhouse chefs for everyone to enjoy.</p>
                        </div>
                        <div>
                            ${appetizerSS()}
                            ${mainDishSS()}
                            ${sideDishSS()}
                            ${dessertSS()}  
                        </div>
                </section>
            `)

        content.appendChild(element)
    }

}

export const newDisplay = () => {
    content.innerHTML = ''
 let main = new Display
    main.heroSection()
    main.storySection()
    main.menuSection()
    main.eventsSection()
    main.ingredientsSection()
    main.reservationSection()
}
export const newMenu = () => {
     content.innerHTML = ''
    let main = new Display
    main.menuSection()
    main.reservationSection()
}