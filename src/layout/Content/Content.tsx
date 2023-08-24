import { Suspense } from "react"
import ContentRoutes from "./ContentRoutes"

const Content = () => {
  return (
    <main>
        <Suspense fallback={null}>
            <ContentRoutes />
        </Suspense>
    </main>
  )
}

export default Content
