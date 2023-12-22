export const MENUITEMS = [
  {
    menutitle: 'General',
    menucontent: 'Dashboards,Widgets',
    Items: [
      {
        title: 'Pages',
        icon: 'sample-page',
        type: 'sub',
        active: false,
        children: [
          { path: `${process.env.PUBLIC_URL}/pages/sample-page`, title: 'Sample-Page', type: 'link' },
          { path: `${process.env.PUBLIC_URL}/pages/form`, title: 'Sample-Form', type: 'link' },
        ],
      },
      {
        title: 'Colors',
        icon: 'form',
        type: 'sub',
        active: false,
        children: [
          { path: `${process.env.PUBLIC_URL}/colors/colorr`, title: 'Color1', type: 'link' },
          { path: `${process.env.PUBLIC_URL}/colors/colorg`, title: 'Color2', type: 'link' },
        ]
      },
      {
        title: 'Settings',
        icon: 'builders',
        type: 'sub',
        active: false,
        children: [
          { path: `${process.env.PUBLIC_URL}/setting/setting-customize`, title: 'Customize Settings', type: 'link' },
          { path: `${process.env.PUBLIC_URL}/setting/json-saver`, title: 'Add Language', type: 'link' },
        ]
      },
      {
        title: 'PDF Viewer',
        icon: 'project',
        type: 'sub',
        active: false,
        children: [
          { path: `${process.env.PUBLIC_URL}/pdf/informations`, title: 'PDF view', type: 'link' },
          { path: `${process.env.PUBLIC_URL}/pdf/document-creator`, title: 'Document Creator', type: 'link' },
          { path: `${process.env.PUBLIC_URL}/pdf/created-documents`, title: 'Created documets', type: 'link' }
        ]
      },
    ],
  },
];
