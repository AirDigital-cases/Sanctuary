const assetModules = import.meta.glob('../assets/*', { eager: true, import: 'default' })

function findAsset(fileName) {
  for (const [path, source] of Object.entries(assetModules)) {
    if (path.endsWith(fileName)) {
      return source
    }
  }

  return null
}

export const sanctuaryLogo = findAsset('sanctuary-logo.png')
export const sanctuaryAnimation = findAsset('sanctuary-logo-animation.mp4')

