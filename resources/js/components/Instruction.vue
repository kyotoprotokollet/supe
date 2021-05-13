<template>
    <div>
        <div class="flex">
            <div class="w-4 h-4 mr-4">
                <input type="checkbox" name="check" id="a" class="w-4 h-4">
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
    setup (props) {

        return {
        }
    }
}
</script>
