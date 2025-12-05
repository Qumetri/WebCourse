# LocalStorage vs SessionStorage

## What is LocalStorage?
`localStorage` is a web storage object that allows JavaScript sites and apps to save key/value pairs in a web browser with no expiration date. This means the data stored in the browser will persist even after the browser window is closed.

## Differences between LocalStorage and SessionStorage

| Feature | LocalStorage | SessionStorage |
| :--- | :--- | :--- |
| **Lifespan** | Data persists **forever** (until explicitly deleted by the user or the app). It survives browser restarts. | Data persists only for the **duration of the page session**. It is cleared when the page session ends (e.g., when the tab or window is closed). |
| **Scope** | Shared across all tabs and windows from the same origin. | Limited to the specific tab/window where it was created. Opening the same page in a new tab creates a new session. |
| **Storage Limit** | Typically around 5MB - 10MB (varies by browser). | Typically around 5MB (varies by browser). |
| **Server Interaction** | Data is stored locally and **never** transferred to the server (unlike cookies). | Data is stored locally and **never** transferred to the server. |

### Summary
- Use **LocalStorage** when you want to save data that should be available when the user returns to your site later (e.g., theme preference, saved draft).
- Use **SessionStorage** when you want to save data just for the current browsing session (e.g., temporary form data, shopping cart for a single session).
