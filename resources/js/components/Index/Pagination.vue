<template>
    <component
        :is="paginationComponent"
        v-if="shouldShowPagination"
        :next="hasNextPage"
        :previous="hasPreviousPage"
        :pages="totalPages"
        :page="currentPage"
        :per-page="perPage"
        :resource-count-label="resourceCountLabel"
        :current-resource-count="resources.length"
        :all-matching-resource-count="allMatchingResourceCount"
        @load-more="args => $emit('load-more', args)"
        @page="args => $emit('page', args)"
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
        'totalPages',
        'currentPage',
        'perPage',
        'resourceCountLabel',
        'resources',
        'allMatchingResourceCount',
    ],
}
</script>
