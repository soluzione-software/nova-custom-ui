<template>
    <div
        v-if="resourceInformation.searchable && !viaHasOne"
        class="relative h-9 flex-no-shrink"
        :class="{
          'mb-6': resourceInformation.searchable && !viaHasOne,
        }"
    >
        <icon type="search" class="absolute search-icon-center ml-3 text-70"/>

        <input
            data-testid="search-input"
            dusk="search"
            class="appearance-none form-search w-search pl-search shadow"
            :placeholder="__('Search')"
            type="search"
            :value="value"
            @input="({target}) => $emit('input', target.value)"
            @keydown="args => $emit('keydown', args)"
            @search="args => $emit('search', args)"
        />
    </div>
</template>

<script>
export default {
    props: [
        'resourceInformation',
        'viaHasOne',
        'value',
    ],
}
</script>
