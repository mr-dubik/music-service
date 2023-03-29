import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Style.css'

function SkeletonSideBar() {
  return (
    <SkeletonTheme baseColor="#bbb4b4" highlightColor="#444">
      <Skeleton width={250} height={150} />
    </SkeletonTheme>
  )
}

export default SkeletonSideBar
