import { NEXT_PUBLIC_WEBAPP_URL } from '@systemise/lib/constants/app';
import { i18n, type MessageDescriptor } from '@lingui/core';

export const appMetaTags = (title?: MessageDescriptor) => {
  const description =
    'Send, sign and store documents with Systemise. Secure electronic signatures, full audit trails and reusable templates.';

  return [
    {
      title: title ? `${i18n._(title)} - Systemise` : 'Systemise',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content:
        'Systemise, document signing, electronic signature, e-signature, contracts, agreements, audit trail, templates',
    },
    {
      name: 'author',
      content: 'Systemise',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Systemise — Document signing',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
  ];
};
