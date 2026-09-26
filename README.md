# dojo-starter

Runner for the koans at <https://jsdojo.xyz>. Most koans need
nothing but Node — this repo is for the ones that render React.

```bash
pnpm install
pnpm koan 07-recursive-components/01-component-vs-instance.tsx
```

Download a koan from the site into `content/<module>/`, run it, read the
assertion that fails, fix the TODO, run it again. Paths are relative to
`content/`. A `.cjs` koan also runs standalone with `node <file>.cjs`.
