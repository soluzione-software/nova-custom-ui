<template>
    <action-selector
        v-if="selectedResources.length > 0"
        :resource-name="resourceName"
        :actions="actions"
        :pivot-actions="pivotActions"
        :pivot-name="pivotName"
        :query-string="{
              currentSearch,
              encodedFilters,
              currentTrashed,
              viaResource,
              viaResourceId,
              viaRelationship,
            }"
        :selected-resources="selectedResourcesForActionSelector"
        @actionExecuted="getResources"
    />
</template>

<script>
export default {
    props: [
        'selectedResources',
        'resourceName',
        'actions',
        'pivotActions',
        'pivotName',
        'currentSearch',
        'encodedFilters',
        'currentTrashed',
        'viaResource',
        'viaResourceId',
        'viaRelationship',
        'selectedResourcesForActionSelector',
        'getResources',
    ],
}
</script>
