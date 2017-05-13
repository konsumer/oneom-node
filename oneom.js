import fetch from 'isomorphic-fetch'
import zpad from 'zpad'

const base = 'https://oneom.tk'

// simple util to HTTP-get
const get = url => fetch(base + url, {headers: {'Accept': 'application/json'}})
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
 * @param  {Number} [offset] start page (default: 0)
 * @param  {Number} [limit]  page-size (default: 100)
 * @return {Promise}
 */
export const list = (offset = 0, limit = 100) => get(`/serial/${limit}/${offset}`)

/**
 * Get extended info about a show, by ID
 * @param  {Number} id ID, as returned by `list()`
 * @return {Promise}
 */
export const show = (id) => get(`/serial/${id}`)

/**
 * Get extended info about an episode
 * @param  {Number} id ID, as returned by `list()` or `show()`
 * @return {Promise}
 */
export const episode = (id) => get(`/ep/${id}`)

/**
 * Search for Tv show by title
 * @param  {String} query Tv show title to seaarch for
 * @param  {String} [field] Field to search by: `title`, `network_id`, `country_id`, `genre_id`, `lang_id`, `people_id`, `character_id`, `tvrage_id`, `tvmaze_id`, `mdb_id`, `tvdb_id`, `status_id`, `runtime`, `start`, `end` (default: `title`)
 * @param  {Number} [limit] Number of results to return (default: 5)
 * @return {Promise}
 */
export const search = (query, field = 'title', limit = 5) => get(`/search/serial?limit=${limit}&${field}=${encodeURIComponent(query)}`)

/**
 * Fresh eps with torrents
 * @return {Promise}
 */
export const fresh = () => get(`/ep`)

/**
 * Get Tv Schedule for date
 * @param  {Date} [date] String (format: `YYYY-MM-DD`) or Date-object
 * @return {Promise}
 */
export const schedule = (date = new Date()) => {
  if (typeof date !== 'object') {
    date = new Date(date)
  }
  return get(`/ep/date/${date.getFullYear()}-${zpad(date.getMonth())}-${zpad(date.getDay())}`)
}

/**
 * Get config data, like lang list, source, country and such
 * @return {Promise}
 */
export const config = () => get(`/data/config`)

export default { list, show, episode, search, fresh, schedule, config }

