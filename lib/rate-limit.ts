import { LRUCache } from "lru-cache"

interface RateLimitOptions {
  uniqueTokenPerInterval: number
  interval: number // milliseconds
}

export function rateLimit(options: RateLimitOptions) {
  const tokenCache = new LRUCache<string, { count: number; lastReset: number }>({
    max: options.uniqueTokenPerInterval || 500,
    ttl: options.interval || 60 * 1000, // 1 minute
  })

  return {
    check: (limit: number, token: string): { success: boolean; headers: Record<string, string> } => {
      const now = Date.now()
      let tokenData = tokenCache.get(token)

      if (!tokenData || now - tokenData.lastReset > options.interval) {
        tokenData = { count: 0, lastReset: now }
        tokenCache.set(token, tokenData)
      }

      tokenData.count++
      tokenCache.set(token, tokenData) // Update cache with new count

      const remaining = limit - tokenData.count
      const reset = Math.ceil((tokenData.lastReset + options.interval - now) / 1000) // seconds until reset

      const headers: Record<string, string> = {
        "X-RateLimit-Limit": limit.toString(),
        "X-RateLimit-Remaining": Math.max(0, remaining).toString(),
        "X-RateLimit-Reset": reset.toString(),
      }

      return {
        success: remaining >= 0,
        headers,
      }
    },
  }
}

// Instantiate the rate limiter for API routes
export const apiLimiter = rateLimit({
  uniqueTokenPerInterval: 500, // Max unique tokens (IPs) per interval
  interval: 60 * 1000, // 1 minute
})
