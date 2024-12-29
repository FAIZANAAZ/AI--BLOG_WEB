import { type SchemaTypeDefinition } from 'sanity'
import cards from './cards'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cards],
}
