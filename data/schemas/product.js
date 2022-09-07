export default {
  name: 'product',
  title: 'Produits',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Id-Produit',
      type: 'slug',
      options: {
        source: 'name',
        maxLenght: 90,
      },
    },
    {
      name: 'price',
      title: 'Prix',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Description',
      type: 'string',
    },
  ],
};