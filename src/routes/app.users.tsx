import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/users')({
  component: () => <div>Hello /app/users!</div>
})