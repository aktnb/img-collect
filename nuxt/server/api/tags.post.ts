import { z } from 'zod';
import { prisma } from '~/utils/prisma';

const TagsPostRequest = z.object({
  name: z.string().min(1).max(32),
  description: z.string().max(255).default(''),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  const validated = TagsPostRequest.safeParse(body);

  if (!validated.success) {
    throw createError({
      status: 400,
      message: 'invalid request body',
    });
  }

  const { name, description } = validated.data;

  try {
    const tag = await prisma.tag.create({
      data: {
        name: name,
        description: description,
      }
    });

    return 'success';
  } catch (err) {
    console.log(`Tag(${name}) already exist`);
    throw createError({
      status: 400,
      message: 'The Tag already exist',
    });
  }
})
