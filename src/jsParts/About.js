import { createTemplate } from "./template"
const content = document.getElementById('content')
export const AboutSection = () => {
    content.innerHTML = ''
    let element = createTemplate(`
        <section class="about-us">
            <div>
                <h1>Welcome to Bite & Dine!</h1>
                <p>At Bite & Dine, we’re passionate about bringing the best of both worlds to your plate. Nestled in
                    the heart of our city, our restaurant offers a delightful blend of hearty meals and fast food
                    favorites.</p>
            </div>
            <div>
                <h1>Our Story</h1>
                <p>Founded with a love for great food and a commitment to quality, Bite & Dine is more than just a
                    restaurant – it’s a destination for food enthusiasts. Our mission is to create a warm and
                    inviting space where everyone can enjoy delicious dishes made from the freshest ingredients.
            </div>
            <div>
                <h1>What We Offer!</h1>
                <p>At Bite & Dine, we take pride in our diverse menu that caters to all tastes. Whether you’re
                    craving a gourmet pizza with a perfect crust or a quick and satisfying fast food fix, we’ve got
                    you covered. Our talented chefs craft each dish with care, ensuring every bite is bursting with
                    flavor.</p>
            </div>
            <div>
                <h1>Join Us</h1>
                <p>
                    Whether you're here for a leisurely meal with friends and family or just need a quick bite on
                    the go, Bite & Dine is the place to be. Come experience the perfect fusion of quality dining and
                    fast food convenience. We look forward to serving you soon!</p>
            </div>

        </section>
        `)
    content.appendChild(element)
}