<template>
    <thead>
        <tr>
            <!-- Select Checkbox -->
            <th
                :class="{
                    'w-16': shouldShowCheckboxes,
                    'w-8': !shouldShowCheckboxes,
                  }"
            >
                &nbsp;
            </th>

            <!-- Field Names -->
            <th v-for="field in fields" :class="`text-${field.textAlign}`">
                <sortable-icon
                    @sort="requestOrderByChange(field)"
                    @reset="resetOrderBy(field)"
                    :resource-name="resourceName"
                    :uri-key="field.sortableUriKey"
                    v-if="field.sortable"
                >
                    {{ field.indexName }}
                </sortable-icon>

                <span v-else>{{ field.indexName }}</span>
            </th>

            <!-- Actions, View, Edit, Delete -->
            <th>&nbsp;</th>
        </tr>
    </thead>
</template>

<script>
export default {
    props: [
        'shouldShowCheckboxes',
        'fields',
        'requestOrderByChange',
        'resetOrderBy',
        'resourceName',
    ]
}
</script>
