import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconArrowBackUp,
  IconArrowForwardUp,
  IconBold,
  IconH1,
  IconH2,
  IconItalic,
  IconLink,
  IconList,
  IconListNumbers,
  IconPhoto,
  IconPilcrow,
  IconStrikethrough,
  IconUnderline,
} from "@tabler/icons-react";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const TextEditor = () => {
  const [value, setValue] = useState("<p>Hello!</p>");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: value,
    onUpdate({ editor }) {
      const html = editor.getHTML();
      setValue(html);
    },
  });

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(value);
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("Enter the URL of the image:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  return (
    <div className="text-editor-container">
      <div className="editor-toolbar d-flex">
        <div className="toolbar-group">
          <Button
            variant="light-primary"
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
            title="Bold"
          >
            <IconBold size={18} />
          </Button>
          <Button
            variant="light-primary"
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
            title="Italic"
          >
            <IconItalic size={18} />
          </Button>
          <Button
            variant="light-primary"
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "is-active" : ""}
            title="Underline"
          >
            <IconUnderline size={18} />
          </Button>
          <Button
            variant="light-primary"
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
            title="Strikethrough"
          >
            <IconStrikethrough size={18} />
          </Button>
        </div>

        <div className="toolbar-group">
          <Button
            variant="light-primary"
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={
              editor.isActive({ textAlign: "left" }) ? "is-active" : ""
            }
            title="Align left"
          >
            <IconAlignLeft size={18} />
          </Button>
          <Button
            variant="light-primary"
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={
              editor.isActive({ textAlign: "center" }) ? "is-active" : ""
            }
            title="Align center"
          >
            <IconAlignCenter size={18} />
          </Button>
          <Button
            variant="light-primary"
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={
              editor.isActive({ textAlign: "right" }) ? "is-active" : ""
            }
            title="Align right"
          >
            <IconAlignRight size={18} />
          </Button>
          <Button
            variant="light-primary"
            type="button"
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            className={
              editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
            }
            title="Justify"
          >
            <IconAlignJustified size={18} />
          </Button>
        </div>

        <div className="toolbar-group">
          <Button
            variant="light-primary"
            type="button"
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive("paragraph") ? "is-active" : ""}
            title="Paragraph"
          >
            <IconPilcrow size={18} />
          </Button>
          <Button
            variant="light-primary"
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
            title="Heading 1"
          >
            <IconH1 size={18} />
          </Button>
          <Button
            variant="light-primary"
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
            title="Heading 2"
          >
            <IconH2 size={18} />
          </Button>
        </div>

        <div className="toolbar-group">
          <Button
            variant="light-primary"
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
            title="Bullet list"
          >
            <IconList size={18} />
          </Button>
          <Button
            variant="light-primary"
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
            title="Ordered list"
          >
            <IconListNumbers size={18} />
          </Button>
        </div>

        <div className="toolbar-group">
          <Button
            variant="light-primary"
            type="button"
            onClick={setLink}
            title="Link"
          >
            <IconLink size={18} />
          </Button>
          <Button
            variant="light-primary"
            type="button"
            onClick={addImage}
            title="Image"
          >
            <IconPhoto size={18} />
          </Button>
        </div>

        <div className="toolbar-group">
          <Button
            variant="light-primary"
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            title="Undo"
          >
            <IconArrowBackUp size={18} />
          </Button>
          <Button
            variant="light-primary"
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            title="Redo"
          >
            <IconArrowForwardUp size={18} />
          </Button>
        </div>
      </div>

      <EditorContent
        editor={editor}
        className="editor-content app-editor-content"
      />
    </div>
  );
};

export default TextEditor;
