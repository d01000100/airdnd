'use client';

import { Toaster } from "react-hot-toast"

/**
 * Provider of Toaster component
 * 
 * The provider makes sure this component is a client component
 */
const ToasterProvider = () => {
  return <Toaster />;
}
 
export default ToasterProvider;