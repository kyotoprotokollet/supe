import { createApp } from "vue"
import Ingredients from "./components/Ingredients.vue"
import Instruction from "./components/Instruction.vue"

const app = createApp({
    components: {
        Ingredients,
        Instruction,
    }
});

app.mount("#app")
