import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCTC(ctc?: number | null): string {
  if (!ctc) return 'Undisclosed'
  return `₹${ctc.toFixed(1)} LPA`
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-IN', {
    month: 'short',
    year: 'numeric',
  })
}

export function maskEmail(email?: string | null): string {
  if (!email) return 'N/A'
  const [username, domain] = email.split('@')
  if (!domain) return email
  if (username.length <= 2) return `${username}***@${domain}`
  return `${username.slice(0, 2)}***${username.slice(-1)}@${domain}`
}

export function maskPhone(phone?: string | null): string {
  if (!phone) return 'N/A'
  if (phone.length < 10) return '+91 ******'
  return `${phone.slice(0, 3)}****${phone.slice(-3)}`
}

export function getInitials(name?: string | null): string {
  if (!name) return 'U'
  const parts = name.trim().split(' ')
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
}

export function timeAgo(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const seconds = Math.floor((now.getTime() - d.getTime()) / 1000)

  if (seconds < 60) return 'Just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}d ago`
  return formatDate(d)
}
