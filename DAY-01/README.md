````md id="1hj8vx"
# Developer Stamina Dashboard

## Virtual DOM and Stamina Updates

React Virtual DOM efficiently handles stamina updates by comparing the previous UI with the updated UI after every state change. Only the changed parts of the interface are updated in the real DOM, which improves performance and makes the app faster.

---

## Modulus Logic for Every 5th Click Bug

```javascript
if (nextClick % 5 === 0) {
    newStamina = stamina - 15;
} else {
    newStamina = stamina - 2;
}
````

---

## Differences Between Vite and Create React App (CRA)

| Vite                   | Create React App  |
| ---------------------- | ----------------- |
| Faster startup time    | Slower startup    |
| Uses native ES modules | Uses Webpack      |
| Faster hot reload      | Slower hot reload |

---

## Features Implemented

* Dynamic greeting based on system time
* Skill prop injection using components
* Skill level badges with conditions
* Stamina burner state logic
* Burnout button disabling system

---

## Technologies Used

* React JS
* Vite
* JavaScript
* CSS

---

## Author

Sahil Belim

```
```
