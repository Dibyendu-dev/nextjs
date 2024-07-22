---
title: 'React JS Hooks Mind Map'
date: '2024-07-21'
parent: null
order: 4
author: Dibyendu
category: General
tags: ["intro", "getting-started"]
---

## 1. Basic Hooks
- **useState**
  - Description: Manages state in a functional component.
- **useEffect**
  - Description: Performs side effects in functional components.
- **useContext**
  - Description: Accesses context values without using Consumer.

## 2. Additional Hooks
- **useReducer**
  - Description: Manages complex state logic similar to Redux.
- **useCallback**
  - Description: Memoizes callback functions to optimize performance.
- **useMemo**
  - Description: Memoizes values to avoid expensive calculations.
- **useRef**
  - Description: Accesses DOM elements directly or stores mutable values.
- **useLayoutEffect**
  - Description: Similar to useEffect but fires synchronously after all DOM mutations.

## 3. Custom Hooks
- **Creating Custom Hooks**
  - Description: Reusing logic across multiple components.
- **Examples**
  - **Fetching data**
  - **Form handling**

## 4. Tools and Libraries
- **React DevTools**
  - Description: Inspects React component hierarchies.
- **ESLint Plugin for React Hooks**
  - Description: Enforces rules of hooks and helps avoid common pitfalls.
- **React Hook Form**
  - Description: Simplifies form management with hooks.

## 5. Best Practices
- **Rules of Hooks**
  - Description: Only call hooks at the top level and in React functions.
- **Optimization**
  - Description: Use memoization hooks (useCallback, useMemo) wisely to optimize performance.
