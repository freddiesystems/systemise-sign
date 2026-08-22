import { ZFindResultResponse, ZFindSearchParamsSchema } from '@systemise/lib/types/search-params';
import SubscriptionClaimSchema from '@systemise/prisma/generated/zod/modelSchema/SubscriptionClaimSchema';
import type { z } from 'zod';

export const ZFindSubscriptionClaimsRequestSchema = ZFindSearchParamsSchema.extend({});

export const ZFindSubscriptionClaimsResponseSchema = ZFindResultResponse.extend({
  data: SubscriptionClaimSchema.pick({
    id: true,
    createdAt: true,
    updatedAt: true,
    name: true,
    teamCount: true,
    memberCount: true,
    envelopeItemCount: true,
    locked: true,
    flags: true,
  }).array(),
});

export type TFindSubscriptionClaimsRequest = z.infer<typeof ZFindSubscriptionClaimsRequestSchema>;
export type TFindSubscriptionClaimsResponse = z.infer<typeof ZFindSubscriptionClaimsResponseSchema>;
