// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, IconShieldCheck, IconLifebuoy, IconIdBadge2 } from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconShieldCheck,
  IconWindmill,
  IconLifebuoy,
  IconIdBadge2
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const unit = {
  id: 'units',
  title: 'Unit Test',
  type: 'group',
  children: [
    {
      id: 'unit-identity-service',
      title: 'Identity Service',
      type: 'item',
      url: '/unit/identity-service',
      icon: icons.IconIdBadge2,
      breadcrumbs: false
    },
    {
      id: 'unit-recovery-as-a-service',
      title: 'Recovery as a service',
      type: 'item',
      url: '/unit/recovery-as-a-service',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'unit-transaction-protection',
      title: 'Transaction Protection',
      type: 'item',
      url: '/unit/transaction-protection',
      icon: icons.IconShieldCheck,
      breadcrumbs: false
    },
    {
      id: 'unit-disaster-recovery',
      title: 'Disaster Recovery',
      type: 'item',
      url: '/unit/disaster-recovery',
      icon: icons.IconLifebuoy,
      breadcrumbs: false
    }
  ]
};

export default unit;
