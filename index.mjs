import fetch from 'isomorphic-fetch'

const base = 'https://oneom.tk'

// simple util to HTTP-get
const get = url => fetch(url, {headers: {'Accept': 'application/json'}})
  .then(r => {
    if (r.status !== 200) {
      const err = new Error(`Bad status: ${r.status}`)
      err.request = r
      throw (r)
    }
    return r.json()
  })

/**
 * List Tv Shows
 * @param  {Number} [limit]  Number of records to return (default)
 * @param  {Number} [offset] Page of records
 * @return {Promise}
 */
export const list = (limit = 100, offset = 0) => get(`${base}/serial/${limit}/${offset}`)

/**
 * Get extended info about a show, by ID
 * @param  {Number} id ID, as returned by `list()`
 * @return {Promise}
 */
export const show = (id) => get(`${base}/serial/${id}`)

/**
 * Get extended info about an episode
 * @param  {Number} id ID, as returned by `list()` or `show()`
 * @return {Promise}
 */
export const episode = (id) => get(`${base}/ep/${id}`)

/**
 * Search for Tv show by title
 * @param  {String} query Tv show title to seaarch for
 * @return {Promise}
 */
export const search = (query) => get(`${base}/serial/search/${encodeURIComponent(query)}`)

/**
 * Fresh eps with torrents
 * @return {Promise}
 */
export const fresh = () => get(`${base}/ep`)

/**
 * Get Tv Schedule for date
 * @param  {Date} [date] String (format: `YYYY-MM-DD`) or Date-object
 * @return {Promise}
 */
export const schedule = (date = new Date()) => {
  if (typeof date === 'string') {
    date = new Date(date)
  }
  return get(`${base}/ep/date/${date.getFullYear}`)
}

/**
 * Get config data, like lang list, source, country and such
 * @return {Promise}
 */
export const config = () => get(`${base}/date/config`)

export default { list, show, episode, search, fresh, schedule, config }

