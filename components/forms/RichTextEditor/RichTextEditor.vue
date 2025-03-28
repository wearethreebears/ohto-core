<template>
  <Group :class="[tokenClass]">
    <Label
      :id="id"
      :label="label"
      :name="name"
      :hideLabel="hideLabel"
      :required
      class="mb-1"
    />
    <div v-if="editor" class="bg-slate-100 rounded-md border">
      <div class="flex">
        <RichTextEditorControl
          icon="BOLD"
          label="Bold"
          @on:click="editor.chain().focus().toggleBold().run()"
          :state="getControlState('bold')"
        />
        <RichTextEditorControl
          icon="LINK"
          label="Link"
          @on:click="setLink"
          :state="getControlState('link')"
        />
        <RichTextEditorControl
          icon="UNLINK"
          label="Unlink"
          @on:click="editor.chain().focus().unsetLink().run()"
          :state="getControlState('unlink')"
        />
        <RichTextEditorControl
          icon="LIST_BULLET"
          label="List: Bullet points"
          @on:click="editor.chain().focus().toggleBulletList().run()"
          :state="getControlState('bulletList')"
        />
        <RichTextEditorControl
          icon="LIST_NUMBERED"
          label="List: Numbered points"
          @on:click="editor.chain().focus().toggleOrderedList().run()"
          :state="getControlState('orderedList')"
        />
      </div>
      <div
        :class="[
          props.class,
          designTokenClasses,
          customDesignTokenClasses,
          'flex flex-col rounded-b-md bg-white border-t w-full min-h-[150px] [&>a]:font-bold [&>a]:underline',
        ]"
      >
        <EditorContent
          :editor="editor"
          class="flex-grow flex flex-col [&>a]:[contenteditable]:flex-grow"
        />
      </div>
    </div>
    <Error v-if="error">{{ error }}</Error>
  </Group>
</template>

<script setup lang="ts">
import Error from "../Error/Error.vue";
import Group from "../Group/Group.vue";
import Label from "../Label/Label.vue";
import Code from "@tiptap/extension-code";
import Document from "@tiptap/extension-document";
import Link from "@tiptap/extension-link";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Text from "@tiptap/extension-text";
import { Editor, EditorContent, type JSONContent } from "@tiptap/vue-3";
import type { IRichTextEditorProps } from "./RichTextEditor.types";
import { STATIC_TOKENS } from "./RichTextEditor.tokens";
import { CUSTOM_CLASS_TOKEN_MAP } from "./RichTextEditor.map";
import RichTextEditorControl from "./RichTextEditorControl/RichTextEditorControl.vue";
import type { TRichTextEditorControlState } from "./RichTextEditorControl/RichTextEditorControl.types";

const props = withDefaults(defineProps<IRichTextEditorProps>(), {
  hideLabel: false,
  required: false,
});

const editor = ref<Editor>();
const { tokenClass } = useTokenClass("RichTextEditorichText");

const { designTokenClasses, customDesignTokenClasses } =
  useComponentDesignTokens(
    tokenClass,
    { ...STATIC_TOKENS },
    CUSTOM_CLASS_TOKEN_MAP
  );

const emit = defineEmits<{ "on:update": [JSONContent] }>();

onMounted(() => {
  editor.value = new Editor({
    extensions: [
      Document,
      Paragraph.configure({
        HTMLAttributes: {
          class: "mb-4",
        },
      }),
      ,
      Bold,
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal list-inside",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc list-inside",
        },
      }),
      ListItem.configure({
        HTMLAttributes: {
          class: "[&>p]:inline-block",
        },
      }),
      Text,
      Code,
      Link.configure({
        openOnClick: false,
        defaultProtocol: "https",
        HTMLAttributes: {
          class: "font-bold underline",
        },
      }),
    ],
    content: ``,
    editorProps: {
      attributes: {
        class: "flex-grow p-4",
      },
    },
    onUpdate: ({ editor }) => {
      emit("on:update", editor.getJSON());
    },
  });
});

const getControlState = (control: string): TRichTextEditorControlState =>
  editor.value?.isActive(control) ? "ACTIVE" : "INACTIVE";

const setLink = () => {
  const previousUrl = editor.value?.getAttributes("link").href;
  const url = window.prompt("URL", previousUrl);

  // cancelled
  if (url === null) {
    return;
  }

  // empty
  if (url === "") {
    editor.value?.chain().focus().extendMarkRange("link").unsetLink().run();

    return;
  }

  // update link
  editor.value
    ?.chain()
    .focus()
    .extendMarkRange("link")
    .setLink({ href: url })
    .run();
};

onBeforeUnmount(() => {
  editor.value?.destroy();
});
</script>
