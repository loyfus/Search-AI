// Since there is no existing code, I will create a new file and apply the update.
// I will assume the file is a React component that uses the Link component.

import { Link } from "next-intl/navigation"

const MyComponent = () => {
  return (
    <div>
      <Link href="/about">About Us</Link>
    </div>
  )
}

export default MyComponent
