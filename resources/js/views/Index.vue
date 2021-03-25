<template>
    <loading-view
        :loading="initialLoading"
        :dusk="resourceName + '-index-component'"
    >
        <index-custom-header
            :viaResource="viaResource"
            :resourceName="resourceName"
        />

        <index-cards
            :shouldShowCards="shouldShowCards"
            :smallCards="smallCards"
            :resourceName="resourceName"
            :largeCards="largeCards"
        />

        <index-heading :headingTitle="headingTitle"/>

        <div class="flex">
            <!-- Search -->
            <index-search
                :resourceInformation="resourceInformation"
                :viaHasOne="viaHasOne"
                :search="search"
                :performSearch="performSearch"
            />

            <div class="w-full flex items-center" :class="{ 'mb-6': !viaResource }">
                <index-custom-toolbar
                    :viaResource="viaResource"
                    :resourceName="resourceName"
                />

                <!-- Create / Attach Button -->
                <index-create-resource-button
                    :singularName="singularName"
                    :resourceName="resourceName"
                    :viaResource="viaResource"
                    :viaResourceId="viaResourceId"
                    :viaRelationship="viaRelationship"
                    :relationshipType="relationshipType"
                    :authorizedToCreate="authorizedToCreate"
                    :resourceIsFull="resourceIsFull"
                    :authorizedToRelate="authorizedToRelate"
                />
            </div>
        </div>

        <card>
            <div
                class="flex items-center"
                :class="{
                  'py-3 border-b border-50':
                    shouldShowCheckBoxes ||
                    shouldShowDeleteMenu ||
                    softDeletes ||
                    !viaResource ||
                    hasFilters,
                }"
            >
                <div class="flex items-center">
                    <div class="px-3" v-if="shouldShowCheckBoxes">
                        <!-- Select All -->
                        <index-select-all-dropdown
                            :selectAllChecked="selectAllChecked"
                            :toggleSelectAll="toggleSelectAll"
                            :selectAllMatchingChecked="selectAllMatchingChecked"
                            :toggleSelectAllMatching="toggleSelectAllMatching"
                            :allMatchingResourceCount="allMatchingResourceCount"
                        />
                    </div>
                </div>

                <div class="flex items-center ml-auto px-3">
                    <!-- Action Selector -->
                    <index-action-selector
                        :selectedResources="selectedResources"
                        :resourceName="resourceName"
                        :actions="actions"
                        :pivotActions="pivotActions"
                        :pivotName="pivotName"
                        :currentSearch="currentSearch"
                        :encodedFilters="encodedFilters"
                        :currentTrashed="currentTrashed"
                        :viaResource="viaResource"
                        :viaResourceId="viaResourceId"
                        :viaRelationship="viaRelationship"
                        :selectedResourcesForActionSelector="selectedResourcesForActionSelector"
                        :getResources="getResources"
                    />

                    <!-- Lenses -->
                    <index-lenses-dropdown
                        :lenses="lenses"
                        :resourceName="resourceName"
                    />

                    <!-- Filters -->
                    <index-filter-menu
                        :resourceName="resourceName"
                        :softDeletes="softDeletes"
                        :viaResource="viaResource"
                        :viaHasOne="viaHasOne"
                        :trashed="trashed"
                        :perPage="perPage"
                        :perPageOptions="perPageOptions"
                        :clearSelectedFilters="clearSelectedFilters"
                        :filterChanged="filterChanged"
                        :trashedChanged="trashedChanged"
                        :updatePerPageChanged="updatePerPageChanged"
                    />

                    <index-delete-menu
                        :shouldShowDeleteMenu="shouldShowDeleteMenu"
                        :softDeletes="softDeletes"
                        :resources="resources"
                        :selectedResources="selectedResources"
                        :viaManyToMany="viaManyToMany"
                        :allMatchingResourceCount="allMatchingResourceCount"
                        :selectAllMatchingChecked="selectAllMatchingChecked"
                        :authorizedToDeleteSelectedResources="authorizedToDeleteSelectedResources"
                        :authorizedToForceDeleteSelectedResources="authorizedToForceDeleteSelectedResources"
                        :authorizedToDeleteAnyResources="authorizedToDeleteAnyResources"
                        :authorizedToForceDeleteAnyResources="authorizedToForceDeleteAnyResources"
                        :authorizedToRestoreSelectedResources="authorizedToRestoreSelectedResources"
                        :authorizedToRestoreAnyResources="authorizedToRestoreAnyResources"
                        :deleteSelectedResources="deleteSelectedResources"
                        :deleteAllMatchingResources="deleteAllMatchingResources"
                        :forceDeleteSelectedResources="forceDeleteSelectedResources"
                        :forceDeleteAllMatchingResources="forceDeleteAllMatchingResources"
                        :restoreSelectedResources="restoreSelectedResources"
                        :restoreAllMatchingResources="restoreAllMatchingResources"
                        @class="deleteModalOpen = false"
                    />
                </div>
            </div>

            <loading-view :loading="loading">
                <div
                    v-if="!resources.length"
                    class="flex justify-center items-center px-6 py-8"
                >
                    <index-resources-empty
                        :singularName="singularName"
                        :resourceName="resourceName"
                        :viaResource="viaResource"
                        :viaResourceId="viaResourceId"
                        :viaRelationship="viaRelationship"
                        :relationshipType="relationshipType"
                        :authorizedToCreate="authorizedToCreate"
                        :resourceIsFull="resourceIsFull"
                        :authorizedToRelate="authorizedToRelate"
                    />
                </div>

                <div class="overflow-hidden overflow-x-auto relative">
                    <!-- Resource Table -->
                    <resource-table
                        :authorized-to-relate="authorizedToRelate"
                        :resource-name="resourceName"
                        :resources="resources"
                        :singular-name="singularName"
                        :selected-resources="selectedResources"
                        :selected-resource-ids="selectedResourceIds"
                        :actions-are-available="allActions.length > 0"
                        :should-show-checkboxes="shouldShowCheckBoxes"
                        :via-resource="viaResource"
                        :via-resource-id="viaResourceId"
                        :via-relationship="viaRelationship"
                        :relationship-type="relationshipType"
                        :update-selection-status="updateSelectionStatus"
                        @order="orderByField"
                        @reset-order-by="resetOrderBy"
                        @delete="deleteResources"
                        @restore="restoreResources"
                        @actionExecuted="getResources"
                        ref="resourceTable"
                    />
                </div>

                <!-- Pagination -->
                <index-pagination
                    :paginationComponent="paginationComponent"
                    :shouldShowPagination="shouldShowPagination"
                    :hasNextPage="hasNextPage"
                    :hasPreviousPage="hasPreviousPage"
                    :loadMore="loadMore"
                    :selectPage="selectPage"
                    :totalPages="totalPages"
                    :currentPage="currentPage"
                    :perPage="perPage"
                    :resourceCountLabel="resourceCountLabel"
                    :resources="resources"
                    :allMatchingResourceCount="allMatchingResourceCount"
                />
            </loading-view>
        </card>
    </loading-view>
</template>

<script>
import Index from "@nova-path/resources/js/views/Index";

export default {
    extends: Index,
}
</script>
