import { prisma } from '@systemise/prisma';

export type GetRecipientSignaturesOptions = {
  recipientId: number;
};

export const getRecipientSignatures = async ({ recipientId }: GetRecipientSignaturesOptions) => {
  return await prisma.signature.findMany({
    where: {
      field: {
        recipientId,
      },
    },
  });
};
