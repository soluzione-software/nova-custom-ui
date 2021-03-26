<template>
    <heading :level="1" class="mb-3" v-html="headingTitle"/>
</template>

<script>
export default {
    props: [
        'headingTitle',
    ],
}
</script>
