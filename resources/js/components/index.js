import ResourceTable from "./ResourceTable";
import ResourceTableHead from "./ResourceTableHead";
import ResourceTableBody from "./ResourceTableBody";

import ActionSelector from "./Index/ActionSelector";
import Cards from "./Index/Cards";
import CreateResourceButton from "./Index/CreateResourceButton";
import CustomHeader from "./Index/CustomHeader";
import CustomToolbar from "./Index/CustomToolbar";
import DeleteMenu from "./Index/DeleteMenu";
import FilterMenu from "./Index/FilterMenu";
import Heading from "./Index/Heading";
import LensesDropdown from "./Index/LensesDropdown";
import Pagination from "./Index/Pagination";
import ResourcesEmpty from "./Index/ResourcesEmpty";
import Search from "./Index/Search";
import SelectAllDropdown from "./Index/SelectAllDropdown";

export default vue => {
    vue.component('resource-table', ResourceTable);
    vue.component('resource-table-head', ResourceTableHead);
    vue.component('resource-table-body', ResourceTableBody);

    vue.component('index-action-selector', ActionSelector);
    vue.component('index-cards', Cards);
    vue.component('index-create-resource-button', CreateResourceButton);
    vue.component('index-custom-header', CustomHeader);
    vue.component('index-custom-toolbar', CustomToolbar);
    vue.component('index-delete-menu', DeleteMenu);
    vue.component('index-filter-menu', FilterMenu);
    vue.component('index-heading', Heading);
    vue.component('index-lenses-dropdown', LensesDropdown);
    vue.component('index-pagination', Pagination);
    vue.component('index-resources-empty', ResourcesEmpty);
    vue.component('index-search', Search);
    vue.component('index-select-all-dropdown', SelectAllDropdown);
}
