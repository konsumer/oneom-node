/* global describe it */

import { expect } from 'chai'

import { list, show, episode, search, fresh, schedule, config } from '../oneom.js'

let showStash
let epStash

describe('oneom', () => {
  describe('fresh()', () => {
    it('should list fresh episodes', () => fresh().then(shows => { expect(shows.future_eps.length).to.be.ok })).timeout(0)
  })
  describe('config()', () => {
    it('should get configuration', () => config().then(config => expect(config.network.length).to.be.ok)).timeout(0)
  })
  describe('list()', () => {
    it('should list shows', () => list().then(shows => {
      showStash = shows
      expect(shows.serials.length).to.be.ok
    })).timeout(0)
  })
  describe('list(1)', () => {
    it('should list shows on second page', () => list(1).then(shows => { expect(shows.serials.length).to.be.ok })).timeout(0)
  })
  describe('show()', () => {
    it('should get info about a show', () => {
      return show(showStash.serials[0].id)
        .then(info => {
          epStash = info.serial.ep
          expect(info.serial.ep.length).to.be.ok
        })
    }).timeout(0)
  })
  describe('episode()', () => {
    it('should get info about an episode', () => episode(epStash[0].id).then(ep => { expect(ep.ep.id).to.be.ok })).timeout(0)
  })
  describe('schedule()', () => {
    it('should get schedule for a day', () => schedule('2017-05-13').then(s => { expect(s.eps.length).to.be.ok })).timeout(0)
  })
  describe('search()', () => {
    it('should be able to search', () => search('Game Of Thrones').then(s => { expect(s.serials.length).to.be.ok })).timeout(0)
  })
})

