<template>
    <table
        v-if="resources.length > 0"
        class="table w-full"
        cellpadding="0"
        cellspacing="0"
        data-testid="resource-table"
    >
        <resource-table-head
            :shouldShowCheckboxes="shouldShowCheckboxes"
            :fields="fields"
            :requestOrderByChange="requestOrderByChange"
            :resetOrderBy="resetOrderBy"
            :resourceName="resourceName"
        />

        <resource-table-body
            :resources="resources"
            :resourceName="resourceName"
            :deleteResource="deleteResource"
            :restoreResource="restoreResource"
            :relationshipType="relationshipType"
            :viaRelationship="viaRelationship"
            :viaResource="viaResource"
            :viaResourceId="viaResourceId"
            :viaManyToMany="viaManyToMany"
            :selectedResources="selectedResources"
            :actionsAreAvailable="actionsAreAvailable"
            :shouldShowCheckboxes="shouldShowCheckboxes"
            :updateSelectionStatus="updateSelectionStatus"
        />
    </table>
</template>

<script>
import ResourceTable from "@nova-path/resources/js/components/ResourceTable";

export default {
    extends: ResourceTable,
}
</script>
