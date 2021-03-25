<template>
    <dropdown
        dusk="select-all-dropdown"
        placement="bottom-end"
        class="-mx-2"
    >
        <dropdown-trigger class="px-2">
            <fake-checkbox :checked="selectAllChecked"/>
        </dropdown-trigger>

        <dropdown-menu slot="menu" direction="ltr" width="250">
            <div class="p-4">
                <ul class="list-reset">
                    <li class="flex items-center mb-4">
                        <checkbox-with-label
                            :checked="selectAllChecked"
                            @input="toggleSelectAll"
                        >
                            {{ __('Select All') }}
                        </checkbox-with-label>
                    </li>
                    <li class="flex items-center">
                        <checkbox-with-label
                            dusk="select-all-matching-button"
                            :checked="selectAllMatchingChecked"
                            @input="toggleSelectAllMatching"
                        >
                            <template>
                          <span class="mr-1">
                            {{ __('Select All Matching') }} ({{
                                  allMatchingResourceCount
                              }})
                          </span>
                            </template>
                        </checkbox-with-label>
                    </li>
                </ul>
            </div>
        </dropdown-menu>
    </dropdown>
</template>

<script>
export default {
    props: [
        'selectAllChecked',
        'toggleSelectAll',
        'selectAllMatchingChecked',
        'toggleSelectAllMatching',
        'allMatchingResourceCount',
    ],
}
</script>
