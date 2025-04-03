import type { JSONContent } from "@tiptap/vue-3";

const renderNode = (node: JSONContent): string | undefined => {
  if (node.type === "text") {
    let text = node.text;

    if (node.marks) {
      node.marks.forEach((mark) => {
        if (mark.type === "bold") {
          text = `<strong>${text}</strong>`;
        } else if (mark.type === "italic") {
          text = `<em>${text}</em>`;
        } else if (mark.type === "underline") {
          text = `<u>${text}</u>`;
        } else if (mark.type === "link") {
          const {
            href,
            target,
            rel,
            class: className,
          } = mark.attrs as HTMLLinkElement & { class: string };
          text = `<a href="${href}" target="${target}" rel="${rel}" class="${className}">${text}</a>`;
        }
      });
    }
    return text;
  }

  if (node.type === "paragraph") {
    return `<p>${(node.content || []).map(renderNode).join("")}</p>`;
  }

  if (node.type === "bulletList") {
    return `<ul>${(node.content || []).map(renderNode).join("")}</ul>`;
  }

  if (node.type === "orderedList") {
    return `<ol>${(node.content || []).map(renderNode).join("")}</ol>`;
  }

  if (node.type === "listItem") {
    return `<li>${(node.content || []).map(renderNode).join("")}</li>`;
  }

  return "";
};

export const renderRichTextHTML = (json: JSONContent) => {
  return json.content?.map(renderNode).join("");
};
