<template>
    <component
        :is="paginationComponent"
        v-if="shouldShowPagination"
        :next="hasNextPage"
        :previous="hasPreviousPage"
        @load-more="loadMore"
        @page="selectPage"
        :pages="totalPages"
        :page="currentPage"
        :per-page="perPage"
        :resource-count-label="resourceCountLabel"
        :current-resource-count="resources.length"
        :all-matching-resource-count="allMatchingResourceCount"
    >
          <span
              v-if="resourceCountLabel"
              class="text-sm text-80 px-4"
              :class="{
              'ml-auto': paginationComponent == 'pagination-links',
            }"
          >
            {{ resourceCountLabel }}
          </span>
    </component>
</template>

<script>
export default {
    props: [
        'paginationComponent',
        'shouldShowPagination',
        'hasNextPage',
        'hasPreviousPage',
        'loadMore',
        'selectPage',
        'totalPages',
        'currentPage',
        'perPage',
        'resourceCountLabel',
        'resources',
        'allMatchingResourceCount',
    ],
}
</script>
