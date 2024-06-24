/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AppImport } from './routes/app'
import { Route as IndexImport } from './routes/index'
import { Route as AppUsersImport } from './routes/app.users'
import { Route as AppProductsImport } from './routes/app.products'
import { Route as AppHomeImport } from './routes/app.home'

// Create/Update Routes

const AppRoute = AppImport.update({
  path: '/app',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AppUsersRoute = AppUsersImport.update({
  path: '/users',
  getParentRoute: () => AppRoute,
} as any)

const AppProductsRoute = AppProductsImport.update({
  path: '/products',
  getParentRoute: () => AppRoute,
} as any)

const AppHomeRoute = AppHomeImport.update({
  path: '/home',
  getParentRoute: () => AppRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/app': {
      id: '/app'
      path: '/app'
      fullPath: '/app'
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/app/home': {
      id: '/app/home'
      path: '/home'
      fullPath: '/app/home'
      preLoaderRoute: typeof AppHomeImport
      parentRoute: typeof AppImport
    }
    '/app/products': {
      id: '/app/products'
      path: '/products'
      fullPath: '/app/products'
      preLoaderRoute: typeof AppProductsImport
      parentRoute: typeof AppImport
    }
    '/app/users': {
      id: '/app/users'
      path: '/users'
      fullPath: '/app/users'
      preLoaderRoute: typeof AppUsersImport
      parentRoute: typeof AppImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AppRoute: AppRoute.addChildren({
    AppHomeRoute,
    AppProductsRoute,
    AppUsersRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/app"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/app": {
      "filePath": "app.tsx",
      "children": [
        "/app/home",
        "/app/products",
        "/app/users"
      ]
    },
    "/app/home": {
      "filePath": "app.home.tsx",
      "parent": "/app"
    },
    "/app/products": {
      "filePath": "app.products.tsx",
      "parent": "/app"
    },
    "/app/users": {
      "filePath": "app.users.tsx",
      "parent": "/app"
    }
  }
}
ROUTE_MANIFEST_END */