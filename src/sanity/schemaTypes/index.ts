import { type SchemaTypeDefinition } from 'sanity'
import cards from './cards'
import blogComment from './Comments'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cards,blogComment],
}
