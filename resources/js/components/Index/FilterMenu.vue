<template>
    <filter-menu
        :resource-name="resourceName"
        :soft-deletes="softDeletes"
        :via-resource="viaResource"
        :via-has-one="viaHasOne"
        :trashed="trashed"
        :per-page="perPage"
        :per-page-options="perPageOptions"
        @clear-selected-filters="clearSelectedFilters"
        @filter-changed="filterChanged"
        @trashed-changed="trashedChanged"
        @per-page-changed="updatePerPageChanged"
    />
</template>

<script>
export default {
    props: [
        'resourceName',
        'softDeletes',
        'viaResource',
        'viaHasOne',
        'trashed',
        'perPage',
        'perPageOptions',
        'clearSelectedFilters',
        'filterChanged',
        'trashedChanged',
        'updatePerPageChanged',
    ],
}
</script>
