const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      initialValue: 'Powers Creative Co.',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'fiverrUrl',
      title: 'Fiverr Profile URL',
      type: 'url',
    },
    {
      name: 'upworkUrl',
      title: 'Upwork Profile URL',
      type: 'url',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'github', title: 'GitHub URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'twitter', title: 'Twitter/X URL', type: 'url' },
      ],
    },
  ],
  // Singleton — only one settings document
  __experimental_actions: ['update', 'publish'],
};

export default siteSettings;
