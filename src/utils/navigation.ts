// src/utils/navigation.ts

/**
 * Closes the Bootstrap collapse navigation menu
 * Works with Bootstrap 5 Collapse API with fallback
 */
export const closeNavMenu = (): void => {
  const navbarCollapse = document.getElementById('navbarNav')
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    // Use Bootstrap's Collapse API if available
    if (typeof window !== 'undefined' && (window as any).bootstrap) {
      const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse, {
        toggle: false
      })
      bsCollapse.hide()
    } else {
      // Fallback: manually remove the 'show' class
      navbarCollapse.classList.remove('show')
    }
  }
}