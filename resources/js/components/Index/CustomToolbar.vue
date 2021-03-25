<template>
    <custom-index-toolbar
        v-if="!viaResource"
        :resource-name="resourceName"
    />
</template>

<script>
export default {
    props: [
        'viaResource',
        'resourceName',
    ]
}
</script>
