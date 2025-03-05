import type { TUserCollection } from "@ohto/client/types/auth/user/user.types";
import type { IChargeTypeResource } from "@ohto/client/types/charge-types";
import type { IDiscountUnitTypeResource } from "@ohto/client/types/discounts/discount-unit-types/discount-unit-types.types";
import type { IEligibleUserGroupResource } from "@ohto/client/types/eligible-user-groups/eligible-user-groups.types";
import type { ETruthy } from "@ohto/utilities/types/booleans";
import type { ISelectItem } from "@ohto/core/dist/components/forms/Select.vue";
import type { ISearchSelectItem } from "@ohto/core/dist/components/forms/SelectFromSearch.vue";

export interface ICreateEditDiscountFormData {
  id?: number;
  code: string;
  chargeType?: IChargeTypeResource;
  discountUnitType?: IDiscountUnitTypeResource;
  eligibleUserGroups?: IEligibleUserGroupResource;
  eligibleUsers: ISearchSelectItem[];
  eligibleSegments: ISearchSelectItem[];
  discountUnit: number;
  totalUsesAllowed?: number;
  totalUsesAllowedPerUser?: number;
  autoApply: ETruthy;
}
