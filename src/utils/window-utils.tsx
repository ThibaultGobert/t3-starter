export const isWindowDefined = () => window !== undefined || window !== null

export const isDesktop = () => isWindowDefined() && window.innerWidth > 450 