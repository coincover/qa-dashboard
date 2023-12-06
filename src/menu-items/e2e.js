// assets
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PaidIcon from '@mui/icons-material/Paid';
import SosIcon from '@mui/icons-material/Sos';
import SupportIcon from '@mui/icons-material/Support';

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const e2e = {
  id: 'e2e',
  title: 'Product / Services',
  caption: 'List of Products/Services',
  type: 'group',
  children: [
    {
      id: 'e2e-identity-service',
      title: 'Identity Service',
      type: 'item',
      url: '/e2e/identity-service',
      icon: FingerprintIcon,
      breadcrumbs: false
    },
    {
      id: 'e2e-recovery-as-a-service',
      title: 'Recovery as a service',
      type: 'item',
      url: '/e2e/recovery-as-a-service',
      icon: SupportIcon,
      breadcrumbs: false
    },
    {
      id: 'e2e-transaction-protection',
      title: 'Transaction Protection',
      type: 'item',
      url: '/e2e/transaction-protection',
      icon: PaidIcon,
      breadcrumbs: false
    },
    {
      id: 'e2e-disaster-recovery',
      title: 'Disaster Recovery',
      type: 'item',
      url: '/e2e/disaster-recovery',
      icon: SosIcon,
      breadcrumbs: false
    },
    {
      id: 'ledger_support_tool',
      title: 'Ledger Support Tool',
      type: 'item',
      url: '/e2e/ledger_support_tool',
      icon: SupportAgentIcon,
      breadcrumbs: false
    }
  ]
};

export default e2e;
