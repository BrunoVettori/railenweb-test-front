import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'

import Cookies from 'universal-cookie';

import Layout from '../pages/layout'

export const Route = createFileRoute('/app')({

  beforeLoad: () => {
    const cookies = new Cookies();

    let nome = cookies.get('Login')

    if (!nome) {
      throw redirect({ to: "/" })
    }

  },

  component: () => <>
    <Layout />
    <Outlet />
  </>
})