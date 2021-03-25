<template>
    <create-resource-button
        :singular-name="singularName"
        :resource-name="resourceName"
        :via-resource="viaResource"
        :via-resource-id="viaResourceId"
        :via-relationship="viaRelationship"
        :relationship-type="relationshipType"
        :authorized-to-create="authorizedToCreate && !resourceIsFull"
        :authorized-to-relate="authorizedToRelate"
        class="flex-no-shrink ml-auto"
        :class="{ 'mb-6': viaResource }"
    />
</template>

<script>
export default {
    props: [
        'singularName',
        'resourceName',
        'viaResource',
        'viaResourceId',
        'viaRelationship',
        'relationshipType',
        'authorizedToCreate',
        'resourceIsFull',
        'authorizedToRelate',
    ],
}
</script>
