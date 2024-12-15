import FormsInput from "@ohto/core/components/forms/Input/Input.vue";

interface IUseSelect {
  showOptions: Ref<boolean>;
  formInput: Ref<
    InstanceType<typeof FormsInput> | HTMLButtonElement | undefined
  >;
  optionsPanel: Ref<HTMLElement | undefined>;
  options: Ref<HTMLButtonElement[]>;
  onInputKeyDown(event: Event): void;
  removeTabIndex(index: number): void;
  focusOnNextIndex(nextIndex: number): void;
  onOptionKeyUp(event: Event, index: number): void;
  onOptionKeyDown(event: Event, index: number): void;
}

export default function useSelect(): IUseSelect {
  const showOptions = ref(false);
  const formInput = ref<InstanceType<typeof FormsInput>>();
  const optionsPanel = ref<HTMLElement>();
  const options = ref<HTMLButtonElement[]>([]);

  const removeTabIndex = (index: number) => {
    options.value[index]?.setAttribute("tabindex", "-1");
  };

  const onInputKeyDown = (event: Event) => {
    event.preventDefault();
    focusOnNextIndex(0);
  };

  const focusOnNextIndex = (nextIndex: number) => {
    options.value[nextIndex]?.setAttribute("tabindex", "0");
    options.value[nextIndex]?.focus();
  };

  const onOptionKeyUp = (event: Event, index: number) => {
    event.preventDefault();
    if (index === 0 && formInput?.value) {
      if (formInput.value?.hasOwnProperty("input")) {
        (formInput.value as unknown as typeof FormsInput)?.input.focus();
      } else {
        (formInput.value as unknown as HTMLButtonElement).focus();
      }
      options.value[0]?.setAttribute("tabindex", "-1");
      return;
    }
    focusOnNextIndex(index - 1);
  };

  const onOptionKeyDown = (event: Event, index: number) => {
    event.preventDefault();
    const nextIndex = index + 1;
    if (nextIndex >= options.value.length) return;
    focusOnNextIndex(nextIndex);
  };

  return {
    showOptions,
    formInput,
    optionsPanel,
    options,
    removeTabIndex,
    onInputKeyDown,
    focusOnNextIndex,
    onOptionKeyUp,
    onOptionKeyDown,
  };
}
