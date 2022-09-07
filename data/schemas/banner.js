export default {
  name: 'banner',
  title: 'Banniere',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttonText',
      title: 'TexteBouton',
      type: 'string',
    },
    {
      name: 'product',
      title: 'Produit',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'smallText',
      title: 'TextePetit',
      type: 'string',
    },
    {
      name: 'midText',
      title: 'TexteMoyen',
      type: 'string',
    },
    {
      name: 'largeText1',
      title: 'TexteLarge1',
      type: 'string',
    },
    {
      name: 'largeText2',
      title: 'TexteLarge2',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Promotion',
      type: 'string',
    },
    {
      name: 'saleTime',
      title: 'TempsDeVente',
      type: 'string',
    },
  ],
};
