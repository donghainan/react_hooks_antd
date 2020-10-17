import Loadable from 'react-loadable'
const AsyncComponent = (componentName?: string): any => {
  if (!componentName) {
    return null
  }
  return Loadable({
    loader: () => import(`@/${componentName}`),
    loading: () => null,
  })
}

export default AsyncComponent