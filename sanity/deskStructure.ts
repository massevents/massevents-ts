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
          .title('Homepage')
          .child(
            S.editor()
              .schemaType('homepage')
              .documentId('homepage'),
          ),
        S.divider(),
        ...S.documentTypeListItems().filter(
          (listItem: any) =>
            ![
              'homepage',
            ].includes(listItem.getId()),
        ),
      ]);