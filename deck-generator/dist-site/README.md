# aiinhe.com keynote — standalone site

This folder is a **self-contained static site**. Drop it on any static host and
it will play the keynote with synchronized narration, captions, and auto-advance.

## Deploy

### Cloudflare Pages (recommended)

```sh
npx wrangler pages deploy dist-site --project-name=aiinhe-keynote
```

Then point `aiinhe.com` at the Pages project in the Cloudflare dashboard.

### Netlify

```sh
npx netlify deploy --dir=dist-site --prod
```

### Plain rsync

```sh
rsync -avz dist-site/ user@aiinhe.com:/var/www/keynote/
```

## Verify

After deploy, hit the root URL and confirm:

1. The "Start presentation" overlay appears, focus lands on the button.
2. Clicking Start plays slide 1 with audio and word-level captions.
3. Arrow keys advance slides. Auto-advance triggers when a voiceover ends.
4. `/voiceovers/<id>.webm` serves as `audio/webm` and `/voiceovers/<id>.m4a`
   as `audio/mp4`. If Cloudflare Pages misreports content-types, drop a
   `_headers` file at the root.

## Browser notes

- **Modern Chrome/Edge/Firefox/Safari 14.1+**: plays webm/opus (smaller files).
- **Safari ≤ 14 / older iOS**: automatically falls back to m4a/aac.
- **Reduced-motion users**: WebGL droplet shapes are skipped; slides render flat.
- **Screen readers**: flat transcript is exposed per slide via `aria-describedby`.
  Slide changes announced once via a live region.
- **No JavaScript**: a direct PDF download link is shown.

## Fallbacks

- Full slide deck as a PDF: `pdf/presentation.pdf`
- Flat transcript of the whole talk: `transcript.txt`
