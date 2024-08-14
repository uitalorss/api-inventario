import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const createProductSchema = z.object({
  description: z
    .string({ required_error: 'Campo descrição é obrigatório' })
    .trim()
    .min(1, 'Campo não pode ficar vazio'),
  barcode: z
    .string({ required_error: 'Campo código de barras é obrigatório' })
    .length(13),
  amount: z
    .number({ required_error: 'Campo estoque é obrigatório' })
    .int()
    .min(0),
});

export class CreateProductDTO extends createZodDto(createProductSchema) {}
