# Developer Stamina Dashboard

#  Technical Documentation

---

## Question 1:
### Explain in 2 sentences how the Virtual DOM handles your Stamina updates.

### Answer:
React Virtual DOM efficiently handles stamina updates by comparing the previous UI with the updated UI after every state change. Only the changed parts of the interface are updated in the real DOM, which improves performance and makes the app faster.

---

## Question 2:
### Provide a snippet of your Modulus logic for the 5th-click bug.

### Answer:

```javascript
if (nextClick % 5 === 0) {
    newStamina = stamina - 15;
} else {
    newStamina = stamina - 2;
}