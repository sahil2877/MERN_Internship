# Developer Stamina Dashboard

#  Technical Documentation

---

##  1:
### how the Virtual DOM handles your Stamina updates.

### =>
React Virtual DOM efficiently handles stamina updates by comparing the previous UI with the updated UI after every state change. Only the changed parts of the interface are updated in the real DOM, which improves performance and makes the app faster.

---

## 2:
### snippet of Modulus logic for the 5th-click bug.

### =>

```javascript
if (nextClick % 5 === 0) {
    newStamina = stamina - 15;
} else {
    newStamina = stamina - 2;
}
```
## 3:

### 3 differences between Vite and Create React App (CRA).

### =>

| Vite                   | Create React App    |
| ---------------------- | ------------------- |
| Faster startup time    | Slower startup time |
| Uses native ES modules | Uses Webpack        |
| Faster hot reload      | Slower hot reload   |

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
