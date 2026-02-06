# Content

All user-facing text lives here. No hardcoded strings in components.

## en.json

Your app's copy, organized by section. Use it like this:

```jsx
import content from '../content/en.json';

function Header() {
  return <h1>{content.app.title}</h1>;
}
```

## Why separate content?

- Change copy without touching code
- Easy to add translations later (es.json, fr.json)
- Writers can edit JSON, developers edit components
- Claude knows to pull strings from here, not inline them
