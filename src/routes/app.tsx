import { Outlet, createFileRoute } from '@tanstack/react-router'

import Layout from '../pages/layout'

export const Route = createFileRoute('/app')({
  component: () => <>
    <Layout/>
    <Outlet />
  </>
})