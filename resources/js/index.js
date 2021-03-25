import Index from "./views/Index";

import registerComponents from "./components";

import overrideRoutes from "./router";


let registerViews = vue => {
    vue.component('resource-index', Index);
}


Nova.booting((vue, router) => {
    registerComponents(vue);
    registerViews(vue);
    overrideRoutes(router);
})
