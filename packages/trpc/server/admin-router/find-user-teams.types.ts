import { ZFindResultResponse, ZFindSearchParamsSchema } from '@systemise/lib/types/search-params';
import { TeamMemberRoleSchema } from '@systemise/prisma/generated/zod/inputTypeSchemas/TeamMemberRoleSchema';
import OrganisationSchema from '@systemise/prisma/generated/zod/modelSchema/OrganisationSchema';
import TeamSchema from '@systemise/prisma/generated/zod/modelSchema/TeamSchema';
import { z } from 'zod';

export const ZFindUserTeamsRequestSchema = ZFindSearchParamsSchema.extend({
  userId: z.number(),
});

export const ZFindUserTeamsResponseSchema = ZFindResultResponse.extend({
  data: TeamSchema.pick({
    id: true,
    name: true,
    url: true,
    createdAt: true,
  })
    .extend({
      teamRole: TeamMemberRoleSchema,
      organisation: OrganisationSchema.pick({
        id: true,
        name: true,
        url: true,
      }),
    })
    .array(),
});

export type TFindUserTeamsRequest = z.infer<typeof ZFindUserTeamsRequestSchema>;
export type TFindUserTeamsResponse = z.infer<typeof ZFindUserTeamsResponseSchema>;
