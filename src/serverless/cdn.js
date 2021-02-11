const DEFAULT_S_MAX_AGE = 24 * 60 * 60
const DEFAULT_MAX_STALE = Math.max(24 * 60 * 60 - DEFAULT_S_MAX_AGE, 1)

export function setCacheStaleWhileRevalidate (res, sMaxAge = DEFAULT_S_MAX_AGE, maxStale = DEFAULT_MAX_STALE) {
  res.setHeader('Cache-Control', `max-age=0, s-maxage=${sMaxAge}, stale-while-revalidate=${maxStale}`)
}
