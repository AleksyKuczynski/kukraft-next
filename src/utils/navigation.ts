// src/utils/navigation.ts

// Type declaration for Bootstrap Collapse
interface BootstrapCollapse {
  hide(): void;
}

interface WindowWithBootstrap extends Window {
  bootstrap?: {
    Collapse: new (element: Element, options?: { toggle: boolean }) => BootstrapCollapse;
  };
}

/**
 * Closes the Bootstrap collapse navigation menu
 * Works with Bootstrap 5 Collapse API with fallback
 */
export const closeNavMenu = (): void => {
  const navbarCollapse = document.getElementById('navbarNav')
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    // Use Bootstrap's Collapse API if available
    const windowWithBootstrap = window as WindowWithBootstrap;
    if (typeof window !== 'undefined' && windowWithBootstrap.bootstrap) {
      const bsCollapse = new windowWithBootstrap.bootstrap.Collapse(navbarCollapse, {
        toggle: false
      })
      bsCollapse.hide()
    } else {
      // Fallback: manually remove the 'show' class
      navbarCollapse.classList.remove('show')
    }
  }
}