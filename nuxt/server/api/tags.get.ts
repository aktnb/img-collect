import { z } from 'zod';

import { prisma } from '~/utils/prisma'

const TagsQuery = z.object({
  page: z.number().int().positive().default(1),
  per_page: z.number().int().positive().max(100).default(30),
});

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const validated = TagsQuery.safeParse(query);

  if (!validated.success) {
    throw createError({
      status: 400,
      message: 'query error',
    });
  }

  const { page, per_page } = validated.data;

  const tags = await prisma.tag.findMany({
    skip: (page-1)*per_page,
    take: per_page,
  });

  return tags;
})
