import type { RequestMetadata } from '@systemise/lib/universal/extract-request-metadata';

export type HonoAuthContext = {
  Variables: {
    requestMetadata: RequestMetadata;
  };
};
