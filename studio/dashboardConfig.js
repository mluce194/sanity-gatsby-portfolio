export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '61d4594d3f0864260079f908',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pixuob5v',
                  apiId: 'da9da000-f37d-4193-bceb-94d791155621'
                },
                {
                  buildHookId: '61d4594d529d711ee46e22c8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ympn1c7r',
                  apiId: '8cced567-b2b6-4da5-b623-2923a3089af9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mluce194/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ympn1c7r.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
