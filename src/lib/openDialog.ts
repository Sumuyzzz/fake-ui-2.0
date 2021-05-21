import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export
    const openDialog = (options: { title: any; content: String; ok: Function; cancel: Function; }) => {
        const { title, content, ok, cancel } = options;
        const div = document.createElement("div");
        document.body.appendChild(div);
        const close = () => {
            app.unmount();
            div.remove();
        };
        const app = createApp({
            render() {
                return h(
                    Dialog,
                    {
                        visible: true,
                        "onUpdate:visible": (newVisible: boolean) => {
                            if (newVisible === false) {
                                close();
                            }
                        },
                        ok, cancel
                    },
                    {
                        title,
                        content,
                    }
                );
            },
        });
        app.mount(div);
    }

