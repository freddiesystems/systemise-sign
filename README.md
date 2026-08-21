# Systemise Sign

The e-signature service behind **[sign.systemise.dev](https://sign.systemise.dev)** — Systemise's
self-hosted replacement for DocuSign.

This is a fork of [Documenso](https://github.com/documenso/documenso) (v2.11.0), rebranded to
Systemise. The functionality is unchanged; what differs is the branding — logo, colours, page
titles, transactional emails, favicons and the signing certificate mark.

## Licence and attribution

Documenso is licensed under the **GNU Affero General Public License v3.0**, and so is this fork.
The original copyright belongs to Documenso, Inc. and the Documenso contributors — see
[`LICENSE`](./LICENSE), which is unmodified.

Because this fork is run as a network service, AGPL section 13 requires that the complete
corresponding source be available to everyone who uses it. That is what this repository is for.

`packages/ee/` remains under Documenso's separate **commercial licence** (see
[`packages/ee/LICENSE`](./packages/ee/LICENSE)) and is **not** used by this deployment. No
enterprise-only feature is enabled here, and no commercial-licensed flag has been unlocked.

## What was changed from upstream

- Brand assets — wordmark, glyph, favicons, app icons, Open Graph card
- `BrandingLogo` / `BrandingLogoIcon` rebuilt as Systemise vectors (still `currentColor`, so
  they invert correctly in dark mode)
- Colour system — Documenso's green replaced with the Systemise monochrome palette, in both
  the Tailwind ramp and the CSS custom properties
- User-facing copy, page titles, meta/OG tags and all 12 translation catalogues
- Transactional email templates, including the footer on every document sent
- Container start-up banner

Deliberately **not** changed, because they are internal identifiers rather than branding, and
changing them would break a running instance:

- The `@documenso/*` npm workspace scope
- The `DOCUMENSO` value of the `IdentityProvider` Prisma enum, and existing migrations
- `NEXT_PRIVATE_*` / `DOCUMENSO_*` environment variable names
- The legacy service-account and deleted-account email addresses, which are used as database
  lookup keys
- The licence server URL

## Deployment

Runs on Railway from `docker/Dockerfile`, which builds only `@documenso/remix`. See the
Systemise KB page *Documenso* for the project, service and environment details.

## Upstream

Documentation, architecture notes and contribution guides in this repository are Documenso's own
and are kept as-is. For upstream issues and releases see
[documenso/documenso](https://github.com/documenso/documenso).
