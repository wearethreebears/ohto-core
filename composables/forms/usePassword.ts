import type { ComputedRef, Ref } from "vue";
import { computed, ref } from "vue";

interface IIsPasswordValid {
  isValid: boolean;
  body: string;
}

interface IUsePassword {
  password: Ref<string>;
  isPasswordValid: ComputedRef<boolean>;
  isPasswordValidList: ComputedRef<IIsPasswordValid[]>;
}

export default function useSelect(): IUsePassword {
  const password = ref("");

  const isPasswordValidLength = computed(() => password.value.length > 5);
  const isPasswordValidContainsNumber = computed(() =>
    /\d/.test(password.value)
  );
  const isPasswordValidContainsLowerCase = computed(() =>
    /[a-z]/.test(password.value)
  );
  const isPasswordValidContainsUpperCase = computed(() =>
    /[A-Z]/.test(password.value)
  );
  const isPasswordValidContainsSpecialCharacter = computed(() =>
    /[!@#$%^&*(),.?":{}|<>]/.test(password.value)
  );
  const isPasswordValidContainsNoWhiteSpace = computed(() =>
    /^\S*$/.test(password.value)
  );

  const isPasswordValid = computed(
    () =>
      isPasswordValidLength.value &&
      isPasswordValidContainsNumber.value &&
      isPasswordValidContainsLowerCase.value &&
      isPasswordValidContainsUpperCase.value &&
      isPasswordValidContainsSpecialCharacter.value &&
      isPasswordValidContainsNoWhiteSpace.value
  );

  const isPasswordValidList = computed(() => [
    {
      isValid: isPasswordValidLength.value,
      body: "Password is at least six characters long",
    },
    {
      isValid: isPasswordValidContainsUpperCase.value,
      body: "Password contains at least one uppercase letter",
    },
    {
      isValid: isPasswordValidContainsLowerCase.value,
      body: "Password contains at least one lowercase letter",
    },
    {
      isValid: isPasswordValidContainsNumber.value,
      body: "Password contains at least one number",
    },
    {
      isValid: isPasswordValidContainsSpecialCharacter.value,
      body: "Password contains at least one special character",
    },
    {
      isValid: isPasswordValidContainsNoWhiteSpace.value,
      body: "Password contains no white space",
    },
  ]);

  return {
    password,
    isPasswordValid,
    isPasswordValidList,
  };
}
