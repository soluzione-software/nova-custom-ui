<template>
    <custom-index-header
        v-if="!viaResource"
        class="mb-3"
        :resource-name="resourceName"
    />
</template>

<script>
export default {
    props: [
        'viaResource',
        'resourceName',
    ],
}
</script>
