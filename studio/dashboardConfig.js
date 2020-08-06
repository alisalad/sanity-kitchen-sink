export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2c25c967743ec0dea83e3b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bfanbq68',
                  apiId: 'c05c1e9b-2904-4248-b4e3-15e29bf2e521'
                },
                {
                  buildHookId: '5f2c25c9865d01b0d6613297',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-a2s4d5zs',
                  apiId: 'df010b83-0262-406f-8183-9f77fc7c7348'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alisalad/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-a2s4d5zs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
