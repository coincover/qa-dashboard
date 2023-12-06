// assets
import { IconGitPullRequest, IconHeadphones, IconShieldLock } from '@tabler/icons';
// ==============================|| UTILITIES MENU ITEMS ||============================== //

const sonarCloud = {
  id: 'sonarCloud',
  title: 'Sonar Cloud',
  type: 'group',
  children: [
    {
      id: 'sonarCloud-pull-request',
      title: 'Pull Request',
      type: 'collapse',
      icon: IconGitPullRequest,
      children: [
        {
          id: 'coincover-b2b2c',
          title: 'coincover-b2b2c',
          type: 'item',
          url: '/sonarCloud-pull-request/coincover-b2b2c',
          breadcrumbs: false
        },
        {
          id: 'coincover-txm',
          title: 'coincover-txm',
          type: 'item',
          url: '/sonarCloud-pull-request/coincover-txm',
          breadcrumbs: false
        }
      ]
    }
    // {
    //   id: 'jira-defect',
    //   title: 'Defects',
    //   type: 'item',
    //   url: '/jira/defect',
    //   icon: IconHeadphones,
    //   breadcrumbs: false
    // },
    // {
    //   id: 'jira-security',
    //   title: 'Securitys',
    //   type: 'item',
    //   url: '/jira/security',
    //   icon: IconShieldLock,
    //   breadcrumbs: false
    // }
  ]
};

export default sonarCloud;
