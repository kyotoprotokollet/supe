<template>
    {{ instruction }}
</template>

<script>
import { onMounted } from 'vue'

export default {
    props: ['instruction'],

    setup (props) {
        onMounted(() => console.log(props.instruction))

        return {
        }
    }
}
</script>
