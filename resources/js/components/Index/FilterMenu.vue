<template>
    <filter-menu
        :resource-name="resourceName"
        :soft-deletes="softDeletes"
        :via-resource="viaResource"
        :via-has-one="viaHasOne"
        :trashed="trashed"
        :per-page="perPage"
        :per-page-options="perPageOptions"
        @clear-selected-filters="args => $emit('clear-selected-filters', args)"
        @filter-changed="args => $emit('filter-changed', args)"
        @trashed-changed="args => $emit('trashed-changed', args)"
        @per-page-changed="args => $emit('per-page-changed', args)"
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
    ],
}
</script>
