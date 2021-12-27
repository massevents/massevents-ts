// // deskStructure.js
// const S = require('@sanity/desk-tool/structure-builder');

// export default () =>
//   S.list()
//     .title('Content')


import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Configuration')
        .child(
          S.editor()
            .schemaType('site-config')
            .documentId('site-config'),
        ),
      S.divider(),
        ...S.documentTypeListItems().filter(
          (listItem: any) =>
            ![
              'site-config',
            ].includes(listItem.getId()),
        ),
      ]);