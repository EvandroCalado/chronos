import { ComponentProps } from 'react';

import { Link } from 'react-router';

type RouterLinkProps = {
  href: string;
} & ComponentProps<'a'>;

export const RouterLink = ({ href, children, ...props }: RouterLinkProps) => {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
};
