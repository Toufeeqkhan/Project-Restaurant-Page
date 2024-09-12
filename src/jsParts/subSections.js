import { images } from "./imageLinks"


export const appetizerSS = () =>{
    return `
        <section>
                <div class="text-part">
                    <h2>Appetizer</h2>
                    <p>Start with our fresh bread served with an egg and salad on top.</p>
                </div>
                <img src=${images.appetizers} alt="Appetizers">
        </section>
         `
}
export const mainDishSS = () =>{
    return `
        <section>
                <img src=${images.mainDish} alt="Main Dish">
                <div class="text-part">
                    <h2>Main Dish</h2>
                    <p>Our juicy fresh-grilled Steak is served to satisfy every guest.</p>
                </div>
        </section>
            `
}
export const sideDishSS = () =>{
    return `
        <section>
                <div class="text-part">
                    <h2>Side Dish</h2>
                    <p>Finish your kitchen experience with a cake to choose your sweet.</p>
                </div>
                <img src=${images.sideDish} alt="Side Dish">
        </section>
            `
}
export const dessertSS = ()=>{ 
    return `
         <section>
                <img src=${images.dessert} alt="Dessert">
                <div class="text-part">
                    <h2>Dessert</h2>
                    <p>Finish your kitchen experience with a cake to choose your sweet.</p>
                </div>
        </section>
            `
}