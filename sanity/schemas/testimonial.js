const testimonial = {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Star Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 5,
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'businessName',
    },
  },
};

export default testimonial;
