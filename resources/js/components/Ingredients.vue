<template>
    <div>
        <h3 class="text-2xl font-semibold">Ingredienser</h3>
    </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
    props: {
        data: {
            type: Object,
            required: false,
            default: () => {}
        },
    },

    setup (props) {
        onMounted(() => console.log(props.data))

        return {
        }
    }
}
</script>
