export const getIOS = (): boolean => {
  const platform = window.navigator.platform;

  return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(platform)
    || window.navigator.userAgent.includes("Mac")
}
