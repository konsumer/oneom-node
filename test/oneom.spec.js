/* global describe it beforeEach */

import chai from 'chai'
const expect = chai.expect
import chaiJestSnapshot from 'chai-jest-snapshot'

chai.use(chaiJestSnapshot)
beforeEach(function () { chaiJestSnapshot.configureUsingMochaContext(this) })

import { list, show, episode, search, fresh, schedule, config } from '../oneom.js'

describe('oneom', () => {
  describe('fresh()', () => {
    it('should list fresh episodes', () => fresh().then(shows => { expect(shows.future_eps.length).to.be.greaterThan(1) })).timeout(0)
  })
  describe('config()', () => {
    it('should get configuration', () => config().then(config => expect(config).to.matchSnapshot())).timeout(0)
  })
  describe('list()', () => {
    it('should list shows', () => list().then(shows => { console.log(shows); expect(shows.serials.length).to.be.greaterThan(1) })).timeout(0)
  })
  describe('list(1)', () => {
    it('should list shows on second page', () => list(1).then(shows => { console.log(shows.serials.length); expect(shows.serials.length).to.be.greaterThan(1) })).timeout(0)
  })
})

