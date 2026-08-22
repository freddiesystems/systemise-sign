# Systemise Sign

The e-signature service behind **[sign.systemise.dev](https://sign.systemise.dev)** — Systemise's
self-hosted replacement for DocuSign.

This is a fork of [Documenso](https://github.com/documenso/documenso) v2.11.0. The functionality
is unchanged; the branding is entirely Systemise, inside and out — logo, colours, page titles,
transactional emails, the signing-certificate mark, and also the internal names: the npm
workspace scope, code identifiers, queue names, environment variable names and the
`IdentityProvider` enum value.

## Licence and attribution

Documenso is licensed under the **GNU Affero General Public License v3.0**, and so is this fork.
The original copyright belongs to Documenso, Inc. and the Documenso contributors. Their licence
texts are kept byte-for-byte — [`LICENSE`](./LICENSE), [`packages/ee/LICENSE`](./packages/ee/LICENSE)
and [`packages/ee/FEATURES`](./packages/ee/FEATURES) are deliberately untouched, because editing a
copyright notice would be falsifying it.

Because this fork runs as a network service, AGPL section 13 requires the complete corresponding
source to be available to everyone who uses it. That is what this repository is for; the app links
to it from the signature-disclosure page.

`packages/ee/` remains under Documenso's separate commercial licence and is **not** used by this
deployment. No enterprise-only feature is enabled and no commercial-licensed flag has been
unlocked — the white-label capability here comes from modifying AGPL source, which the AGPL
permits, not from unlocking a paid flag.

## What changed from upstream

**Brand**
- Systemise wordmark and chart glyph traced to vectors; `BrandingLogo` / `BrandingLogoIcon` are
  SVG paths using `currentColor`, so they still invert correctly in dark mode
- Favicons, app icons, Open Graph card, and `static/logo.png` — the last is what the signing
  certificate PDF stamps, so certificates carry the Systemise mark
- Documenso's green replaced with the Systemise monochrome palette, in both the Tailwind ramp
  and the CSS custom properties; `--primary` now inverts between light and dark instead of being
  one green that worked on both
- Copy, page titles, meta/OG tags, all 12 translation catalogues, and every transactional email

**Internal**
- npm workspace scope `@documenso/*` → `@systemise/*`
- Code identifiers, global names, BullMQ queue and Redis prefix, Inngest app id, telemetry and
  licence filenames, and the signing-certificate default path
- Environment variable names: `DOCUMENSO_DISABLE_TELEMETRY` → `SYSTEMISE_DISABLE_TELEMETRY`,
  `NEXT_PRIVATE_DOCUMENSO_LICENSE_KEY` → `NEXT_PRIVATE_SYSTEMISE_LICENSE_KEY`
- `IdentityProvider.DOCUMENSO` → `SYSTEMISE`, via a migration that renames the enum value in
  place (Postgres references enum members by OID, so existing rows stay valid without a rewrite)
- Service-account, deleted-account and direct-template placeholder addresses moved to
  `systemise.dev`, with the same migration updating any existing rows
- Upstream's `.github/workflows`, `apps/docs`, `apps/openpage-api` and the Documenso project's
  governance docs (CLA, code of conduct, contributing guide) are not carried here — none are
  deployed, and they describe the Documenso project rather than this service

**Two Documenso names deliberately survive, because they are addresses of external things
rather than branding:**

- `@documenso/nodemailer-resend` — a real published npm package, and the transport every email
  from this instance is sent through. Renaming it would break email.
- `https://license.documenso.com` — Documenso's licence server. The enterprise licence flow is
  unused here (no key is set), and pointing it somewhere else would silently break it if it ever
  were used.

## Deployment

Runs on Railway from `docker/Dockerfile`, which builds only `@systemise/remix`. See the Systemise
KB page *Sign (self-hosted e-signature)* for project, service and environment details.
