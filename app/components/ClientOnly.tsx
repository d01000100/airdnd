'use client';

import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode
}
 
/**
 * Component to wait for the application to mount
 * to render its children
 * @deprecated Fixed a Next bug that no longer happens
 */
const ClientOnly: React.FC<ClientOnlyProps> = ({children}) => {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true)}, [])

  return <>{children}</>;
}
 
export default ClientOnly;