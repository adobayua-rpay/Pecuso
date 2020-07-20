export default async function getMenuData() {
  return [
    {
      category: true,
      title: 'Dashboards',
    },
    {
      title: 'Dashboards',
      key: 'dashboards',
      icon: 'fe fe-home',
      // roles: ['admin'], // set user roles with access to this route
      count: 5,
      children: [
        {
          title: 'Stock Analytics',
          key: 'dashboardAlpha',
          url: '/dashboard/alpha',
          disabled: true,
        },
        {
          title: 'Analyze your stocks',
          key: 'dashboardBeta',
          url: '/dashboard/beta',
          disabled: true,
        },
        {
          title: 'Portfolio',
          key: 'dashboardGamma',
          url: '/dashboard/gamma',
          disabled: true,
        },
        {
          title: 'Trading Terminal',
          key: 'dashboardCrypto',
          url: '/dashboard/crypto',
          disabled: true,
        },
        {
          title: 'Trade Terminal 2',
          key: 'dashboardGamma2',
          url: '/dashboard/gamma2',
          disabled: true,
        }
      ],
    },
    {
      category: true,
      title: 'Apps & Pages',
    },
    {
      title: 'Apps & Plugins',
      key: 'apps',
      icon: 'fe fe-database',
      disabled: true,
      children: [
        {
          title: 'Profile',
          key: 'appsProfile',
          url: '/apps/profile',
          disabled: true,
        },
        {
          title: 'Calendar',
          key: 'appsCalendar',
          url: '/apps/calendar',
          disabled: true,
        },
        {
          title: 'Gallery',
          key: 'appsGallery',
          url: '/apps/gallery',
          disabled: true,
        },
        {
          title: 'Messaging',
          key: 'appsCart',
          url: '/apps/messaging',
          disabled: true,
        },
        {
          title: 'Mail',
          key: 'appsMail',
          url: '/apps/mail',
          disabled: true,
        },
      ],
    },
    {
      title: 'Quant Tools',
      key: 'extraApps',
      icon: 'fe fe-hard-drive',
      disabled: true,
      children: [
        {
          title: 'Vector Value',
          key: 'extraAppsGithubExplore',
          url: '/apps/github-explore',
          disabled: true,
        },
        {
          title: 'Vector Addition',
          key: 'extraAppsGithubDiscuss',
          url: '/apps/github-discuss',
          disabled: true,
        },
        {
          title: 'Aroon Oscillator',
          key: 'extraAppsDigitaloceanDroplets',
          url: '/apps/digitalocean-droplets',
          disabled: true,
        },
        {
          title: 'Vector Arcsine',
          key: 'extraAppsDigitaloceanCreate',
          url: '/apps/digitalocean-create',
          disabled: true,
        },
        {
          title: 'Bollinger Bands',
          key: 'extraAppsGoogleAnalytis',
          url: '/apps/google-analytics',
          disabled: true,
        },
        {
          title: 'Linear Decay',
          key: 'extraAppsWordpressPost',
          url: '/apps/wordpress-post',
          disabled: true,
        },
        {
          title: 'Vector Division',
          key: 'extraAppsWordpressPosts',
          url: '/apps/wordpress-posts',
          disabled: true,
        },
        {
          title: 'Ease of Movement',
          key: 'extraAppsWordpressAdd',
          url: '/apps/wordpress-add',
          disabled: true,
        },
        {
          title: 'Moving Average',
          key: 'extraAppsTodoistList',
          url: '/apps/todoist-list',
          disabled: true,
        },
        {
          title: 'Exponential Decay',
          key: 'extraAppsJiraDashboard',
          url: '/apps/jira-dashboard',
          disabled: true,
        },
        {
          title: 'Linear Regression',
          key: 'extraAppsJiraAgileBoard',
          url: '/apps/jira-agile-board',
          disabled: true,
        },
        {
          title: 'Helpdesk Dashboard',
          key: 'extraAppsHelpdeskDashboard',
          url: '/apps/helpdesk-dashboard',
          disabled: true,
        },
      ],
    },
    {
      title: 'Algo Trading',
      key: 'ecommerce',
      icon: 'fe fe-shopping-cart',
      disabled: true,
      children: [
        {
          title: 'Day Trading',
          key: 'ecommerceDashboard',
          url: '/ecommerce/dashboard',
          disabled: true,
        },
        {
          title: 'Premium Day Trading',
          key: 'ecommerceOrders',
          url: '/ecommerce/orders',
          disabled: true,
        },
        {
          title: 'After Hour Day Trading',
          key: 'ecommerceProductCatalog',
          url: '/ecommerce/product-catalog',
          disabled: true,
        },
        {
          title: 'Trigger Trading',
          key: 'ecommerceProductDetails',
          url: '/ecommerce/product-details',
          disabled: true,
        },
        {
          title: 'Conditional Day Trading',
          key: 'ecommerceCart',
          url: '/ecommerce/cart',
          disabled: true,
        },
      ],
    },
    {
      title: 'Auth Pages',
      key: 'auth',
      icon: 'fe fe-user',
      disabled: true,
      children: [
        {
          title: 'Login',
          key: 'authLogin',
          url: '/auth/login',
          disabled: true,
        },
        {
          title: 'Forgot Password',
          key: 'authForgotPassword',
          url: '/auth/forgot-password',
          disabled: true,
        },
        {
          title: 'Register',
          key: 'authRegister',
          url: '/auth/register',
          disabled: true,
        },
        {
          title: 'Lockscreen',
          key: 'authLockscreen',
          url: '/auth/lockscreen',
          disabled: true,
        },
        {
          title: 'Page 404',
          key: 'auth404',
          url: '/auth/404',
          disabled: true,
        },
        {
          title: 'Page 500',
          key: 'auth500',
          url: '/auth/500',
          disabled: true,
        },
      ],
    },
    {
      category: true,
      title: 'Learning Agents',
      disabled: true,
    },
    {
      title: 'Agent X',
      key: 'antDesign',
      icon: 'fe fe-bookmark',
      url: '/ui-kits/antd',
      disabled: true,
    },
    {
      title: 'Agent Z',
      key: 'bootstrap',
      icon: 'fe fe-bookmark',
      url: '/ui-kits/bootstrap',
      disabled: true,
    },
    {
      category: true,
      title: 'Components',
      disabled: true,
    },
    {
      title: 'Widgets',
      key: 'widgets',
      icon: 'fe fe-image',
      count: 47,
      disabled: true,
      children: [
        {
          title: 'General',
          key: 'widgetsGeneral',
          url: '/widgets/general',
          disabled: true,
        },
        {
          title: 'Role Trigger',
          key: 'widgetsLists',
          url: '/widgets/lists',
          disabled: true,
        },
        {
          title: 'Activity Trigger',
          key: 'widgetsTables',
          url: '/widgets/tables',
          disabled: true,
        },
        {
          title: 'Charts',
          key: 'widgetsCharts',
          url: '/widgets/charts',
          disabled: false,
        },
      ],
    },
    {
      title: 'Foot Data',
      key: 'cards',
      icon: 'fe fe-credit-card',
      disabled: true,
      children: [
        {
          title: 'Basic Cards',
          key: 'cardsBasicCards',
          url: '/cards/basic-cards',
          disabled: true,
        },
        {
          title: 'Tabbed Cards',
          key: 'cardsTabbedCards',
          url: '/cards/tabbed-cards',
          disabled: true,
        },
      ],
    },
    {
      title: 'Tables',
      key: 'tables',
      icon: 'fe fe-grid',
      disabled: true,
      children: [
        {
          title: 'Ant Design',
          key: 'tablesAntd',
          url: '/tables/antd',
          disabled: true,
        },
        {
          title: 'Bootstrap',
          key: 'tablesBootstrap',
          url: '/tables/bootstrap',
          disabled: true,
        },
      ],
    },
    {
      title: 'Charts',
      key: 'charts',
      icon: 'fe fe-pie-chart',
      disabled: false,
      children: [
        {
          title: 'Chartist.js',
          key: 'chartsChartistjs',
          url: '/charts/chartistjs',
          disabled: false,
        },
        {
          title: 'Chart.js',
          key: 'chartsChartjs',
          url: '/charts/chartjs',
          disabled: false,
        },
        {
          title: 'C3',
          key: 'chartsC3',
          url: '/charts/c3',
          disabled: false,
        },
      ],
    },
    {
      title: 'GPS Data',
      key: 'icons',
      icon: 'fe fe-star',
      disabled: true,
      children: [
        {
          title: 'Feather Icons',
          key: 'iconsFeatherIcons',
          url: '/icons/feather-icons',
          disabled: true,
        },
        {
          title: 'Fontawesome',
          key: 'iconsFontawesome',
          url: '/icons/fontawesome',
          disabled: true,
        },
        {
          title: 'Linearicons Free',
          key: 'iconsLineariconsFree',
          url: '/icons/linearicons-free',
          disabled: true,
        },
        {
          title: 'Icomoon Free',
          key: 'iconsIcomoonFree',
          url: '/icons/icomoon-free',
          disabled: true,
        },
      ],
    },
    {
      category: true,
      title: 'Advanced',
      disabled: true,
    },
    {
      title: 'Crazy Shit',
      key: 'formExamples',
      icon: 'fe fe-menu',
      url: '/advanced/form-examples',
      disabled: true,
    },
    {
      title: 'Trigger Hooks',
      key: 'emailTemplates',
      icon: 'fe fe-mail',
      url: '/advanced/email-templates',
      disabled: true,
    },
    {
      title: 'Premium Data',
      key: 'pricingTables',
      icon: 'fe fe-command',
      url: '/advanced/pricing-tables',
      disabled: true,
    },
    {
      title: 'AI Filling Report',
      key: 'invoice',
      icon: 'fe fe-file-text',
      url: '/advanced/invoice',
      disabled: true,
    },
    {
      title: 'Utilities',
      key: 'utilities',
      icon: 'fe fe-inbox',
      url: '/advanced/utilities',
      disabled: true,
    },
    {
      title: 'Grid',
      key: 'grid',
      icon: 'fe fe-grid',
      url: '/advanced/grid',
      disabled: true,
    },
    {
      title: 'Heat Map',
      key: 'typography',
      icon: 'fe fe-type',
      url: '/advanced/typography',
      disabled: true,
    },
    {
      title: 'Stock Filter',
      key: 'colors',
      icon: 'fe fe-feather',
      url: '/advanced/colors',
      disabled: true,
    },
    {
      title: 'Even More Complex Shit',
      key: 'nestedItem1',
      icon: 'fe fe-layers',
      disabled: true,
      children: [
        {
          title: 'Nested Item 1-1',
          key: 'nestedItem1-1',
          children: [
            {
              title: 'Nested Item 1-1-1',
              key: 'nestedItem1-1-1',
            },
            {
              title: 'Nested Items 1-1-2',
              key: 'nestedItem1-1-2',
              disabled: true,
            },
          ],
        },
        {
          title: 'Nested Items 1-2',
          key: 'nestedItem1-2',
        },
      ],
    },
    {
      title: 'Disabled Item',
      key: 'disabledItem',
      icon: 'fe fe-slash',
      disabled: true,
    },
  ]
}