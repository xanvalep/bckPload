import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
        name: 'description',
        type: 'richText',
      },
      {
        name: 'price',
        type: 'number',
      },
      {
        name: 'quantity',
        type: 'number',
      },
      {
        name: 'image',
        type: 'upload',
        relationTo: 'media'
      }
  ],
}

export default Products;