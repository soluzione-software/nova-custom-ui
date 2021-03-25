<template>
    <dropdown
        class="bg-30 hover:bg-40 mr-3 rounded"
        v-if="lenses.length > 0"
    >
        <dropdown-trigger class="px-3">
            <h3
                slot="default"
                class="flex items-center font-normal text-base text-90 h-9"
            >
                {{ __('Lens') }}
            </h3>
        </dropdown-trigger>

        <dropdown-menu slot="menu" width="240" direction="rtl">
            <lens-selector :resource-name="resourceName" :lenses="lenses" />
        </dropdown-menu>
    </dropdown>
</template>

<script>
export default {
    props: [
        'lenses',
        'resourceName',
    ],
}
</script>
