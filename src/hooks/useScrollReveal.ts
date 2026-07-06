import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface UseScrollRevealOptions {
  threshold?: number
  once?: boolean
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.15, once = true } = options
  const ref = useRef<T>(null)
  const isInView = useInView(ref, {
    once,
    amount: threshold,
  })

  return { ref, isInView }
}
