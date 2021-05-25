import { createApp } from "vue"
import Ingredients from "./components/Ingredients.vue"

const app = createApp({
    components: {
        Ingredients,
    }
});

app.mount("#app")
