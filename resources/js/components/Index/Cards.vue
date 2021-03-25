<template>
    <div v-if="shouldShowCards">
        <cards
            v-if="smallCards.length > 0"
            :cards="smallCards"
            class="mb-3"
            :resource-name="resourceName"
        />

        <cards
            v-if="largeCards.length > 0"
            :cards="largeCards"
            size="large"
            :resource-name="resourceName"
        />
    </div>
</template>

<script>
export default {
    props: [
        'shouldShowCards',
        'smallCards',
        'resourceName',
        'largeCards',
    ],
}
</script>
