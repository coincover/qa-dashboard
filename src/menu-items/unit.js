import { IconIdBadge2, IconLifebuoy, IconPalette, IconShieldCheck } from '@tabler/icons';

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
      icon: IconIdBadge2,
      breadcrumbs: false
    },
    {
      id: 'unit-recovery-as-a-service',
      title: 'Recovery as a service',
      type: 'item',
      url: '/unit/recovery-as-a-service',
      icon: IconPalette,
      breadcrumbs: false
    },
    {
      id: 'unit-transaction-protection',
      title: 'Transaction Protection',
      type: 'item',
      url: '/unit/transaction-protection',
      icon: IconShieldCheck,
      breadcrumbs: false
    },
    {
      id: 'unit-disaster-recovery',
      title: 'Disaster Recovery',
      type: 'item',
      url: '/unit/disaster-recovery',
      icon: IconLifebuoy,
      breadcrumbs: false
    }
  ]
};

export default unit;
