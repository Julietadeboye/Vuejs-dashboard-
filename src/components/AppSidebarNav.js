import { defineComponent, h, onMounted, ref, resolveComponent } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useStore } from "vuex";

import {
  CBadge,
  CSidebarNav,
  CNavItem,
  CNavGroup,
  CNavTitle,
} from "@coreui/vue";
import nav from "@/_nav.js";

import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";

const normalizePath = (path) =>
  decodeURI(path)
    .replace(/#.*$/, "")
    .replace(/(index)?\.(html)$/, "");

const isActiveItem = (route, item) => {
  if (item.to) {
    return normalizePath(route.path) === normalizePath(item.to);
  }

  if (item.items) {
    return item.items.some((child) => isActiveItem(route, child));
  }

  return false;
};

const AppSidebarNav = defineComponent({
  name: "AppSidebarNav",
  components: {
    CNavItem,
    CNavGroup,
    CNavTitle,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const firstRender = ref(true);

    onMounted(() => {
      firstRender.value = false;
    });

    const renderItem = (item) => {
      if (item.name === "Collapse") {
        return h(
          "div",
          {
            class: "nav-item nav-dropdown",
            onClick: () => store.commit("toggleSidebar"),
          },
          [
            h("div", { class: "nav-link" }, [
              item.icon
                ? h(resolveComponent("CIcon"), {
                    customClassName: "nav-icon",
                    name: item.icon,
                  })
                : h(
                    "span",
                    { class: "nav-icon" },
                    h("span", { class: "nav-icon-bullet" })
                  ),
              h("span", { class: "nav-text" }, item.name),
              item.badge &&
                h(
                  CBadge,
                  {
                    class: "ms-auto",
                    color: item.badge.color,
                  },
                  {
                    default: () => item.badge.text,
                  }
                ),
            ]),
          ]
        );
      }

      if (item.items) {
        return h(
          CNavGroup,
          {
            as: "div",
            compact: true,
            ...(firstRender.value && {
              visible: item.items.some((child) => isActiveItem(route, child)),
            }),
          },
          {
            togglerContent: () => [
              h(resolveComponent("CIcon"), {
                customClassName: "nav-icon",
                name: item.icon,
              }),
              item.name,
            ],
            default: () => item.items.map((child) => renderItem(child)),
          }
        );
      }

      return item.to
        ? h(
            RouterLink,
            {
              to: item.to,
              custom: true,
            },
            {
              default: (props) =>
                h(
                  resolveComponent(item.component),
                  {
                    active: isActiveItem(route, item),
                    as: "div",
                    href: props.href,
                    onClick: () => props.navigate(),
                  },
                  {
                    default: () => [
                      item.icon
                        ? h(resolveComponent("CIcon"), {
                            customClassName: "nav-icon",
                            name: item.icon,
                          })
                        : h(
                            "span",
                            { class: "nav-icon" },
                            h("span", { class: "nav-icon-bullet" })
                          ),
                      item.name,
                      item.badge &&
                        h(
                          CBadge,
                          {
                            class: "ms-auto",
                            color: item.badge.color,
                          },
                          {
                            default: () => item.badge.text,
                          }
                        ),
                    ],
                  }
                ),
            }
          )
        : h(
            resolveComponent(item.component),
            {
              as: "div",
            },
            {
              default: () => item.name,
            }
          );
    };

    return () =>
      h(
        CSidebarNav,
        {
          as: simplebar,
        },
        {
          default: () => nav.map((item) => renderItem(item)),
        }
      );
  },
});
export { AppSidebarNav };
