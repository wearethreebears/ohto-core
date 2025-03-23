import type { IDefaultTokens } from "./DesignTokens.types";

export const DEFAULT_CLASS_TOKEN_MAP: Record<keyof IDefaultTokens, string> = {
  backgroundColor: "bg-[--backgroundColor]",
  hover__backgroundColor: "hover:bg-[--hover__backgroundColor]",
  disabled__backgroundColor: "hover:bg-[--disabled__backgroundColor]",
  focus__backgroundColor: "hover:bg-[--focus__backgroundColor]",
  placeholder__backgroundColor:
    "placeholder:bg-[--placeholder__backgroundColor]",

  borderColor: "border-[--borderColor]",
  hover__borderColor: "hover:border-[--hover__borderColor]",
  disabled__borderColor: "disabled:border-[--disabled__borderColor]",
  focus__borderColor: "focus:border-[--focus__borderColor]",
  placeholder__borderColor: "placeholder:border-[--placeholder__borderColor]",

  ringColor: "ring-[--ringColor]",
  hover__ringColor: "hover:ring-[--hover__ringColor]",
  disabled__ringColor: "disabled:ring-[--disabled__ringColor]",
  focus__ringColor: "focus:ring-[--focus__ringColor]",
  placeholder__ringColor: "placeholder:ring-[--placeholder__ringColor]",

  typographyColor: "text-[--typographyColor]",
  hover__typographyColor: "hover:text-[--hover__typographyColor]",
  disabled__typographyColor: "disabled:text-[--disabled__typographyColor]",
  focus__typographyColor: "focus:text-[--focus__typographyColor]",
  placeholder__typographyColor:
    "placeholder:text-[--placeholder__typographyColor]",

  typographyFont: "text-[--typographyFont]",
  hover__typographyFont: "hover:text-[--hover__typographyFont]",
  disabled__typographyFont: "disabled:text-[--disabled__typographyFont]",
  focus__typographyFont: "focus:text-[--focus__typographyFont]",
  placeholder__typographyFont:
    "placeholder:text-[--placeholder__typographyFont]",

  cursor: "cursor-[--cursor]",
  hover__cursor: "hover:cursor-[--hover__cursor]",
  disabled__cursor: "disabled:cursor-[--disabled__cursor]",
  focus__cursor: "focus:cursor-[--focus__cursor]",
  placeholder__cursor: "placeholder:cursor-[--placeholder__cursor]",

  bottom: "bottom-[--bottom]",
  hover__bottom: "hover:bottom-[--hover__bottom]",
  disabled__bottom: "disabled:bottom-[--disabled__bottom]",
  focus__bottom: "focus:bottom-[--focus__bottom]",
  placeholder__bottom: "placeholder:bottom-[--placeholder__bottom]",

  left: "left-[--left]",
  hover__left: "hover:left-[--hover__left]",
  disabled__left: "disabled:left-[--disabled__left]",
  focus__left: "focus:left-[--focus__left]",
  placeholder__left: "placeholder:left-[--placeholder__left]",

  right: "right-[--right]",
  hover__right: "hover:right-[--hover__right]",
  disabled__right: "disabled:right-[--disabled__right]",
  focus__right: "focus:right-[--focus__right]",
  placeholder__right: "placeholder:right-[--placeholder__right]",

  top: "top-[--top]",
  hover__top: "hover:top-[--hover__top]",
  disabled__top: "disabled:top-[--disabled__top]",
  focus__top: "focus:top-[--focus__top]",
  placeholder__top: "placeholder:top-[--placeholder__top]",

  typographySize: "text-[length:--typographySize]",
  hover__typographySize: "hover:text-[length:--hover__typographySize]",
  disabled__typographySize: "disabled:text-[length:--disabled__typographySize]",
  focus__typographySize: "focus:text-[length:--focus__typographySize]",
  placeholder__typographySize:
    "placeholder:text-[length:--placeholder__typographySize]",

  margin: "m-[--margin]",
  hover__margin: "hover:m-[--hover__margin]",
  disabled__margin: "disabled:m-[--disabled__margin]",
  focus__margin: "focus:m-[--focus__margin]",
  placeholder__margin: "placeholder:m-[--placeholder__margin]",

  marginX: "mx-[--marginX]",
  hover__marginX: "hover:mx-[--hover__marginX]",
  disabled__marginX: "disabled:mx-[--disabled__marginX]",
  focus__marginX: "focus:mx-[--focus__marginX]",
  placeholder__marginX: "placeholder:mx-[--placeholder__marginX]",

  marginY: "my-[--marginY]",
  hover__marginY: "hover:my-[--hover__marginY]",
  disabled__marginY: "disabled:my-[--disabled__marginY]",
  focus__marginY: "focus:my-[--focus__marginY]",
  placeholder__marginY: "placeholder:my-[--placeholder__marginY]",

  marginTop: "mt-[--marginTop]",
  hover__marginTop: "hover:mt-[--hover__marginTop]",
  disabled__marginTop: "disabled:mt-[--disabled__marginTop]",
  focus__marginTop: "focus:mt-[--focus__marginTop]",
  placeholder__marginTop: "placeholder:mt-[--placeholder__marginTop]",

  marginBottom: "mb-[--marginBottom]",
  hover__marginBottom: "hover:mb-[--hover__marginBottom]",
  disabled__marginBottom: "disabled:mb-[--disabled__marginBottom]",
  focus__marginBottom: "focus:mb-[--focus__marginBottom]",
  placeholder__marginBottom: "placeholder:mb-[--placeholder__marginBottom]",

  marginLeft: "ml-[--marginLeft]",
  hover__marginLeft: "hover:ml-[--hover__marginLeft]",
  disabled__marginLeft: "disabled:ml-[--disabled__marginLeft]",
  focus__marginLeft: "focus:ml-[--focus__marginLeft]",
  placeholder__marginLeft: "placeholder:ml-[--placeholder__marginLeft]",

  marginRight: "mr-[--marginRight]",
  hover__marginRight: "hover:mr-[--hover__marginRight]",
  disabled__marginRight: "disabled:mr-[--disabled__marginRight]",
  focus__marginRight: "focus:mr-[--focus__marginRight]",
  placeholder__marginRight: "placeholder:mr-[--placeholder__marginRight]",

  padding: "p-[--padding]",
  hover__padding: "hover:p-[--hover__padding]",
  disabled__padding: "disabled:p-[--disabled__padding]",
  focus__padding: "focus:p-[--focus__padding]",
  placeholder__padding: "placeholder:p-[--placeholder__padding]",

  paddingX: "px-[--paddingX]",
  hover__paddingX: "hover:px-[--hover__paddingX]",
  disabled__paddingX: "disabled:px-[--disabled__paddingX]",
  focus__paddingX: "focus:px-[--focus__paddingX]",
  placeholder__paddingX: "placeholder:px-[--placeholder__paddingX]",

  paddingY: "py-[--paddingY]",
  hover__paddingY: "hover:py-[--hover__paddingY]",
  disabled__paddingY: "disabled:py-[--disabled__paddingY]",
  focus__paddingY: "focus:py-[--focus__paddingY]",
  placeholder__paddingY: "placeholder:py-[--placeholder__paddingY]",

  paddingTop: "pt-[--paddingTop]",
  hover__paddingTop: "hover:pt-[--hover__paddingTop]",
  disabled__paddingTop: "disabled:pt-[--disabled__paddingTop]",
  focus__paddingTop: "focus:pt-[--focus__paddingTop]",
  placeholder__paddingTop: "placeholder:pt-[--placeholder__paddingTop]",

  paddingBottom: "pb-[--paddingBottom]",
  hover__paddingBottom: "hover:pb-[--hover__paddingBottom]",
  disabled__paddingBottom: "disabled:pb-[--disabled__paddingBottom]",
  focus__paddingBottom: "focus:pb-[--focus__paddingBottom]",
  placeholder__paddingBottom: "placeholder:pb-[--placeholder__paddingBottom]",

  paddingLeft: "pl-[--paddingLeft]",
  hover__paddingLeft: "hover:pl-[--hover__paddingLeft]",
  disabled__paddingLeft: "disabled:pl-[--disabled__paddingLeft]",
  focus__paddingLeft: "focus:pl-[--focus__paddingLeft]",
  placeholder__paddingLeft: "placeholder:pl-[--placeholder__paddingLeft]",

  paddingRight: "pr-[--paddingRight]",
  hover__paddingRight: "hover:pr-[--hover__paddingRight]",
  disabled__paddingRight: "disabled:pr-[--disabled__paddingRight]",
  focus__paddingRight: "focus:pr-[--focus__paddingRight]",
  placeholder__paddingRight: "placeholder:pr-[--placeholder__paddingRight]",
};
