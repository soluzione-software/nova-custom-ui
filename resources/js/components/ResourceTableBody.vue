<template>
    <tbody>
    <tr
        v-for="(resource, index) in resources"
        @actionExecuted="$emit('actionExecuted')"
        :testId="`${resourceName}-items-${index}`"
        :key="resource.id.value"
        :delete-resource="deleteResource"
        :restore-resource="restoreResource"
        is="resource-table-row"
        :resource="resource"
        :resource-name="resourceName"
        :relationship-type="relationshipType"
        :via-relationship="viaRelationship"
        :via-resource="viaResource"
        :via-resource-id="viaResourceId"
        :via-many-to-many="viaManyToMany"
        :checked="selectedResources.indexOf(resource) > -1"
        :actions-are-available="actionsAreAvailable"
        :should-show-checkboxes="shouldShowCheckboxes"
        :update-selection-status="updateSelectionStatus"
    />
    </tbody>
</template>

<script>
export default {
    props: [
        'resources',
        'resourceName',
        'deleteResource',
        'restoreResource',
        'relationshipType',
        'viaRelationship',
        'viaResource',
        'viaResourceId',
        'viaManyToMany',
        'selectedResources',
        'actionsAreAvailable',
        'shouldShowCheckboxes',
        'updateSelectionStatus',
    ]
}
</script>
