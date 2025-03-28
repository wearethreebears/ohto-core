import type { IIconCustomTokens, TIconMap } from "./Icon.types";
import { defineAsyncComponent } from "vue";

export const ICON_MAP: TIconMap = {
  ACCOUNT: defineAsyncComponent({
    loader: () => import("./icons/IconAccount.vue"),
  }),
  ASSETS: defineAsyncComponent({
    loader: () => import("./icons/IconAssets.vue"),
  }),
  ATTRIBUTES: defineAsyncComponent({
    loader: () => import("./icons/IconAttributes.vue"),
  }),
  ATTRIBUTE_TYPES: defineAsyncComponent({
    loader: () => import("./icons/IconAttributeTypes.vue"),
  }),
  BOLD: defineAsyncComponent({
    loader: () => import("./icons/IconBold.vue"),
  }),
  BRANDS: defineAsyncComponent({
    loader: () => import("./icons/IconBrands.vue"),
  }),
  CART: defineAsyncComponent({
    loader: () => import("./icons/IconCart.vue"),
  }),
  CROSS: defineAsyncComponent({
    loader: () => import("./icons/IconCross.vue"),
  }),
  CHEVRON_DOWN: defineAsyncComponent({
    loader: () => import("./icons/IconChevronDown.vue"),
  }),
  CHEVRON_LEFT: defineAsyncComponent({
    loader: () => import("./icons/IconChevronLeft.vue"),
  }),
  CHEVRON_RIGHT: defineAsyncComponent({
    loader: () => import("./icons/IconChevronRight.vue"),
  }),
  CHEVRON_UP: defineAsyncComponent({
    loader: () => import("./icons/IconChevronUp.vue"),
  }),
  CIRCLE: defineAsyncComponent({
    loader: () => import("./icons/IconCircle.vue"),
  }),
  CUSTOMERS: defineAsyncComponent({
    loader: () => import("./icons/IconCustomers.vue"),
  }),
  DISCOUNTS: defineAsyncComponent({
    loader: () => import("./icons/IconDiscounts.vue"),
  }),
  EDIT: defineAsyncComponent({
    loader: () => import("./icons/IconEdit.vue"),
  }),
  EYE: defineAsyncComponent({
    loader: () => import("./icons/IconEye.vue"),
  }),
  FILTERS: defineAsyncComponent({
    loader: () => import("./icons/IconFilters.vue"),
  }),
  FOLDER_CLOSED: defineAsyncComponent({
    loader: () => import("./icons/IconFolderClosed.vue"),
  }),
  FOLDER_PLUS: defineAsyncComponent({
    loader: () => import("./icons/IconFolderPlus.vue"),
  }),
  HERETIC_LOGO: defineAsyncComponent({
    loader: () => import("./icons/IconHereticLogo.vue"),
  }),
  HOME: defineAsyncComponent({
    loader: () => import("./icons/IconHome.vue"),
  }),
  LINK: defineAsyncComponent({
    loader: () => import("./icons/IconLink.vue"),
  }),
  LIST_BULLET: defineAsyncComponent({
    loader: () => import("./icons/IconListBullet.vue"),
  }),
  LIST_NUMBERED: defineAsyncComponent({
    loader: () => import("./icons/IconListNumbered.vue"),
  }),
  MENU: defineAsyncComponent({
    loader: () => import("./icons/IconMenu.vue"),
  }),
  MINUS: defineAsyncComponent({
    loader: () => import("./icons/IconMinus.vue"),
  }),
  ORDERS: defineAsyncComponent({
    loader: () => import("./icons/IconOrders.vue"),
  }),
  PLUS: defineAsyncComponent({
    loader: () => import("./icons/IconPlus.vue"),
  }),
  PRODUCTS: defineAsyncComponent({
    loader: () => import("./icons/IconProducts.vue"),
  }),
  PROFILE: defineAsyncComponent({
    loader: () => import("./icons/IconProfile.vue"),
  }),
  SEARCH: defineAsyncComponent({
    loader: () => import("./icons/IconSearch.vue"),
  }),
  TICK: defineAsyncComponent({
    loader: () => import("./icons/IconTick.vue"),
  }),
  TICK_FILLED: defineAsyncComponent({
    loader: () => import("./icons/IconTickFilled.vue"),
  }),
  TRASH: defineAsyncComponent({
    loader: () => import("./icons/IconTrash.vue"),
  }),
  UNLINK: defineAsyncComponent({
    loader: () => import("./icons/IconUnlink.vue"),
  }),
  UPLOAD: defineAsyncComponent({
    loader: () => import("./icons/IconUpload.vue"),
  }),
  WARNING: defineAsyncComponent({
    loader: () => import("./icons/IconWarning.vue"),
  }),
};

export const CUSTOM_CLASS_TOKEN_MAP: Record<keyof IIconCustomTokens, string> = {
  width: "w-[--width]",
  height: "h-[--height]",
};
