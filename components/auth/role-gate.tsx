import { FormError } from '@/components/form-error';
import { useCurrentRole } from '@/hooks/useCurrentRole';
import { UserRole } from '@prisma/client';
import { FC } from 'react';

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

const RoleGate: FC<RoleGateProps> = ({ children, allowedRole }) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message='You do not have permission to view this content!' />
    );
  }
  return <>{children}</>;
};

export default RoleGate;
