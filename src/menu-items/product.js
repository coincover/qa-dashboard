import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PaidIcon from '@mui/icons-material/Paid';
import SosIcon from '@mui/icons-material/Sos';
import SupportIcon from '@mui/icons-material/Support';

const product = {
  id: 'product',
  title: 'Product / Services',
  caption: 'List of Products/Services',
  type: 'group',
  children: [
    {
      id: 'identity-service',
      title: 'Identity Service',
      type: 'collapse',
      url: '/identity-service',
      icon: FingerprintIcon,
      children: [
        {
          id: 'identity-service-e2e',
          title: 'E2E test',
          type: 'item',
          url: '/identity-service/e2e-test',
          breadcrumbs: false
        },
        {
          id: 'identity-service-unit',
          title: 'Unit test',
          type: 'item',
          url: '/identity-service/unit-test',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'recovery-as-a-service',
      title: 'Recovery as a service',
      type: 'collapse',
      url: '/e2e/recovery-as-a-service',
      icon: SupportIcon,
      children: [
        {
          id: 'recovery-as-a-service-e2e',
          title: 'E2E test',
          type: 'item',
          url: '/recovery-as-a-service/e2e-test',
          breadcrumbs: false
        },
        {
          id: 'recovery-as-a-service-unit',
          title: 'Unit test',
          type: 'item',
          url: '/recovery-as-a-service/unit-test',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'transaction-protection',
      title: 'Transaction Protection',
      type: 'collapse',
      url: '/transaction-protection',
      icon: PaidIcon,
      children: [
        {
          id: 'transaction-protection-e2e',
          title: 'E2E test',
          type: 'item',
          url: '/transaction-protection/e2e-test',
          breadcrumbs: false
        },
        {
          id: 'transaction-protection-unit',
          title: 'Unit test',
          type: 'item',
          url: '/transaction-protection/unit-test',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'disaster-recovery',
      title: 'Disaster Recovery',
      type: 'collapse',
      icon: SosIcon,
      children: [
        {
          id: 'disaster-recovery-e2e',
          title: 'E2E test',
          type: 'item',
          url: '/disaster-recovery/e2e-test',
          breadcrumbs: false
        },
        {
          id: 'disaster-recovery-unit',
          title: 'Unit test',
          type: 'item',
          url: '/disaster-recovery/unit-test',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'ledger_support_tool',
      title: 'Ledger Support Tool',
      type: 'collapse',
      icon: SupportAgentIcon,
      children: [
        {
          id: 'ledger_support_tool-e2e',
          title: 'E2E test',
          type: 'item',
          url: '/ledger_support_tool/e2e-test',
          breadcrumbs: false
        },
        {
          id: 'ledger_support_tool-unit',
          title: 'Unit test',
          type: 'item',
          url: '/ledger_support_tool/unit-test',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default product;
