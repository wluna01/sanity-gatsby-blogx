export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f6a64d28c1f3400cdd8da2e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blogx-studio-8jj7jwew',
                  apiId: '170957c1-03db-4250-8134-27f238657867'
                },
                {
                  buildHookId: '5f6a64d218930900ad758ce9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blogx-web-rvn4xs1n',
                  apiId: '6c418b77-565d-49a7-81c3-8d0ee1d2334f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wluna01/sanity-gatsby-blogx',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blogx-web-rvn4xs1n.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
