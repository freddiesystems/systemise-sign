import ApiTokenSchema from '@systemise/prisma/generated/zod/modelSchema/ApiTokenSchema';
import { z } from 'zod';

export const ZGetApiTokensRequestSchema = z.void();

export const ZGetApiTokensResponseSchema = z.array(
  ApiTokenSchema.pick({
    id: true,
    name: true,
    createdAt: true,
    expires: true,
  }),
);

export type TGetApiTokensResponse = z.infer<typeof ZGetApiTokensResponseSchema>;
