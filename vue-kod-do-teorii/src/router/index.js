import { createRouter, createWebHistory } from "vue-router";
import HomeSite from "@/views/1-directives/HomeSite.vue";
import ComponentsCommunicationSite from "@/views/2-communication/ComponentsCommunicationSite.vue";
import ShowMeMoreSite from "@/views/3-show-more/ShowMeMoreSite.vue";
import AjaxCallSite from "@/views/4-ajax-calls/AjaxCallSite.vue";
import CompositionApiSite from "@/views/5-composition-api/CompositionApiSite.vue";
import ShowAnimationsSite from "@/views/6-animations/ShowAnimationsSite.vue";
import GlobalStateSite from "@/views/7-global-state/GlobalStateSite.vue";
import MixinSite from "@/views/8-mixins/MixinSite.vue";
import OptionsApiSite from "@/views/9-options-api/OptionsApiSite.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "", component: HomeSite },
    { path: "/communication", component: ComponentsCommunicationSite },
    { path: "/show-more", component: ShowMeMoreSite },
    { path: "/ajax", component: AjaxCallSite },
    { path: "/mixins", component: MixinSite },
    { path: "/composition-api", component: CompositionApiSite },
    { path: "/animations", component: ShowAnimationsSite },
    { path: "/global-state", component: GlobalStateSite },
    { path: "/options-api", component: OptionsApiSite },
  ],
});

export default router;
