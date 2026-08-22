import { ZFindResultResponse, ZFindSearchParamsSchema } from '@systemise/lib/types/search-params';
import { OrganisationMemberRole, TeamMemberRole } from '@systemise/prisma/generated/types';
import OrganisationMemberSchema from '@systemise/prisma/generated/zod/modelSchema/OrganisationMemberSchema';
import { z } from 'zod';

export const ZFindTeamMembersRequestSchema = ZFindSearchParamsSchema.extend({
  teamId: z.number(),
});

export const ZFindTeamMembersResponseSchema = ZFindResultResponse.extend({
  data: OrganisationMemberSchema.pick({
    id: true,
    createdAt: true,
    userId: true,
  })
    .extend({
      teamRole: z.nativeEnum(TeamMemberRole),
      organisationRole: z.nativeEnum(OrganisationMemberRole),
      email: z.string(),
      name: z.string().nullable(),
      avatarImageId: z.string().nullable(),
    })
    .array(),
});

export type TFindTeamMembersResponse = z.infer<typeof ZFindTeamMembersResponseSchema>;
