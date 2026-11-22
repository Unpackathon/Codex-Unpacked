# Codex Desktop for Windows

Codex is OpenAI’s coding agent. In the desktop app, developers can give it tasks such as implementing a feature, fixing a bug, or reviewing changes in a project. The app provides a workspace for following those tasks, inspecting diffs, and working with local Git projects and worktrees. [OpenAI’s desktop app documentation](https://learn.chatgpt.com/docs/app)

This snapshot contains the contents of `app.asar` and its indexed companion files from the installed Windows x64 package. The Windows package version is **26.1117.4957.0**. The Electron package identifies itself as `openai-codex-electron`, version **26.1117.41037**.

## Where to start

| Path | Role |
| --- | --- |
| [app/package.json](app/package.json) | Electron package metadata and the declared entry point. |
| [app/.vite/build/early-bootstrap.js](app/.vite/build/early-bootstrap.js) | The desktop entry point named in the package manifest. |
| [app/.vite/build/](app/.vite/build/) | Bundled desktop JavaScript. |
| [app/webview/index.html](app/webview/index.html) | Entry page for the packaged interface. |
| [app/webview/assets/](app/webview/assets/) | Compiled interface JavaScript, styles, images, and WebAssembly. |
| [app/webview/licenses/](app/webview/licenses/) | License material packaged with the interface. |
| [app/native-menu-locales/](app/native-menu-locales/) | Localized strings for the desktop menus. |

## Archive verification

The ZIP contains **15,520 files** from the ASAR index. All eight companion files differed from the index’s declared hashes. The ZIP preserves their installed bytes, and the verification report records the declared and observed hashes. Paths in this README are relative to the ZIP’s root. [Archive verification report](archive-verification.json)

The inspection covered installed package files and was performed statically. The Windows installer also ships runtime executables and bundled plugins alongside the ASAR.
