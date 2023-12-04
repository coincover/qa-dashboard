// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  SupportAgentIcon
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const e2e = {
  id: 'e2e',
  title: 'E2E Test',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'e2e-identity-service',
      title: 'Identity Service',
      type: 'item',
      url: '/e2e/identity-service',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'e2e-recovery-as-a-service',
      title: 'Recovery as a service',
      type: 'item',
      url: '/e2e/recovery-as-a-service',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'e2e-transaction-protection',
      title: 'Transaction Protection',
      type: 'item',
      url: '/e2e/transaction-protection',
      icon: icons.IconShadow,
      breadcrumbs: false
    },
    {
      id: 'e2e-disaster-recovery',
      title: 'Disaster Recovery',
      type: 'item',
      url: '/e2e/disaster-recovery',
      icon: icons.IconWindmill,
      breadcrumbs: false
    },
    {
      id: 'ledger_support_tool',
      title: 'Ledger Support Tool',
      type: 'item',
      url: '/e2e/ledger_support_tool',
      icon: icons.SupportAgentIcon,
      breadcrumbs: false
    }
  ]
};

export default e2e;
