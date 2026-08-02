# Project screenshots

One folder per project, named after its `id` in
[`src/app/data/projects.data.ts`](../../../app/data/projects.data.ts):

```
images/projects/
  elia-imbalance-price/
  portfolio/
  justgaming/
  fsm-farm-manager/
```

To add screenshots for a project:

1. Drop the image files into the matching folder (e.g. `1.jpg`, `2.jpg`, …).
2. Reference them in that project's `images` array in `projects.data.ts`:

   ```ts
   images: [
     'assets/images/projects/elia-imbalance-price/1.jpg',
     'assets/images/projects/elia-imbalance-price/2.jpg',
   ],
   ```

The project detail modal shows a placeholder automatically as long as
`images` is empty — no code changes needed beyond filling in that array.
