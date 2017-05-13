/* global describe it */

import { expect } from 'chai'
import { list, show, episode, search, fresh, schedule, config } from '../index.mjs'

console.log(list)

describe('oneom', () => {
  it('should have operational unit-tests', () => {
    expect(true).to.be.ok
  })
  describe('list()', () => {
    it('should list episodes', () => list().then(shows => { console.log(shows) }))
  })
})
