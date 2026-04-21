# Project Agent Notes

## Purpose

- This project helps freelancers convert income goals into clearer hourly, daily, and project pricing.
- It is designed as a standalone static website with no backend requirement.

## Main Files

- `index.html`: page structure, bilingual labels, and result sections
- `styles.css`: visual system, layout, colors, and responsive behavior
- `app.js`: pricing calculations and language toggle logic
- `README.md`: bilingual project documentation for readers
- `docs/screenshot.png`: preview image used in the repository README
- `docs/demo.gif`: short interaction demo used in the repository README
- `docs/demo-plan.json`: repeatable Playwright demo steps for regenerating preview assets

## Guardrails

- Keep the project static and easy to deploy.
- Preserve both Chinese and English documentation.
- Maintain the language toggle unless there is a strong reason to replace it.
- Do not add dependencies for simple logic that works in plain JavaScript.
- Preserve the preview assets, or regenerate them if the UI changes materially.
- Keep the pricing workflow centered on practical quoting, not generic financial dashboards.

## Future Improvements

- Add presets for different freelance roles such as design, development, and consulting.
- Let users save multiple pricing scenarios locally.
- Add a printable quote summary card for client conversations.
