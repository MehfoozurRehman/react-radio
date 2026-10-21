# React Radio

A React radio button component with a styled indicator and label, with colours set through props.

**Status:** Working demo. The `src/lib` component builds to `dist/`, and `src/App.js` is a runnable demo that uses it, but there are no tests and no published usage that I could verify from the repository.

## The problem

Native radio buttons are hard to restyle consistently. This package wraps a radio input in a custom indicator and label, so the colours can be set through props.

## What it does

- Renders an `<input type="radio">` with a styled indicator and a label.
- Takes `checkedColor`, `unCheckedColor`, `iconColor` and `labelColor` props for the colours.
- Shows a check mark when `value` is truthy, and passes `onChange` and other props to the input.
- Includes a demo app in `src/App.js` that toggles one radio between selected and unselected.

## How it's built

A React function component in `src/lib/index.js`, with its stylesheet in `src/lib/styles.css`. Babel compiles `src/lib` into `dist/` with `npm run build`. The demo runs on Create React App's `react-scripts`, which is separate from the package build.

## Running it locally

```bash
npm install
npm start      # runs the demo app on http://localhost:3000
npm run build  # compiles src/lib into dist/
```

## What's left

- `value` is used as the selected flag and also passed to the input's `value` attribute. A radio group would normally use a shared `name` and a value per option.
- The input uses `class` rather than `className`, which React warns about.
- There are no tests. A `test` script exists, but no test files were found.
