<template>
    <delete-menu
        v-if="shouldShowDeleteMenu"
        dusk="delete-menu"
        :soft-deletes="softDeletes"
        :resources="resources"
        :selected-resources="selectedResources"
        :via-many-to-many="viaManyToMany"
        :all-matching-resource-count="allMatchingResourceCount"
        :all-matching-selected="selectAllMatchingChecked"
        :authorized-to-delete-selected-resources="authorizedToDeleteSelectedResources"
        :authorized-to-force-delete-selected-resources="authorizedToForceDeleteSelectedResources"
        :authorized-to-delete-any-resources="authorizedToDeleteAnyResources"
        :authorized-to-force-delete-any-resources="authorizedToForceDeleteAnyResources"
        :authorized-to-restore-selected-resources="authorizedToRestoreSelectedResources"
        :authorized-to-restore-any-resources="authorizedToRestoreAnyResources"
        @deleteSelected="args => $emit('deleteSelected', args)"
        @deleteAllMatching="args => $emit('deleteAllMatching', args)"
        @forceDeleteSelected="args => $emit('forceDeleteSelected', args)"
        @forceDeleteAllMatching="args => $emit('forceDeleteAllMatching', args)"
        @restoreSelected="args => $emit('restoreSelected', args)"
        @restoreAllMatching="args => $emit('restoreAllMatching', args)"
        @close="args => $emit('close', args)"
    />
</template>

<script>
export default {
    props: [
        'shouldShowDeleteMenu',
        'softDeletes',
        'resources',
        'selectedResources',
        'viaManyToMany',
        'allMatchingResourceCount',
        'selectAllMatchingChecked',
        'authorizedToDeleteSelectedResources',
        'authorizedToForceDeleteSelectedResources',
        'authorizedToDeleteAnyResources',
        'authorizedToForceDeleteAnyResources',
        'authorizedToRestoreSelectedResources',
        'authorizedToRestoreAnyResources',
    ],
}
</script>
