import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>pokemon no encontrado</h2>
      <p>Could not find requested resource</p>
      <Link href="/dashboard/counter">Return Home</Link>
    </div>
  )
}