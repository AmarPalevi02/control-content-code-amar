'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb: React.FC = () => {
   const pathname = usePathname()
   
   const generateBreadcrumbs = () => {
      const pathSegments = pathname.split('/').filter((segment) => segment);

      const breadcrumbs = pathSegments.map((segment, index) => {
         const href = '/' + pathSegments.slice(0, index + 1).join('/');
         return {
            href,
            label: segment.charAt(0).toUpperCase() + segment.slice(1),
         };
      });

      return breadcrumbs;
   };

   const breadcrumbs = generateBreadcrumbs();

   return (
      <nav className="flex items-center text-sm text-gray-500 mt-4">
         <Link href="/" className="hover:underline text-blue-600">
            Home
         </Link>
         {breadcrumbs.map((crumb, index) => (
            <span key={crumb.href} className="flex items-center">
               <span className="mx-2">/</span>
               {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-400">{crumb.label}</span>
               ) : (
                  <Link href={crumb.href} className="hover:underline text-blue-600">
                     {crumb.label}
                  </Link>
               )}
            </span>
         ))}
      </nav>
   );
};

export default Breadcrumb;
