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
            v-model="search"
            @keydown.stop="performSearch"
            @search="performSearch"
        />
    </div>
</template>

<script>
export default {
    props: [
        'resourceInformation',
        'viaHasOne',
        'search',
        'performSearch',
    ],
}
</script>
