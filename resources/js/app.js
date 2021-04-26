import { createApp } from "vue"
import TestComponent from "./components/TestComponent.vue"

const app = createApp({
    components: {
        TestComponent
    }
});

app.mount("#app")
