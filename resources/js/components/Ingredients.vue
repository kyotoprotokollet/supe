<template>
    <div class="space-y-4">
        <div>
            <h3 class="text-2xl font-semibold">Ingredienser</h3>
        </div>
        <ul class="space-y-1">
            <li v-for="(item, index) in ingredients" :key="index">
                <h4 v-if="item.type === 'ingredient_headline'" class="mt-4 text-lg font-semibold">
                    {{ item.ingredient_headline }}
                </h4>
                <div v-else-if="item.type === 'ingredient_item'" class="flex">
                    <div class="w-24">
                        <span v-if="item.amount">{{ item.amount }}</span> <span v-if="item.unit && item.unit.value">{{ item.unit.value }}</span>
                    </div>
                    <div v-if="item.ingredient" class="pl-4">
                        {{ item.ingredient }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
    props: {
        ingredients: {
            type: Object,
            required: false,
            default: () => {}
        },
    },

    setup (props) {
        onMounted(() => console.log(props.ingredients))

        return {
        }
    }
}
</script>
